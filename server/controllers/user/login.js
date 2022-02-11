const { users } = require("../../models");
const { generateAccessToken } = require("../tokenFunction");

module.exports = async (req, res) => {
  const { email, user_pwd } = req.body.data;
  if (!email || !user_pwd) {
    return res.status(400).json({ message: "Not enough data" });
  } else {
    const user = await users.findOne({ where: { email, user_pwd } });
    if (!user) {
      return res.status(401).json({ message: "You don't have an account yet" });
    } else {
      delete user.dataValues.user_pwd;

      const accessToken = generateAccessToken(user.dataValues);
      return res
        .cookie("jwt", accessToken, {
          httpOnly: true,
        })
        .status(201)
        .json({ token: accessToken, message: "JWT token returned" });
    }
  }
};
