const {
  container_fishes,
  containers,
  feeds,
  ex_waters,
  fishes,
} = require("../../models");
const { isAuthorized } = require("../tokenFunction");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const month = Number(req.params.month);
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container is not found" });
    } else {
      const { id, user_id, container_name, size, level, theme, last_lv_up } =
        container.dataValues;
      const fish_info_list = await container_fishes.findAll({
        where: { container_id },
      });

      let fish_list_final = [];
      if (fish_info_list.length === 0) {
        fish_list_final = [];
      } else {
        const fish_name_list = fish_info_list.map(
          (el) => el.dataValues.fish_name
        );
        let fish_list = await fishes.findAll({
          where: { fish_name: [fish_name_list] },
        });
        fish_list.map(async (el) => {
          let fishName = el.dataValues.fish_name;
          let fish_container_data = await container_fishes.findOne({
            where: { fish_name: fishName, container_id },
          });

          let result = {
            ...el.dataValues,
            fish_num: fish_container_data.dataValues.fish_num,
          };
          fish_list_final.push(result);
          return result;
        });
      }

      const feed_data = await feeds.findAndCountAll({
        where: { container_id },
        attributes: ["type"],
        group: [sequelize.literal("DATE(createdAt)"), "type"],
        order: [
          ["createdAt", "ASC"],
          ["type", "ASC"],
        ],
      });
      let feed_list = [];
      if (!feed_data) {
        feed_list = [];
      } else {
        feed_list = feed_data.count.map((el) => {
          return {
            createdAt: el["DATE(createdAt)"],
            type: el.type,
            count: el.count,
          };
        });
        feed_list = feed_list.filter((el) => {
          return Number(el.createdAt.slice(5, 7)) === month;
        });
        feed_list.sort((a, b) => {
          if (a.createdAt > b.createdAt) return 1;
          if (a.createdAt < b.createdAt) return -1;
          if (a.type > b.type) return 1;
          if (a.type < b.type) return -1;
        });

        feed_list = feed_list.map((el) => {
          return {
            createdAt: `${el.createdAt.slice(2, 4)}${el.createdAt.slice(
              5,
              7
            )}${el.createdAt.slice(8, 10)}`,
            type: el.type,
            count: el.count,
          };
        });
      }

      let ex_water_data = await ex_waters.findAll({
        where: { container_id },
        attributes: ["createdAt", "amount"],
        order: [["createdAt", "DESC"]],
      });

      let ex_water_list = [];
      if (!ex_water_data) {
        ex_water_list = [];
      } else {
        ex_water_list = ex_water_data.map((el) => {
          let fullDate = el.dataValues.createdAt.toISOString().slice(0, 10);
          return {
            createdAt: `${fullDate.slice(2, 4)}${fullDate.slice(
              5,
              7
            )}${fullDate.slice(8, 10)}`,
            amount: el.dataValues.amount,
          };
        });
        ex_water_list = ex_water_list.filter((el) => {
          return Number(el.createdAt.slice(2, 4)) === month;
        });
      }

      let final = {
        container_id: id,
        user_id,
        container_name,
        size,
        level,
        theme,
        feed_list,
        ex_water_list,
        fish_list: fish_list_final,
        last_lv_up,
      };
      console.log("NEW CONTAINER INFO FROM CONINFO", final);

      return res
        .status(200)
        .json({ data: final, message: "Data is successfully returned" });
    }
  }
};
