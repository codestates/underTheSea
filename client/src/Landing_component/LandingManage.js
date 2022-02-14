import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { loginModalOnAction } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: 2000px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to top, #e2fdfa, #a8f2ff);

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
  }
`;

const Phone = styled.img`
  position: absolute;
  width: 16%;
  height: 33%;
  right: 41%;
  top: 54%;

  @media screen and (max-width: 480px) {
    display: flex;
    width: 170px;
    height: 190px;
    top: 12%;
    left: 25%;
  }
`;

const Monitor = styled.img`
  position: absolute;
  width: 33%;
  height: 55%;
  right: 6%;
  top: 35%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  position: relative;
  right: 27%;
  top: 10%;
  display: flex;
  flex-direction: column;
  font-size: max(1vw, 0.7rem);

  @media screen and (max-width: 1024px) {
    .login {
      font-size: max(2vw, 0.6rem);
    }
    .text {
      font-size: max(2vw, 0.6rem);
    }
    /* .text1 {
      font-size: max(2vw, 1.4rem);
    } */
  }
  @media screen and (max-width: 480px) {
    top: 25%;
    left: 0%;
    .text {
      font-size: 0.8rem;
      text-align: center;
    }
  }

  /* border: 2px dashed red; */
`;

const MainText = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
  color: #092011;
  margin-bottom: 20px;
  color: #191919;

  @media screen and (max-width: 480px) {
  }
`;

const SearchText = styled.div`
  text-align: left;
  margin-bottom: 10%;
  z-index: 999;
  font-size: 1.3rem;
  line-height: 150%;
  font-family: "Kfont";

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const SearchText1 = styled.div`
  position: relative;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 10%;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const SearchTitle = styled.div`
  display: flex;
  font-size: 1.7rem;
  font-weight: 650;
  color: #092011;
  /* font-family: "Kfont"; */
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: max(2vw, 1.4rem);
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

const LoginText = styled.div`
  margin-top: 5%;
  font-size: 1.2rem;
  display: flex;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    justify-content: center;
  }
`;

const IconCover = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

function LandingManage() {
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    const txtTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "80px 95%",
        end: "top 10%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    txtTimeline.from(".text", { opacity: 0, y: 50, duration: 1 });
    txtTimeline.from(".text1", { opacity: 0, y: 60, duration: 1 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "80px 95%",
        end: "top 10%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    timeline.from(".Stext", { opacity: 0, y: 50, duration: 1 });

    const txt = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "80px 115%",
        end: "top 10%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    txt.from(".fish", { opacity: 0, y: 100, duration: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text",
        start: "80px 115%",
        end: "top 10%",
        toggleActions: "play none restart pause",
        // markers: true,
      },
    });
    tl.from(".device", { opacity: 0, x: 100, duration: 1 });
  }, []);

  return (
    <Container>
      <Phone className="device" src="/핸드폰.jpeg" alt="핸드폰.png" />
      <Monitor className="device" src="/모니터.jpeg" alt="모니터.png" />
      <TextContainer>
        <MainText className="text">주간 수족관 관리</MainText>
        <SearchText className="text">
          수조를 추가하여 주간
          <br />
          피딩과 환수를 기록해보세요.
          <br />
          모바일로도 간편하게 사용 할 수 <br />
          있습니다.
        </SearchText>
        <SearchText1 className="Stext">
          수조를 추가하여 주간 피딩과 환수를
          <br /> 기록해보세요.
        </SearchText1>

        <div className="text1">
          {isLogin ? (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/manage"
            >
              <SearchTitle>
                관리페이지
                <IconCover>
                  <FontAwesomeIcon size="1x" icon={faAnglesRight} />
                </IconCover>
              </SearchTitle>
              <LoginText className="login">
                관리 페이지는 로그인시 이용 가능 합니다.
              </LoginText>
            </Link>
          ) : (
            <>
              <SearchTitle onClick={() => dispatch(loginModalOnAction)}>
                관리페이지
                <IconCover>
                  <FontAwesomeIcon size="1x" icon={faAnglesRight} />
                </IconCover>
              </SearchTitle>
              <LoginText className="login">
                관리 페이지는 로그인시 이용 가능 합니다.
              </LoginText>
            </>
          )}
        </div>
      </TextContainer>
      {/* <Sqaure /> */}
    </Container>
  );
}

export default LandingManage;
