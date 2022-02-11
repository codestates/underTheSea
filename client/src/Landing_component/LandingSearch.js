import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: 2000px;
  height: 130vh;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #d2f7ff, #70d6ff);
  .txt1 {
    z-index: 999;
  }
  .txt2 {
    z-index: 999;
  }
  .txt3 {
    z-index: 999;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 80vh;
  }
`;

const ManImg = styled.img`
  position: absolute;
  width: 37%;
  height: 54%;
  right: 10%;
  bottom: 12%;

  @media screen and (max-width: 480px) {
    width: 55%;
    height: 50%;
    top: 13%;
    right: 3%;
  }
`;
const CoralL = styled.img`
  position: relative;
  width: 12%;
  height: 16%;
  top: 32%;
  right: 38%;
  @media screen and (max-width: 480px) {
    width: 19%;
    height: 16%;
    top: 3%;
    margin-bottom: 5%;
    right: 32%;
  }
`;
const CoralS = styled.img`
  position: relative;
  width: 8%;
  height: 11%;
  top: 34%;
  right: 38%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 480px) {
    width: 13%;
    height: 12%;
    top: 3%;
    margin-bottom: 1%;
    right: 33%;
  }
`;

const TextContainer = styled.div`
  margin: auto;
  position: absolute;
  left: 15%;
  top: 45%;
  display: flex;
  flex-direction: column;
  font-size: max(1vw, 0.7rem);

  @media screen and (max-width: 1024px) {
    left: 10%;
    bottom: 70%;

    .txt1 {
      font-size: max(2vw, 0.6rem);
      line-height: 160%;
    }
    .txt2 {
      font-size: max(2vw, 1.5rem);
    }
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    width: 70%;
    left: 15%;
    top: 73%;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 0%;

    .txt1 {
      font-size: 0.8rem;
      line-height: 120%;
      text-align: center;
      line-height: 150%;
    }
    .txt2 {
      font-size: 1rem;
      display: flex;
      text-align: center;
      position: relative;
      left: 30%;
    }
  }
`;
const MainText = styled.div`
  position: relative;
  bottom: 50%;
  font-weight: 900;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #092011;
`;

const SearchText = styled.div`
  position: relative;
  margin-bottom: 10%;
  text-align: left;
  z-index: 900;
  color: #092011;
  font-size: 1.4em;
  line-height: 150%;
  font-family: "Kfont";
`;
const SearchTitle = styled.div`
  /* border: 1px solid blue; */
  /* position: absolute; */
  z-index: 900;
  font-weight: 900;
  font-size: 1.7em;
  display: flex;
  position: relative;
  margin-bottom: 30%;
`;

const IconCover = styled.div`
  margin-left: 10px;
`;

function LandingSearch() {
  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        start: "80px 100%",
        end: "top 20%",
        // markers: true,
        toggleActions: "play none restart pause",
      },
    });
    txtTimeline.from(".txt1", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".txt2", { opacity: 0, y: 50, duration: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        start: "80px 100%",
        end: "top 20%",
        // markers: true,
        toggleActions: "play none restart pause",
      },
    });
    tl.from(".manImg", { opacity: 0, x: -100, duration: 1 });
  }, []);

  return (
    <Container>
      <ManImg
        className="manImg"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인남자인물.png"
        alt="메인남자인물.png"
      />
      <CoralL
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png"
        alt="해초.png"
      />
      <CoralS
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png"
        alt="해초.png"
      />
      {/* <Fish
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/무리.png"
        alt="무리.png"
      /> */}
      <TextContainer>
        <MainText className="txt1">물고기 정보 검색</MainText>
        <SearchText>
          <div className="txt1">
            다양한 물고기의 종류를 알고 싶으시다면<br></br>
            어종명으로 검색해보세요.<br></br>자세한 정보를 알려드립니다.
          </div>
        </SearchText>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <SearchTitle className="txt2">
            검색페이지
            <IconCover>
              <FontAwesomeIcon size="1x" icon={faAngleDoubleRight} />
            </IconCover>
          </SearchTitle>
        </Link>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingSearch;
