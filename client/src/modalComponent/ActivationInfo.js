import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { modalOff } from "../store/actions";

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
  width: 70%;
  height: 80%;
  background: white;
  border-radius: 20px;
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 25px;
    height: 30px;
    position: fixed;
    display: flex;

    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;
const ContentContainer = styled.div`
  width: 95%;
  height: 90%;
  overflow: auto;
  /* border: 1px solid red; */
  .structure {
    margin-top: 50px;
  }
  h2 {
    padding-bottom: 5px;
    font-family: "Kfont";
    box-sizing: border-box;
    border-bottom: 2px solid #e5e5e5;
  }
  p {
    font-size: 18px;
    font-family: "Kfont";
  }
`;
const IconContainer = styled.div`
  width: 95%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
`;

const ImgContainer = styled.div`
  display: flex;
  p {
    margin-left: 20px;
    font-family: "Kfont";
    div {
      font-family: "Kfont";
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const ImgContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-left: 20px;
    div {
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
`;
const Skimmer = styled.img`
  width: 30%;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: auto;
  }
`;
function ActivationInfo() {
  const dispatch = useDispatch();

  return (
    <DarkBackGround>
      <ModalContainer>
        <IconContainer>
          <div className="btn">
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              color="#e5e5e5"
              onClick={() => dispatch(modalOff)}
            />
          </div>
        </IconContainer>
        <ContentContainer>
          <h2>물맞댐이 필요한 이유</h2>
          <p>
            새로 데려온 물고기가 있던 수족관의 수질과 집에 있는 수족관의 수질이
            다르기 때문에 <br /> 물고기가 이 차이에 적응할 수 있도록 하는 물맞댐
            과정이 필요합니다. 이런 과정을 통해 <br />
            초기 스트레스를 줄이고 새로운 환경에서의 성공적인 적응을 돕습니다.
          </p>
          <h2 className="structure">물맞댐 방법</h2>
          <ImgContainer>
            <Skimmer src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%AC%BC%EB%A7%9E%EB%8C%90.png" />
            <p>
              <div className="sub-title">1. 수온맞댐</div>
              처음 포장해온 봉지 그대로 수조에 30분 ~ 1시간 가량 띄워주어 수온을
              맞춰줍니다.
              <div className="sub-title">2. 수질맞댐</div>
              물맞댐 호스와 조절밸브를 이용하여 한방울씩 물고기가 담겨있는
              용기로 떨어뜨려 줍니다. 이 과정을 20분에서 한시간이상 진행하여
              충분히 새로운 수질에 적응할 시간을 확보합니다.
              <div className="sub-title">3. 마무리</div>
              뜰채를 이용하여 새로운 물고기를 수조로 옮깁니다.
            </p>
          </ImgContainer>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default ActivationInfo;
