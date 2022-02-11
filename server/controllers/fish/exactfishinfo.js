const { fishes } = require("../../models");
const Sequelize = require("sequelize");

module.exports = async (req, res) => {
  const fish_name = req.body.data.fish_name;
  let fish = await fishes.findOne({
    where: { fish_name },
  });
  if (!fish) {
    return res.status(404).json({ message: "Can't find the fish" });
  } else {
    //const final = { fish_id: id, fish_name, habitat, temp, desc, fish_img };
    return res.status(200).json({
      data: fish.dataValues,
      message: "The fish data is successfully returned",
    });
  }
};
