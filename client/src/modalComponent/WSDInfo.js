import React from "react";
import styled from "styled-components";
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
  .noMargin {
    margin: 0px;
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
  width: 20%;
  height: 80%;
  @media screen and (max-width: 750px) {
    width: 50%;
  }
`;
const DryContainer = styled.div`
  display: flex;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const Dry = styled.img`
  width: 40%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

function WSDInfo() {
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
          <h2>백점병이란 무엇인가?</h2>
          <p>
            가장 흔하게 볼 수 있는 질병으로 기생충에 의해 발병합니다. 해수어의
            온몸에 흰색 점이 관찰되고 <br />
            증상이 심해지면 폐사에 이를 수 있는 질병입니다.
          </p>
          <h2 className="structure">백점병의 원인</h2>
          <ImgContainer>
            <Skimmer
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%B0%B1%EC%A0%90%EB%B3%91%EC%9B%90%EA%B7%A0.png"
              alt="백점병원균.png"
            />
            <p>
              <i>Cryptocaryon irritans</i> 라는 기생충에 의해 발병합니다. <br />
              백점충이 해수어에 기생하기 시작하면 피부와 아가미 속으로
              <br /> 파고들어 피해를 주며 해수어는 생체방어기작에 의해 점액층을
              <br /> 생성합니다.
            </p>
          </ImgContainer>
          <h2 className="structure">백점충의 생활사</h2>
          <ImgContainer2>
            <DryContainer>
              <Dry
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EB%B0%B1%EC%A0%90%EC%B6%A9%EC%83%9D%ED%99%9C%EC%82%AC.png"
                alt="백점충생활사.png"
              />
              <p className="noMargin">
                백점충의 생활사는 28일 이상을 지속할 수 있으며 3단계로 나눌 수
                <br />
                있습니다. 1단계는 영양체 단계로 이 단계에서 감염된 개체의 피부나
                <br />
                아가미로 파고들어 피해를 줍니다. 2단계인 피낭유충 단계가 되면
                <br />
                감염된 개체로부터 떨어져 나와 낭포를 형성합니다. 이렇게 형성된
                <br />
                낭포는 3~28일이 흐르면 다수의 유영체가 부화합니다. 부화한
                <br />
                유영체는 새로운 숙주를 찾아서 돌아다닙니다.
              </p>
            </DryContainer>
          </ImgContainer2>
          <h2>백점병의 증상</h2>
          <p>
            해수어의 지느러미, 눈, 피부에서 선명한 흰색 점이 발견되고 점들 간의
            간격은 촘촘하지
            <br />
            않습니다. 지느러미가 부식되거나 안구백탁, 단단한 물체에 몸을
            비비거나 갑자기 빠르게 <br />
            돌진하는 등의 증상도 나타날 수 있기 때문에 세심하게 관찰해야 하고
            즉각 치료과정에
            <br /> 돌입해야 합니다.
          </p>
          <h2>백점병의 치료</h2>
          <p>
            포르말린이나 메틸렌블루를 이용한 치료방법도 존재하지만 가장 쉽게
            실현이 가능한
            <br /> 방법인 황산동을 이용한 치료방법이 가장 보편적으로 쓰이고
            있습니다. 황산동을 포함한 <br />
            약품(큐프라민 등)을 사용하여 치료합니다. 수조의 황산동농도를 올릴
            때는 천천히 수치를
            <br /> 올려야하며 정해진 용법을 준수해야합니다. 별도의 황산동농도
            측정 키트를 사용하여
            <br /> 농도를 측정하며, 적정한 황산동농도는 0.5mg/L 이며 최소 28일
            이상 유지해야 합니다.
            <br />
            <br />
            백점충의 생활사중 유영체시기에 물속을 돌아다니므로 이 시기에
            황산동을 이용하여 백점충을 <br />
            구제하는 방식의 치료법입니다. 따라서 적정농도의 유지는 매우 중요하며
            투약할 때는 농도를
            <br />
            체크하면서 투약해야 합니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default WSDInfo;
