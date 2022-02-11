const { fishes } = require("../../models");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

module.exports = async (req, res) => {
  const fish_name = req.body.data.fish_name;
  let fish_list = await fishes.findAll({
    where: { fish_name: { [op.like]: `%${fish_name}%` } },
  });
  if (!fish_list) {
    return res.status(404).json({ message: "Can't find the fish" });
  } else {
    fish_list = fish_list.map((el) => el.dataValues);
    //const final = { fish_id: id, fish_name, habitat, temp, desc, fish_img };
    return res.status(200).json({
      data: fish_list,
      message: "The fish data is successfully returned",
    });
  }
};
