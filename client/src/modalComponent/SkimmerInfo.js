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
    width: 80%;
  }
`;
const DryContainer = styled.div`
  display: flex;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const Dry = styled.img`
  width: 20%;
  @media screen and (max-width: 750px) {
    width: 80%;
  }
`;
const WetContainer = styled.div`
  display: flex;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const Wet = styled.img`
  width: 20%;
  @media screen and (max-width: 750px) {
    width: 80%;
  }
`;
function SkimmerInfo() {
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
          <h2>스키머란 무엇인가?</h2>
          <p>
            스키머는 미세버블을 이용하여 여과를 수행하는 장비입니다.
            <br /> 미세버블을 발생시키고 발생한 미세버블의 사이사이로 유기물을
            흡착하여 상단의 콜렉션 컵으로 모아줍니다.
            <br /> 스키머는 유기물의 분해단계 이전에 물리적으로 제거할 수 있는
            유일한 장치이며 생물학적 여과 장치의 로드를
            <br /> 줄여주며 잠재적으로 해수의 산화환원도를 개선합니다. 또한
            사용자는 눈으로 모인 양을 확인하고 <br />
            제거해줄 수 있어 관리가 쉽습니다.
          </p>
          <h2 className="structure">스키머의 구조</h2>
          <ImgContainer>
            <Skimmer
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%82%A4%EB%A8%B8%EA%B7%B8%EB%A6%BC.png"
              alt="스키머그림.png"
            />
            <p>
              <div className="sub-title">1. 공기조절벨브</div>
              스키머로 들어가는 공기유입량과 배출되는 물의 양을 조절하여 <br />
              버블의 양과 수위를 조절하는 기능을 합니다.
              <div className="sub-title">2. 콜렉션컵</div>
              스키머의 가장 상단에 위치하며 걸러낸 유기물을 포집합니다. <br />
              본체와 분리가 가능하여 주기적인 확인을 통해 세척해주어야 합니다.
              <div className="sub-title">3. 출수구</div>
              상단의 벨브를 이용하여 원하는 만큼의 물을 배출합니다.
              <div className="sub-title">4. 입수구</div>
              물과 공기를 스키머의 내부로 주입힙니다.
            </p>
          </ImgContainer>
          <h2 className="structure">스키머 사용의 방식</h2>
          <ImgContainer2>
            <DryContainer>
              <Dry
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%93%9C%EB%9D%BC%EC%9D%B4%EC%8A%A4%ED%82%A4%EB%B0%8D.png"
                alt="드라이스키밍.png"
              />
              <p>
                <div className="sub-title">드라이 스키밍</div>
                미세버블의 수위를 낮게 조절하여 오물을 진하게 모으는 방법입니다.
                <br />
                효율은 웻스키밍보다 다소 떨어지지만 콜렉션컵이 늦게 차기 때문에
                <br />
                청소주기가 길어집니다.
              </p>
            </DryContainer>
            <WetContainer>
              <Wet
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%9B%BB%EC%8A%A4%ED%82%A4%EB%B0%8D.png"
                alt="웻스키밍.png"
              />
              <p>
                <div className="sub-title">웻 스키밍</div>
                미세버블의 수위를 높게 조절하여 효율이 좋지만 컵이 빠르게
                <br />
                가득차기 때문에 청소주기가 짧아집니다. 자주 비워 주어야하는
                <br /> 만큼 염도가 변할 수 있으므로 염도유지에 신경써주면
                좋습니다.
              </p>
            </WetContainer>
          </ImgContainer2>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SkimmerInfo;
