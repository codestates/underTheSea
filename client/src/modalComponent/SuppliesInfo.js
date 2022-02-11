import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
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
  width: 60%;
  height: 80%;
  background: white;
  border-radius: 20px;
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
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

  .structure {
    margin-top: 50px;
  }
  h2 {
    font-family: "Kfont";
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 2px solid #e5e5e5;
  }
  p {
    font-family: "Kfont";
    font-size: 18px;
    line-height: 170%;
  }
`;
const IconContainer = styled.div`
  width: 95%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
`;
const SubTitle = styled.div`
  font-family: "Kfont";
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 5px;
`;
const Wave = styled.img`
  width: 70%;
  margin: 10px 0px;
  @media screen and (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
`;

const AquaBox = styled.img`
  width: 70%;
  margin: 20px 0px;
  @media screen and (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
`;
const Rock = styled.img`
  width: 80%;
  margin: 20px 0px;
  @media screen and (max-width: 750px) {
    width: 95%;
    margin: auto;
  }
`;

function SuppliesInfo() {
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
          <h2>필수 용품들</h2>
          <p>
            <SubTitle>1. 수조</SubTitle>
            가장 먼저 수조가 필요합니다. 수조의 크기는 보통 가로길이 30cm를
            기준으로 30cm당 1자라고 표현합니다. <br />
            만약 45cm의 수조라면 자반수조라고 부릅니다. 수조의 크기가 클수록
            여과능력도 좋아지며 키울 수 있는 <br />
            물고기의 종류와 마릿수도 많아지기 때문에 가능한 큰 크기의 수조를
            준비하는 것이 좋습니다.
            <br />
            <AquaBox
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%88%98%EC%A1%B0%ED%98%95%ED%83%9C.png"
              alt="수조형태"
            />
            <br />
            수조를 선택하기에 앞서 다양한 여과장치들이 들어가는 섬프수조의
            위치에 따라 사진 왹쪽같은 하단섬프형태와
            <br /> 오른쪽 사진과 같은 배면섬프의 형태가 있습니다. 최대한 많은
            물의 양과 생물들의 생활공간을 확보하기 위해 <br />
            하단섬프구조가 좋지만 45cm 이하의 수조라면 적은 비용으로 배면섬프를
            사용해도 괜찮습니다.
            <br />
            <br />
            <SubTitle>2. 조명</SubTitle>
            일반적으로 사용되는 조명에는 3가지 종류가 있습니다. 메탈등, T5, LED
            조명이 대표적입니다. 현재 가장 널리 <br />
            사용되고 있는 조명은 LED조명으로 물고기수조부터 산호수조까지
            사용되고 있습니다. 현재 시판되고 있는
            <br /> 조명들은 다양한 기능과 거치방식들이 있으며 운영하고자하는
            테마에 따라서 조명을 선택할 수 있습니다.
            <br />
            <br />
            <SubTitle>3. 라이브락 / 데드락</SubTitle>
            해수수조에서는 생물들의 은신처와 수조의 레이아웃, 산호를 놓을 공간
            등의 이유로 락을 이용하여 환경을 조성합니다. <br />
            라이브락이란 다양한 박테리아와 해조류들이 살고 있는 락입니다. 보다
            자연스러운 연출과 수질 안정화에 도움이 될 수 <br />
            있지만 원치 않았던 털게, 맨티스 등의 히치하이커들이 있을 수도 있으며
            수조에 유해한 무척추 생물들이 같이 살 수도 <br />
            있기 때문에 데드락을 사용할 수도 있습니다.
            <Rock
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%9D%BD%EC%84%B8%ED%8C%85%EC%82%AC%EC%A7%84.jpeg"
              alt="락세팅사진.jpeg"
            />
            <SubTitle>4. 수류모터</SubTitle>
            <Wave
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%88%98%EB%A5%98%EB%AA%A8%ED%84%B0.png"
              alt="수류모터.png"
            />
            <br />
            자연의 바다에도 해류가 흐르는 것이 자연스럽듯 우리들의 바다에도
            흐름이 필요합니다. 수조 환경에서는
            <br /> 수류모터를 이용하여 흐름을 만들 수 있습니다. 일반적으로
            그림과 같은 형태로 벽면에 붙혀서 사용하며,
            <br /> 필요에 따라 하나 이상의 모터를 사용하며 직접 세기와 방향을
            조절하면서 세팅할 수 있습니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SuppliesInfo;
