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
    /* border: 1px solid red; */
  }
`;
const Img = styled.img`
  width: 20%;
  height: 25%;
  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: auto;
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
  /* border: 1px solid red; */
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 20px;
    font-family: "Kfont";
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

function HowToManageInfo() {
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
          <h2 className="fresh">민물욕</h2>
          <ImgContainer>
            <Img src="/민물욕중.jpeg" />
            <p>
              기생충을 제거하는데 효과적인 민물욕은 수온을 맞춰주면 쉽게 시행이
              가능하고 검역과정에서 <br />
              간격을 두고 2~3회 실시하면 매우 좋습니다. 상태가 안좋은 해수어에게
              민물욕을 해야할 때는
              <br /> 정말 민물욕이 필요한 경우인지 판단해보고 진행해야 합니다.
              민물욕은 수조와 동일한 수온과
              <br /> pH를 갖는 민물을 준비하여 충분한 에어레이션을 시켜준 후
              민물욕을 하는 개체의 상태에
              <br /> 따라서 약 5~20분 사이로 진행하게 되는데 사육자가 계속
              상태를 지켜보는 것이 좋습니다.
              <br /> 상태가 좋으면 민물욕에서 받은 스트레스를 금방 회복하지만
              상태가 안좋은 경우 짧게
              <br /> 진행하고 며칠의 간격을 두는 것이 좋습니다.
              <br />
              <br />
            </p>
          </ImgContainer>
          <h2>포획과 격리</h2>
          <p>
            포획기능이있는 격리통을 사용한다면 구조물이 많은 수조에서 최소한의
            스트레스로 원하는
            <br /> 개체를 포획할 수 있습니다. 개체간 다툼이 문제가 될 경우
            격리시키는 방법은 효과적일 수<br /> 있습니다. 새로운 해수어를
            투입할때 격리통을 이용하여 먼저 먹이적응을 시킬 경우에도 <br />
            용이하게 사용될 수 있습니다.
            <br />
            <br />
          </p>
          <h2>타겟피딩</h2>
          <p>
            먹이반응이 왕성한 해수어들이 가득한 수조에서는 피딩할 때 유심히
            지켜보는 것이 매우 <br />
            중요합니다. 무심코 모든 해수어들이 잘 먹고 있다고 생각하기 쉽습니다.
            먹이반응이 <br />
            좋지만 경쟁에 밀린 개체나 먹이반응이 좋지 못한 개체를 발견했다면
            포획 및 격리하여 <br />
            따로 피딩을 해주거나 스포이드를 이용한 타겟피딩으로 정상적인
            먹이급이를 할 수 있도록 <br />
            해야합니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default HowToManageInfo;
