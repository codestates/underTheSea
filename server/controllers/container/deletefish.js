const { container_fishes, containers, fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const { fish_num, fish_name } = req.body;

    const check_container = await containers.findOne({
      where: { id: container_id },
    });
    const check_fish = await fishes.findOne({
      where: { fish_name },
    });

    if (!check_container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else if (!check_fish) {
      return res.status(404).json({ message: "The fish doesn't exist" });
    } else {
      let now = new Date();
      const month = now.getMonth() + 1;
      let container_fish = await container_fishes.findOne({
        where: { fish_name, container_id },
      });
      if (!container_fish) {
        return res.status(400).json({
          message: "The fish is not in the container",
        });
      } else {
        if (container_fish.dataValues.fish_num <= fish_num) {
          // container_fish = await container_fish.increment("fish_num", {
          //   by: Number(container_fish.dataValues.fish_num) * -1,
          // });
          await container_fishes.destroy({
            where: { container_id, fish_name },
          });
        } else {
          container_fish = await container_fish.increment("fish_num", {
            by: Number(fish_num) * -1,
          });
        }

        container_fish = await container_fishes.findOne({
          where: { fish_name, container_id },
        });
        return res
          .header("Authorization", req.headers.authorization)
          .redirect(
            `${process.env.REACT_APP_API_URL}/container/info/${container_id}/${month}`
          );
        // return res.status(201).json({
        //   data: { container_fish },
        //   message: "The fish is successfully removed",
        // });
      }
    }
  }
};
