const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const axios = require("axios");
const { users } = require("../../models");
const { generateAccessToken } = require("../tokenFunction");

dotenv.config();

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_AUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_AUTH_REDIRECT_URL =
  "http://localhost:80/user/auth/google/callback";

module.exports = async (req, res) => {
  // 여기가 redirect uri 이므로
  // 여기서 다시 구글 token_url로 회원정보를 요청한다
  // 정보를 받고 db에 저장을 한 다음 redirect 를 이용해서 다시 메인화면으로 돌아간다.
  // console.log(req.query);
  //   const token = req.cookies;
  //   console.log(token);
  //   if (token) return res.redirect("https://underthesea.ga");

  const { code } = req.query;
  console.log(req.query);
  try {
    console.log("???");
    const { data } = await axios({
      method: "POST",
      url: `${GOOGLE_AUTH_TOKEN_URL}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: {
        grant_type: "authorization_code", //특정 스트링
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_SECRET_ID,
        redirectUri: GOOGLE_AUTH_REDIRECT_URL,
        code: code,
      },
    });

    const access_token = data["access_token"];
    console.log(access_token);

    const { data: userinfo } = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    console.log(userinfo);
    const { sub, email, name } = userinfo;
    const userInformation = {
      email: email,
      user_name: name,
      isSocialLogin: true,
    };

    const userdata = users
      .findOrCreate({
        where: userInformation,
      })
      .then(([result, create]) => {
        if (result) {
          delete result.dataValues.user_pwd;

          return result;
        }
        delete create.dataValues.user_pwd;

        return create;
      });

    const accessToken = generateAccessToken(userdata.dataValues);
    console.log(accessToken);

    res.cookie("jwt", accessToken, {
      httpOnly: true,
    });

    return res.redirect("https://underthesea.ga");
  } catch (error) {
    console.log(error);
  }
};