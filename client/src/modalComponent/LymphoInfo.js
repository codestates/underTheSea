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
  width: 60%;
  height: 80%;
  background: white;
  border-radius: 20px;
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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
`;
const DryContainer = styled.div`
  display: flex;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const Dry = styled.img`
  width: 14%;
  @media screen and (max-width: 750px) {
    width: 80%;
  }
`;

function LymphoInfo() {
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
          <h2>림포란?</h2>
          <p>
            바이러스에의해 발생하는 질병으로 감염된 해수어의 표피에 수포모양의
            종양을 발생시킵니다.
          </p>
          <h2 className="structure">림포의 원인</h2>

          <p>
            Lymphocystis 바이러스에 의해 발병합니다. 치사율이 높진 않지만
            지속적인 스트레스 관리가 필요합니다.
          </p>

          <h2 className="structure">림포의 증상</h2>
          <ImgContainer2>
            <DryContainer>
              <Dry src="/림포사진.png" alt="백점충생활사.png" />
              <p className="noMargin">
                주로 지느러미 말단 부분에 수포 형태의 종양이 발생하며 경우에
                <br />
                따라 아가미 또는 입에 발생하는 경우도 있습니다.
              </p>
            </DryContainer>
          </ImgContainer2>
          <h2>림포의 치료</h2>
          <p>
            림포는 굉장히 쉽게 발견할 수 있는 질병으로 아직까지 명확한
            치료방법은 알려진 것이 없습니다. <br />
            일단 한 개체에서 발견되면 다른 개체도 림포가 생길 가능성이 높습니다.
            림포는 해수어의
            <br /> 외관을 안좋게 만들지만 증상이 심하게 악화되지 않는다면 폐사에
            이르는 확률은 높지 않습니다. <br />
            하지만 입주변이나 아가미에서 증상이 심해진다면 매우 위험할 수
            있으므로 즉시 림포가 심한
            <br /> 개체에게 스트레스가 될 수 있는 요인을 찾아 제거하고
            수질환경개선을 진행해야 합니다.
            <br />
            <br />
            림포가 매우 심할 경우에 물 밖으로 꺼내어 소독된 날카로운 물건이나
            카드 등을 이용하여
            <br /> 긁어내거나 림포가 생긴 부위를 자르는 물리적 제거방법이 있지만
            명확한 해결방법이라고
            <br /> 보기는 어려우며 오히려 스트레스를 가중시켜 증상이 악화될 수
            있기 때문에 매우 신중히 <br />
            결정해야 합니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default LymphoInfo;
