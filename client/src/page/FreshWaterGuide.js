import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
// 배경흰색헤더
import Header2 from "../component/Header2";
import GuideinfoCard from "../component/GuideinfoCard";
import SkimmerCard from "../component/SkimmerCard";
import SkimmerInfo from "../modalComponent/SkimmerInfo";
import SuppliesCard from "../component/SuppliesCard";
import SuppliesInfo from "../modalComponent/SuppliesInfo";
import { useSelector } from "react-redux";
import Footer from "../component/Footer";
// import FilterMediaCard from "../component/FilterMediaCard";
// import FilterMediaInfo from "../modalComponent/FilterMediaInfo";
// import ActivationCard from "../component/ActivationCard";
// import ActivationInfo from "../modalComponent/ActivationInfo";
// import RecommendCard from "../component/RecommendCard";
// import RecommendInfo from "../modalComponent/RecommendInfo";
// import WSDCard from "../component/WSDCard";
// import WSDInfo from "../modalComponent/WSDInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  background-image: url("/담수어가이드배경.png");
  .sub {
    margin-top: 15px;
    font-size: 1.25rem;
    font-weight: 500;
    color: #26262f;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 70%;
  height: 20vh;
  /* border: 1px solid blue; */
`;

const Select = styled.select`
  width: 160px;
  height: 40px;
  position: absolute;
  border-radius: 4px;
  left: 0;
  bottom: 15%;
  border: 2px solid #108dee;

  /* -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;
const Option = styled.option`
  background: black;
  /* color: red; */
  /* border: 2px solid #108dee; */
`;

const TextCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* border: 1px solid red; */
`;

const Text = styled.div`
  /* border: 1px solid red; */
  margin-top: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  /* border: 2px dashed red; */
  /* margin-bottom: 10%; */
`;

function FreshWaterGuide() {
  const [cardTag, setCardTag] = useState({
    tag: "all",
  });

  const handleInputValue = (e) => {
    setCardTag({
      ...cardTag,
      tag: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <Header2 />
        <Title>
          Freshwater Guide
          <div className="sub">담수어는 어떻게 시작할까?</div>
        </Title>
        <InfoContainer>
          <TextCover>
            <FontAwesomeIcon icon={faTools} size="8x" />
            <Text>서비스 준비중입니다</Text>
          </TextCover>
        </InfoContainer>
      </Container>
      <Footer />
    </>
  );
}
export default FreshWaterGuide;
