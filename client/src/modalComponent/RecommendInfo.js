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
  /* margin-top: 5px; */
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid red; */
`;

const ImgContainer = styled.div`
  width: 80%;
  height: 50%;
  /* border: 1px solid red; */
  display: flex;
  margin-top: 2%;
  margin-bottom: 1%;
  justify-content: space-between;
  p {
    margin-left: 20px;
    div {
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    margin-top: 4%;
    margin-bottom: 3%;
  }
`;
const Img = styled.img`
  /* border: 1px dashed red; */
  width: 20%;
  height: 100%;
`;

const NameCover = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const Name = styled.div`
  width: 20%;
  height: 100%;
  font-family: "Kfont";
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  align-items: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 750px) {
    width: 90%;
    font-size: 0.8rem;
  }
`;

const Skimmer = styled.img`
  width: 30%;
`;
function RecommendInfo() {
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
          <h2>초보자 추천어종</h2>
          <p>
            너무 다양한 해수어들이 있어 무엇부터 키워야 하는지 정하기 쉽지
            않습니다. 보통의 경우 크라운피쉬나 <br />
            탱종류의 물고기가 사육난이도가 적당합니다. 엔젤피쉬와
            버터플라이피쉬의 경우 중간 이상의 사육난이도를
            <br /> 갖고있어 입문하는 단계에서 시작하기 어렵습니다. 충분한
            준비과정을 마쳤다면 다음의 어종으로 시작하는 것을 추천합니다.
            <ImgContainer>
              <Img
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%8B%88%EB%AA%A8.jpeg"
                alt="니모"
              />
              <Img
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%ED%8C%8C%EC%9D%B4%EC%96%B4%EA%B3%A0%EB%B9%84.jpeg"
                alt="파이어고비"
              />
              <Img
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%B8%94%EB%A3%A8%ED%83%B1.jpeg"
                alt="블루탱"
              />
              <Img
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%98%90%EB%A1%9C%EC%9A%B0%ED%83%B1.jpeg"
                alt="/옐로우탱.jpeg"
              />
            </ImgContainer>
            <NameCover>
              <Name>퍼큘라 크라운</Name>
              <Name>파이어 고비</Name>
              <Name>블루탱</Name>
              <Name>옐로우탱</Name>
            </NameCover>
            가장 먼저 퍼큘라 크라운이 있습니다. 자연에서 채집된 개체와 양식으로
            키워진 개체가 모두 유통되며 양식으로 <br />
            키워진 개체가 조금 더 사육이 쉽습니다. 먹이 붙힘도 쉬운 편이며 쉽게
            접할 수 있는 어종입니다. <br />
            특이한 특징으로는 여러 마리가 있을 경우 가장 크기가 큰 개체가 암컷이
            됩니다. <br />
            가정에서 사육된 퍼큘라 크라운이 알을 붙히는 경우도 종종 있습니다.
            <br />
            <br />
            파이어 고비는 퍼큘라 크라운과 함께 사육하기 좋은 어종입니다. 매우
            온순한 성격을 갖고 있어서 <br />
            호전적인 어종과의 합사는 피하는 것이 좋습니다. 먹이 붙힘은 어렵지
            않지만 다른 물고기와 있을 때 먹이 <br />
            경쟁에서 잘 먹이를 먹는지 관찰이 필요합니다. 작은 공간에 숨는 습성이
            있어 은신처가 <br />
            필요하며 갑자기 놀라는 경우 물 밖으로 점프할 수 있어 주의가
            필요합니다.
            <br />
            <br />
            블루탱은 애니메이션 캐릭터 도리로 매우 유명한 어종입니다. 작은
            크기의 블루탱이 선호되는 <br />
            경향이 있지만 너무 작은 크기의 블루탱의 경우 장기사육이 어려울 수
            있어 피하는 것이 좋습니다. <br />
            바위 틈에 끼어서 자는 특이한 습성이 있으며 성장속도가 빠른 편입니다.
            <br />
            <br />
            옐로우탱은 노란색을 대표하는 해수어입니다. 다른 어종들과의 합사가
            무난한 편이며 블루탱, <br />
            플레임엔젤과 함께 신호등 조합으로 많이 키워집니다. 국내로 자주
            수입되어 접근하기 <br />
            쉽고 먹이 붙힘이 쉬워 입문자들에게 추천되는 어종입니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default RecommendInfo;
