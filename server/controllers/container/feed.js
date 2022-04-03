const { feeds, containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  console.log("피드요청 오니?");
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const type = req.body.data.type;
    const date = new Date();
    const month = date.getMonth() + 1;
    const check_container = await containers.findOne({
      where: { id: container_id },
    });
    if (!check_container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else {
      await feeds.create({ container_id, type });
      return res
        .header("Authorization", req.headers.authorization)
        .redirect(`https://yesjin.link/container/${container_id}/${month}`);
    }
  }
};
