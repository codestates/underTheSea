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

const FilterMedia = styled.img`
  width: 70%;
  margin: 20px 0px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
const Rock = styled.img`
  width: 80%;
  margin: 20px 0px;
`;

function FilterMediaInfo() {
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
          <h2>여과재란</h2>
          <p>
            {/* <SubTitle>1. 수조</SubTitle> */}
            수조에서 여과재의 역할은 여과라는 과정에 직접적으로 기여하는
            여과박테리아들의 서식공간을 제공하는 <br />
            역할입니다. 현재 여과재는 다양한 형태로 제작되고 있으며
            여과박테리아는 반드시 여과재 안에서 서식하는 <br />
            것은 아닙니다. 라이브락이나 데드락의 작은 공간이나 바닥재의 입자
            사이사이 공간에도 서식할 수 있습니다.
            <br />
            <FilterMedia
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%EC%97%AC%EA%B3%BC%EC%9E%AC%ED%99%95%EB%8C%80.png"
              alt="여과재"
            />
            <br />
            여과재는 한번 넣어두고 영구적으로 사용하기보다 주기적으로 세칙 및
            교환 등의 관리가 필요합니다. <br />
            여과재를 세척할 때는 전부 한꺼번에 세척하기보다 전체 여과재의 10~20%
            정도를 꺼내서 깨끗한 환수물에 <br />
            세척한 후 재사용하는 것이 좋습니다.
          </p>
        </ContentContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default FilterMediaInfo;
