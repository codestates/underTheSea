import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

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
  width: 40%;
  height: 70%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  @media screen and (max-width: 820px) {
    width: 80%;
    height: 70%;
    overflow: scroll;
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
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const InfoShow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 95%;
`;

const Title = styled.div`
  width: 90%;
  font-size: 1.25rem;
  font-family: "Kfont";
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  font-family: "Kfont";
  line-height: 150%;
`;
const ImgShow = styled.img`
  width: 45%;
  @media screen and (max-width: 820px) {
    width: 43%;
  }
`;
const ImgCover = styled.div`
  width: 90%;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;
const LevelInfoCover = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  width: 90%;
`;

const LevelInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  align-items: center;
  width: 45%;
`;
const BtnCover = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 40px;
  margin: 10px 0px;
`;
const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Kfont";
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 1rem;
`;

// 환수목록받아온거에서 가장끝번 인덱스
function HelpInfo() {
  const dispatch = useDispatch();

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <CloseBtn>
            <FontAwesomeIcon
              icon={faTimes}
              color="#e5e5e5"
              onClick={() => dispatch(modalOff)}
            />
          </CloseBtn>
        </CloseBtnContainer>
        <ShowContainer>
          <InfoShow>
            {/* <ImgShow
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/level.png"
              alt="level"
            /> */}
            <Title>여기는 어떤 페이지인가요?</Title>
            <Content>
              underTheSea에서는 수조에 먹이를 준 횟수와 환수량을 기록할 수
              있습니다. 한 주 동안 총 14회의 피딩과 1회의 환수를 기록하시면
              레벨이 올라가고 메인이미지가 바뀌게 됩니다. 일일 2회의 피딩과
              주1회의 환수를 권장 드리며 추후 레벨에 따른 혜택을 준비중입니다.
            </Content>
            <ImgCover>
              <ImgShow src={process.env.REACT_APP_SERVER_API + `/level/11`} />
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
              <ImgShow src={process.env.REACT_APP_SERVER_API + `/level/61`} />
            </ImgCover>
            <LevelInfoCover>
              <LevelInfo>Lv. 1</LevelInfo>
              {/* <LevelInfo></LevelInfo> */}
              <LevelInfo>Lv. 6</LevelInfo>
            </LevelInfoCover>
            <BtnCover>
              <Button>피딩기록</Button>
              <Button>환수기록</Button>
            </BtnCover>
            <Content>
              환수기록 버튼을 누르면 4가지의 먹이 타입중 하나를 선택하여
              피딩횟수를 추가할 수 있습니다. 환수기록 버튼은 환수량(L)을
              입력하고 추가 기록시 일일 총량이 달력에 기록됩니다.
            </Content>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default HelpInfo;
