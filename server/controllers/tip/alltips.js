const { tips, users } = require("../../models");

module.exports = async (req, res) => {
  const limit = 12;
  const page_num = Number(req.params.page_num);
  // console.log(page_num);
  const offset = (page_num - 1) * limit;

  const tip = await tips.findAll();
  const tip_num = tip.length;
  const tip_data = await tips.findAll({
    offset: offset,
    limit: 12,
    order: [["createdAt", "DESC"]],
  });

  // console.log(tip_data);

  const all_tip_data = await Promise.all(
    tip_data.map(async (el) => {
      const user_id = el.dataValues.user_id;
      const user_data = await users.findOne({ where: { id: user_id } });

      return {
        tip_id: el.dataValues.id,
        user_id,
        user_name: user_data.dataValues.user_name,
        title: el.dataValues.title,
        content: el.dataValues.content,
        created_at: el.dataValues.createdAt,
        updated_at: el.dataValues.updatedAt,
      };
    })
  );

  return res.status(200).json({
    data: all_tip_data,
    tip_num,
    message: "Messages are successfully returned",
  });
};
