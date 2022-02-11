const { comments, tips } = require("../../models");
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

    const comment = await comments.findAll({
      where: { user_id },
    });

    const comment_length = comment.length;

    const commnets_data = await comments.findAll({
      offset,
      limit,
      where: { user_id },
      order: [["createdAt", "DESC"]],
    });

    const user_comments = await Promise.all(
      commnets_data.map(async (el) => {
        const tip_id = el.dataValues.tip_id;
        const comment_tip = await tips.findOne({
          where: { id: tip_id },
        });
        return {
          tip_title: comment_tip.dataValues.title,
          tip_id,
          content: el.dataValues.content,
          createdAt: el.dataValues.createdAt,
        };
      })
    );

    return res.status(200).json({
      data: user_comments,
      length: comment_length,
      message: "User's comments data  is successfully returned",
    });
  }
};
