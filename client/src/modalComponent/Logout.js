import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalOff, logoutAction } from "../store/actions";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 25%;
  height: 25%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  align-items: center;

  z-index: 999;
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid red; */
`;
const Title = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  /* color: #108dee; */
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 10px;
  /* border-bottom: 2px solid #108dee; */
  margin-bottom: 30px;
  /* border: 1px solid red; */
`;

const LoginBtn = styled.button`
  width: 80%;
  height: 50px;
  background: #108dee;
  border-style: none;
  padding: 10px;
  border-radius: 4px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
`;

//=========================================================================

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);
  const accessToken = localStorage.getItem("accessToken");
  const [userData, setUserData] = useState({
    email: "",
    user_pwd: "",
  });

  const handleInputValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_API}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", "");
        navigate("/");
        dispatch(logoutAction);
        dispatch(modalOff);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#e5e5e5"
            onClick={() => dispatch(modalOff)}
          />
        </CloseBtnContainer>
        <Title>로그아웃 하시겠습니까?</Title>
        <LoginBtn type="button" onClick={handleLogout}>
          로그아웃
        </LoginBtn>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default Logout;
