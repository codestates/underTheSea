const { containers, ex_waters } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);
  const limit = 7;
  const page_num = req.params.page_num;
  const offset = (page_num - 1) * limit;
  // console.log(userinfo);

  if (!userinfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;
    const user_name = userinfo.user_name;

    const container = await containers.findAll({
      where: { user_id },
    });

    const container_length = container.length;

    const container_data = await containers.findAll({
      offset,
      limit,
      where: { user_id },
    });
    // console.log(container_data, ":;;;;;;");

    const user_container = await Promise.all(
      container_data.map(async (el) => {
        const container_id = el.dataValues.id;

        const ex_water_data = await ex_waters.findAll({
          where: { container_id },
          order: [["createdAt", "DESC"]],
        });

        let last_ex_water = "";
        if (ex_water_data.length === 0) {
          last_ex_water = "";
        } else {
          last_ex_water = ex_water_data[0].dataValues.createdAt;
        }

        return {
          container_id: el.dataValues.id,
          container_name: el.dataValues.container_name,
          size: el.dataValues.size,
          level_img: el.dataValues.level_img,
          fish_num: el.dataValues.fish_num,
          // last_ex_water: last_ex_water,
          theme: el.dataValues.theme,
        };
      })
    );

    return res.status(200).json({
      data: user_container,
      length: container_length,
      user_name,
      message: "User's container data is successfully returned",
    });
  }
};
