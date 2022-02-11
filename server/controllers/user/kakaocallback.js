const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const axios = require("axios");
const { users } = require("../../models");
const { generateAccessToken } = require("../tokenFunction");
const console = require("better-console");
const qs = require("qs");

dotenv.config();

module.exports = async (req, res) => {
  const { session, query } = req;
  const { code } = query;

  console.info("==== session ====");
  console.log(session);

  const url = `https://kauth.kakao.com/oauth/token`;

  let tokenResponse;
  try {
    tokenResponse = await axios({
      method: "POST",
      url,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID,
        client_secret: process.env.KAKAO_SECRECT_ID,
        redirect_uri: `${process.env.REACT_APP_API_URL}/auth/kakao/callback`,
        code,
      }),
    });
  } catch (error) {
    return res.json(error.data);
  }

  console.info("==== tokenResponse.data ====");
  console.log(tokenResponse.data);

  const { access_token } = tokenResponse.data;

  let userResponse;

  try {
    userResponse = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return res.json(error.data);
  }

  console.info("==== userResponse.data ====");
  console.log(userResponse.data);

  const authData = {
    ...tokenResponse.data,
    ...userResponse.data,
  };

  const result = linkUser(session, "kakao", authData);

  if (result) {
    console.info("계정에 연결되었습니다.");
  } else {
    console.warn("이미 연결된 계정입니다.");
  }

  res.redirect("http://localhost:3000/mypage");
};

function linkUser(session, provider, authData) {
  let result = false;
  if (session.authData) {
    if (session.authData[provider]) {
      // 이미 계정에 provider 가 연결되어 있는 경우
      return result;
    }

    session.authData[provider] = authData;
  } else {
    session.authData = {
      [provider]: authData,
    };
  }

  result = true;

  return result;
}
