import styled from "styled-components";
import React, { useState } from "react";
import Header2 from "../component/Header2";
import SkimmerCard from "../component/SkimmerCard";
import SkimmerInfo from "../modalComponent/SkimmerInfo";
import SuppliesCard from "../component/SuppliesCard";
import SuppliesInfo from "../modalComponent/SuppliesInfo";
import { useSelector } from "react-redux";
import Footer from "../component/Footer";
import FilterMediaCard from "../component/FilterMediaCard";
import FilterMediaInfo from "../modalComponent/FilterMediaInfo";
import ActivationCard from "../component/ActivationCard";
import ActivationInfo from "../modalComponent/ActivationInfo";
import RecommendCard from "../component/RecommendCard";
import RecommendInfo from "../modalComponent/RecommendInfo";
import WSDCard from "../component/WSDCard";
import WSDInfo from "../modalComponent/WSDInfo";
import LymphoCard from "../component/LymphoCard";
import LymphoInfo from "../modalComponent/LymphoInfo";
import HowToManageCard from "../component/HowToManageCard";
import HowToManageInfo from "../modalComponent/HowToManageInfo";
import WordCard from "../component/WordCard";
import WordInfo from "../modalComponent/WordInfo";

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
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  .main {
    font-weight: bold;
    font-size: 2.5rem;
  }
  .sub {
    margin-top: 15px;
    font-size: 1.25rem;
    font-weight: 500;
    color: #26262f;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Img = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  border: 2px solid #e5e5e5;
`;
const Option = styled.option``;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  column-gap: 55px;
  margin-bottom: 10%;
  @media screen and (max-width: 1500px) {
    grid-template-columns: 300px 300px 300px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 300px 300px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 300px;
  }
`;

function SeaWaterGuide() {
  const state = useSelector((state) => state.modalReducer);
  const {
    isSkimmerModal,
    isSeaBasicInfoModal,
    isFilterMediaModal,
    isActivationModal,
    isRecommendModal,
    isWSDInfoModal,
    isLymphoModal,
    isHtmModal,
    isWordModal,
  } = state;

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
          <Img src="https://iconmage.s3.ap-northeast-2.amazonaws.com/투명바다1.png" />
          <div className="main">Saltwater Guide</div>
          {/* Saltwater Guide */}
          <div className="sub">해수어에 관한 다양한 지식들을 만나보세요</div>
        </Title>
        <SearchContainer>
          <Select name="카테고리" onChange={handleInputValue}>
            <Option value="all">전체보기</Option>
            <Option value="basic">기본정보</Option>
            <Option value="equipment">용품정보</Option>
            <Option value="disease">질병정보</Option>
          </Select>
        </SearchContainer>
        <InfoContainer>
          {cardTag.tag === "all" && <SuppliesCard />}
          {cardTag.tag === "all" && <ActivationCard />}
          {cardTag.tag === "all" && <RecommendCard />}
          {cardTag.tag === "all" && <SkimmerCard />}
          {cardTag.tag === "all" && <FilterMediaCard />}
          {cardTag.tag === "all" && <WSDCard />}
          {cardTag.tag === "all" && <LymphoCard />}
          {cardTag.tag === "all" && <HowToManageCard />}
          {cardTag.tag === "all" && <WordCard />}
          {cardTag.tag === "basic" && <SuppliesCard />}
          {cardTag.tag === "basic" && <ActivationCard />}
          {cardTag.tag === "basic" && <RecommendCard />}
          {cardTag.tag === "basic" && <HowToManageCard />}
          {cardTag.tag === "basic" && <WordCard />}
          {cardTag.tag === "equipment" && <SkimmerCard />}
          {cardTag.tag === "equipment" && <FilterMediaCard />}
          {cardTag.tag === "disease" && <WSDCard />}
          {cardTag.tag === "disease" && <LymphoCard />}
        </InfoContainer>
        {isSkimmerModal && <SkimmerInfo />}
        {isSeaBasicInfoModal && <SuppliesInfo />}
        {isFilterMediaModal && <FilterMediaInfo />}
        {isActivationModal && <ActivationInfo />}
        {isRecommendModal && <RecommendInfo />}
        {isWSDInfoModal && <WSDInfo />}
        {isLymphoModal && <LymphoInfo />}
        {isHtmModal && <HowToManageInfo />}
        {isWordModal && <WordInfo />}
      </Container>
      <Footer />
    </>
  );
}
export default SeaWaterGuide;
