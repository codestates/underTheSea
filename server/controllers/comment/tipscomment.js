const { tips, comments, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);
  const tip_id = req.params.tip_id;
  const comment_data = await comments.findAll({ where: { tip_id } });
  let isWriter = false;
  let id, user_name;

  if (userinfo) {
    id = userinfo.id;
    user_name = userinfo.user_name;
  }

  const comment = await Promise.all(
    comment_data.map(async (el) => {
      const user_id = el.dataValues.user_id;
      const user_data = await users.findOne({ where: { id: user_id } });

      if (user_id === id) {
        isWriter = true;
      } else {
        isWriter = false;
      }

      return {
        comment_id: el.dataValues.id,
        comment_user_name: user_data.dataValues.user_name,
        comment_content: el.dataValues.content,
        updated_at: el.dataValues.createdAt,
        isWriter,
      };
    })
  );

  return res.status(200).json({
    data: comment,
    user_name,
    message: "The comment list is successfully returned",
  });
};
