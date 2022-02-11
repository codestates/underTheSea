const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  const user_id = userInfo.id;
  const { container_name, size, theme, type } = req.body.data;
  const check_container = await containers.findOne({
    where: { container_name },
  });
  if (check_container) {
    return res.status(400).json("The container name is already exist");
  } else {
    console.log(type);
    let level = Number(type);
    const new_container = await containers.create({
      user_id,
      container_name,
      size,
      theme,
      level,
    });
    return res.status(201).json({
      data: new_container.dataValues,
      message: "Container is successfully added",
    });
  }
};
