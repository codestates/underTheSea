import React from "react";
import styled, { keyframes } from "styled-components";
import "./Landingpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Container = styled.div`
  max-width: 2000px;
  height: 90vh;
  margin: auto;
  background: linear-gradient(to top, #70d6ff, #d2f7ff);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #flightPath {
    fill: none;
    stroke: blue;
    stroke-width: 2px;
  }

  @media screen and (max-width: 480px) {
    height: 105vh;
    width: 100%;
    overflow: hidden;
  }
`;
const MaxContainer = styled.div`
  width: 100%;
  margin-bottom: 6%;
`;

const SeaWeed = styled.img`
  width: 15%;
  margin: 0 auto;
  /* width: 15%; */
  position: absolute;
  bottom: 0px;
  right: 2%;
  opacity: 0.7;
  display: flex;

  @media screen and (max-width: 1024px) {
    /* max-width: 12rem; */
    bottom: 0%;
    right: 2%;
  }
  @media screen and (max-width: 480px) {
    width: 20%;
    bottom: 14%;
    right: 2%;
  }
`;
const SeaWeedL = styled.img`
  /* width: 15%; */
  width: 17%;
  margin: auto;
  position: absolute;
  bottom: 0px;
  left: 5%;
  display: flex;

  @media screen and (max-width: 1024px) {
    /* max-width: 12rem; */
    bottom: 2%;
    left: 0%;
  }
  @media screen and (max-width: 480px) {
    width: 25%;
    bottom: 15%;
    left: 0%;
  }
`;

const Coral = styled.img`
  width: 13%;
  margin: auto;
  /* width: 10%; */
  position: absolute;
  bottom: 12px;
  right: 17%;
  opacity: 0.7;
  display: flex;

  @media screen and (max-width: 1024px) {
    /* width: 10%; */
    right: 15%;
    bottom: 1%;
  }
  @media screen and (max-width: 480px) {
    width: 15%;
    right: 15%;
    bottom: 14%;
  }
`;

const BubbleL = styled.img`
  width: 27%;
  margin: auto;
  /* width: 27%; */
  position: absolute;
  left: 2%;
  bottom: 7%;
  @media screen and (max-width: 1024px) {
    /* width: 20%; */
    bottom: 10%;
    left: 7%;
  }
  @media screen and (max-width: 480px) {
    width: 35%;
    bottom: 15%;
    left: 7%;
  }
`;

const BubbleR = styled.img`
  width: 22%;
  margin: auto;
  /* width: 22%; */
  position: absolute;
  right: 11%;
  bottom: 14%;
  @media screen and (max-width: 1024px) {
    /* width: 20%; */
    bottom: 10%;
    right: 7%;
  }
  @media screen and (max-width: 480px) {
    width: 35%;
    bottom: 17%;
    right: 10%;
  }
`;

const Shark = styled.img`
  width: 15%;
  margin: auto;
  position: absolute;
  left: 15%;
  top: 2%;
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 480px) {
    width: 25%;
    position: absolute;
    left: 7%;
    top: 2%;
  }
`;

const JellyFish = styled.img`
  width: 12%;
  margin: auto;
  /* width: 9%; */
  position: absolute;
  left: 10%;
  bottom: 30%;

  @media screen and (max-width: 1024px) {
    left: 8%;
  }
  @media screen and (max-width: 480px) {
    width: 19%;
    left: 200px;
    bottom: 72%;
  }
`;

const Fish1 = styled.img`
  position: absolute;
  width: 15%;
  bottom: 59%;
  right: 17%;
  margin: auto;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 480px) {
    width: 20%;
    display: flex;
    bottom: 30%;
    left: -30%;
    /* border: 1px solid black; */
    /* right: 20%;
    bottom: 20px;
    position: relative; */
  }
`;

const Fish3 = styled.img`
  width: 9rem;
  margin: auto;
  /* width: 9%; */
  position: absolute;
  bottom: 43%;
  right: 4%;

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 10%;
    bottom: 15%;
    right: 25%;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    width: 17%;
    bottom: 35%;
    right: 10%;
  }
`;

const MainImg = styled.img`
  width: 35%;
  margin: auto;
  display: flex;
  justify-content: center;
  bottom: 47%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;
const TilteContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  font-family: "Kfont";
  width: 30%;
  height: 10%;
  color: #092011;

  @media screen and (max-width: 480px) {
    width: 80%;
    margin-bottom: 40%;
  }
  /* border: 4px solid red; */
`;
const Contents = styled.div`
  /* font-size: 150%; */
  font-weight: 500%;
  font-size: max(2vw, 1.2rem);

  @media screen and (max-width: 860px) {
    font-size: max(2vw, 0.8rem);
  }
  @media screen and (max-width: 480px) {
    display: flex;
    font-size: 1rem;
    font-weight: 450;
    line-height: 140%;
    left: 0%;
  }
`;

const Bubble = styled.div`
  z-index: 20;
`;

const Bimg = styled.img`
  width: 7%;
  margin: auto;
  position: absolute;
  animation: bubble infinite linear 6s;

  @media screen and (max-width: 480px) {
    display: none;
    .b1 {
      position: relative;
      bottom: 0%;
    }
    .b2 {
      position: relative;
      bottom: 0%;
    }
    .b3 {
      position: relative;
      bottom: 0%;
    }
    .b4 {
      position: relative;
      bottom: 0%;
    }
    .b5 {
      position: relative;
      bottom: 0%;
    }
    .b6 {
      position: relative;
      bottom: 0%;
    }
    .b7 {
      position: relative;
      bottom: 0%;
    }
    .b8 {
      position: relative;
      bottom: 0%;
    }
  }
  @keyframes bubble {
    0% {
      transform: scale(0.95) translateY(0) translateX(0px) rotate(0deg);
      opacity: 1;
    }
    10% {
      transform: scale(1) translateY(-100px) translateX(10px);
      opacity: 1;
    }
    20% {
      transform: scale(0.95) translateY(-350px) translateX(14px);
    }

    30% {
      transform: scale(1) translateY(-450px) translateX(8px) rotate(90deg);
      opacity: 1;
    }
    40% {
      transform: scale(0.95) translateY(-650px) translateX(0px);
      opacity: 1;
    }
    50% {
      transform: scale(1) translateY(-750px) translateX(-5px);
      opacity: 1;
    }
    60% {
      transform: scale(0.95) translateY(-900px) translateX(-12px)
        rotate(-180deg);
      opacity: 0.95;
    }
    70% {
      transform: scale(1) translateY(-1000px) translateX(-2px);
      opacity: 0.9;
    }
    80% {
      transform: scale(0.95) translateY(-1250px) translateX(-1px);
      opacity: 0.8;
    }
    90% {
      transform: scale(1) translateY(-1350px) translateX(5px);
      opacity: 0.7;
    }
    100% {
      transform: scale(0.95) translateY(-1500px) translateX(15px)
        rotate(-360deg);
      opacity: 0.5;
    }
  }
`;
function Landingpage() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <Container>
      <MaxContainer>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <Bubble>
          <Bimg
            className="b1"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
            alt="mini.png"
            style={{
              right: 120,
              top: 700,
              width: 30,
              animationDelay: "4s",
            }}
          />
          <Bimg
            className="b2"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
            alt="mini.png"
            style={{
              left: 120,
              top: 700,
              width: 80,
              animationDelay: "3s",
            }}
          />
          <Bimg
            className="b3"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
            alt="mini.png"
            style={{
              left: 80,
              top: 800,
              width: 50,
              animationDelay: "1s",
            }}
          />
          <Bimg
            className="b4"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
            alt="mini.png"
            style={{
              left: 200,
              top: 700,
            }}
          />
          <Bimg
            className="b5"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
            alt="mini.png"
            style={{
              left: 500,
              top: 700,
              width: 70,
              animationDelay: "1.5s",
            }}
          />
          <Bimg
            className="b6"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF1.png"
            alt="mini.png"
            style={{
              left: 1000,
              top: 700,
              width: 60,
              animationDelay: "2s",
            }}
          />
          <Bimg
            className="b7"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF3.png"
            alt="mini.png"
            style={{
              left: 1200,
              top: 700,
              animationDelay: "1s",
            }}
          />
          <Bimg
            className="b8"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%87%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AF2.png"
            alt="mini.png"
            style={{
              left: 1300,
              top: 700,
              animationDelay: "3s",
            }}
          />
        </Bubble>
        {/* src="https://iconmage.s3.ap-northeast-2.amazonaws.com/메인1.png" */}
        <Coral src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초.png" />
        <SeaWeed src="https://iconmage.s3.ap-northeast-2.amazonaws.com/작은해초.png" />
        <SeaWeedL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해초L.png" />
        <Shark src="https://iconmage.s3.ap-northeast-2.amazonaws.com/상어.png" />
        <JellyFish src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해파리.png" />
        <MainImg className="mainimg" src="/메인.png"></MainImg>
        <TilteContainer>
          <Contents>
            당신의 물 속 세상을 만나보세요.
            <br></br> Under The Sea가 함께합니다.
          </Contents>
        </TilteContainer>
        <Fish1 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기1.png" />
        <Fish3 src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물고기3.png" />
        <BubbleL src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울L.png" />
        {/* <BubbleM src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울M1.png" /> */}
        <BubbleR src="https://iconmage.s3.ap-northeast-2.amazonaws.com/물방울R.png" />
      </MaxContainer>
    </Container>
  );
}

export default Landingpage;
