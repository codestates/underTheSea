import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useDispatch } from "react-redux";

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
  width: 20%;
  height: 20%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 25%;
  }
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 10%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* border: 1px solid red; */
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.25rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 30px;
`;

const Btn = styled.button`
  width: 100%;
  height: 30px;
  border-style: none;
  border-radius: 4px;
  background: #108dee;
  display: flex;
  justify-content: center;
  align-items: center;
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

function ExChangeWaterInput({ handleExwaterValue, handleExwaterAddRequest }) {
  const dispatch = useDispatch();

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <CloseBtn>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => dispatch(modalOff)}
              color="#e5e5e5"
            />
          </CloseBtn>
        </CloseBtnContainer>
        <ShowContainer>
          <Form>
            <Text>환수량을 입력해주세요</Text>
            <Input
              placeholder="환수량(L)을 입력해주세요"
              type="number"
              onChange={handleExwaterValue}
            />
            <Btn type="button" onClick={handleExwaterAddRequest}>
              선택완료
            </Btn>
          </Form>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default ExChangeWaterInput;
