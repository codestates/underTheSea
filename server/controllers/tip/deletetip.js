const { tips, comments } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const tip_id = req.params.tip_id;

    await comments.destroy({ where: { tip_id } });
    await tips.destroy({ where: { id: tip_id } });
    return res
      .status(200)
      .json({ message: "The article is successfully removed" });
  }
};
