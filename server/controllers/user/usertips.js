const { tips } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);
  const limit = 7;
  const page_num = Number(req.params.page_num);
  const offset = (page_num - 1) * limit;

  if (!userinfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;

    const tip = await tips.findAll({
      where: { user_id },
    });

    const tip_length = tip.length;

    const tips_data = await tips.findAll({
      offset,
      limit,
      where: { user_id },
      order: [["createdAt", "DESC"]],
    });

    const user_tips = tips_data.map((el) => {
      return {
        tip_id: el.dataValues.id,
        title: el.dataValues.title,
        content: el.dataValues.content,
        created_at: el.dataValues.updatedAt,
      };
    });

    return res.status(200).json({
      data: user_tips,
      length: tip_length,
      message: "User's tip data  is successfully returned",
    });
  }
};
