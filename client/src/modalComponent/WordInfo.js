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
  width: 40%;
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
    width: 80%;
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
`;

const AquaBox = styled.img`
  width: 70%;
  margin: 20px 0px;
`;
const Rock = styled.img`
  width: 80%;
  margin: 20px 0px;
`;

function WordInfo() {
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
          <h2>물생활용어모음</h2>
          <p>
            <SubTitle>핀</SubTitle>
            보통 해수어의 길게 늘어진 지느러미
            <br />
            <SubTitle>알지</SubTitle>
            수조에서 발생하는 조류(이끼)
            <br />
            <SubTitle>프랙</SubTitle>
            모체로부터 잘라낸 작은 산호
            <br />
            <SubTitle>유어</SubTitle>
            아직 어린 단계의 물고기
            <br />
            <SubTitle>성어</SubTitle>
            다 자란 물고기
            <br />
            <SubTitle>여과</SubTitle>
            수조의 물을 정화하는 일련의 모든 과정
            <br />
            <SubTitle>섬프</SubTitle>
            여과에 필요한 모든 장비들을 넣고 수조에서 넘어온 물을 여과할
            <br /> 수 있도록 하단 또는 측면에 위치한 수조
            <br />
            <SubTitle>디밍</SubTitle>
            조명이 켜고 꺼질 때 해가 뜨고 지는 것과 비슷한 효과를 주는
            <br />
            조명의 기능
            <br />
            <SubTitle>우드스톤</SubTitle>
            에어리프트 방식의 스키머에서 미세버블을 만들기 위해서 사용되는
            소모품
            <br />
            <SubTitle>디아망</SubTitle>
            '저철분유리'를 일컫는 표현으로 일반유리보다 투명도가 높은 유리
            <br />
            <SubTitle>도징</SubTitle>
            수조에 첨가제, 박테리아제 등을 첨가하는 행위
            <br />
            <SubTitle>유막</SubTitle>
            수면에 생기는 기름막
            <br />
            <SubTitle>자반</SubTitle>
            가로 45cm의 수조 (1자 = 30cm)
            <br />
            <SubTitle>백탁</SubTitle>
            수조의 물이 뿌옇게 흐려지는 현상
            <br />
            <SubTitle>축양</SubTitle>
            생물을 건강하게 보존하고 관리하는 일
            <br />
            <SubTitle>컬쳐</SubTitle>
            양식으로 키워진 개체
            <br />
            <SubTitle>큐브</SubTitle>
            가로, 세로와 높이가 모두 동일한 크기의 수조
            <br />
            <SubTitle>활착</SubTitle>
            산호가 프랙베이스나 락에 안전하게 접착한 상태
            <br />
            <SubTitle>나노수조</SubTitle>
            일반적으로 45큐브 이하의 수조
            <br />
            <SubTitle>피코수조</SubTitle>
            일반적으로 30큐브 이하의 수조
            <br />
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default WordInfo;
