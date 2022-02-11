const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const check_container = await containers.findOne({
      where: { id: container_id },
    });

    if (!check_container) {
      return res.status(404).json({
        message: "The container is not found",
      });
    } else {
      const new_container_name = req.body.data.container_name;
      const new_size = req.body.data.size;
      const new_salinity = req.body.data.salinity;
      const new_theme = req.body.data.theme;
      const new_fish_num = req.body.data.fish_num;

      const { container_name, size, salinity, theme, fish_num } =
        check_container.dataValues;

      const edit_container_name = new_container_name || container_name;
      const edit_size = new_size || size;
      const edit_salinity = new_salinity || salinity;
      const edit_theme = new_theme || theme;
      const edit_fish_num = new_fish_num || fish_num;

      const new_container = {
        container_name: edit_container_name,
        size: edit_size,
        salinity: edit_salinity,
        theme: edit_theme,
        fish_num: edit_fish_num,
      };
      await containers.update(new_container, { where: { id: container_id } });
      return res.status(200).json({
        data: new_container,
        mesage: "The data is successfully updated",
      });
    }
  }
};
