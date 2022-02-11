const { users } = require("../../models");
const { generateAccessToken, isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  // 제일 먼저 토큰이 있는지 확인
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];

  // 토큰이 있다면
  if (token) {
    const userinfo = isAuthorized(req); // userinfo 확인
    if (userinfo) {
      return res.status(200).json({ status: 1, message: "is login" });
    }
    return res.status(200).json({ status: 2, message: "retry login" });
  } else {
    return res.status(200).json({ status: 3, message: "is not login" });
  }
};
