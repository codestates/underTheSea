import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signoutAction, modalOff } from "../store/actions";

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
  width: 22%;
  height: 35%;
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

  @media screen and (min-width: 2000px) {
    width: 15%;
    height: 28%;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 220px;
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
  align-items: center;
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
  font-size: 1rem;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    top: -30%;
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

  @media screen and (max-width: 1024px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 8%;
  }

  @media screen and (max-width: 480px) {
    top: 60%;
    height: 50%;
    width: 80%;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
  }
`;
const CancleBtn = styled.button`
  width: 45%;
  height: 97%;
  background: #e1e1e1;
  color: black;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  padding: 0.7em 0 0.7em;

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

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 100%;
    padding: 0em;
    height: 40%;
  }
`;
const SignOutBtn = styled.button`
  width: 45%;
  height: 97%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  padding: 0.7em 0 0.7em;
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

  @media screen and (max-width: 1024px) {
    font-size: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 100%;
    padding: 0em;
    height: 40%;
    margin-bottom: 3%;
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
              ????????? ??????????????????? <br></br> ????????? ?????? ????????? ?????? ???????????????.
            </Text>
          </TextForm>
          <Btn>
            <CancleBtn
              type="button"
              onClick={() => {
                dispatch(modalOff);
              }}
            >
              ?????????. ???????????????.
            </CancleBtn>
            <SignOutBtn type="button" onClick={signOut}>
              ???. ???????????????.
            </SignOutBtn>
          </Btn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignOut;
