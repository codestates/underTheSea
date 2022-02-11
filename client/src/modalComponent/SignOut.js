import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signoutAction, modalOff } from "../store/actions";
// 1.7 송다영 1차 회원탈퇴 설정 (리덕스로 상태 관리 예정)

const DarkBackGround = styled.div`
  z-index: 999;
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
  z-index: 999;
  width: 25%;
  height: 40%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  border-radius: 20px;

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 50%;
  }
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  right: 3%;
  top: 0%;
  width: 12%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Form = styled.form`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

const TextForm = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  top: 22%;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;
const Text = styled.div`
  position: relative;
  line-height: 170%;
  font-family: "Kfont";
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    top: -20%;
    width: 80%;
    font-size: 0.9rem;
  }
`;
const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: row;
  position: absolute;
  top: 80%;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    top: 75%;
    height: 45%;
    width: 80%;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
  }
`;
const CancleBtn = styled.button`
  width: 45%;
  height: 90%;
  background: #e1e1e1;
  color: black;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 100%;
    margin-bottom: 5%;
  }
`;
const SignOutBtn = styled.button`
  width: 45%;
  height: 90%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 100%;
  }
`;
//=======================================================================

function SignOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  function signOut() {
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        console.log(result, "!!!!!!!!");
        dispatch(signoutAction);
        navigate("/");
      });
  }

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#e5e5e5"
            onClick={() => {
              dispatch(modalOff);
            }}
          />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>
              정말로 탈퇴하시나요? <br></br> 탈퇴시 유저 정보가 모두 삭제됩니다.
            </Text>
          </TextForm>
          <Btn>
            <CancleBtn
              type="button"
              onClick={() => {
                dispatch(modalOff);
              }}
            >
              아니요. 취소합니다.
            </CancleBtn>
            <SignOutBtn type="button" onClick={signOut}>
              네. 탈퇴합니다.
            </SignOutBtn>
          </Btn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignOut;
