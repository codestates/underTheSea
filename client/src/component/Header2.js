import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalOnAction,
  logoutAction,
  signupModalOnAction,
} from "../store/actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  max-width: 2000px;
  height: 10vh;
  margin: auto;
  background: white;
  box-shadow: 0px 0px 5px #adb5bd;
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 80px;
  }
`;

const Img = styled.img`
  width: 13vw;
  margin: 0 0 1% 1%;
  /* margin: auto; */
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 22vw;
    margin: auto;
  }
  @media screen and (max-width: 610px) {
    width: 25vw;
    margin: auto;
  }
  @media screen and (max-width: 450px) {
    width: 30vw;
    margin: auto;
  }
`;

const Login = styled.div`
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Aquarium = styled.div`
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Manage = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Mypage = styled.div`
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Signup = styled.div`
  border-radius: 8px;
  padding: 10px;
  font-family: "Kfont";
  box-sizing: border-box;
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2%;
    box-sizing: border-box;
  }
`;
// ?????? ?????? %???????????? ????????? ?????? ????????? ????????????
const Signout = styled.div`
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-family: "Kfont";
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2%;
    box-sizing: border-box;
  }
`;

const Search = styled.div`
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.toggle &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      `}
  }
`;
const Guide = styled.div`
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;
const Bars = styled.div`
  position: absolute;
  display: none;
  font-size: 20px;
  top: 30%;
  right: 32px;
  cursor: pointer;
  color: #e5e5e5;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: block;
    top: 30%;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: space-around;
  margin-right: 2%;
  width: 370px;
  font-family: "Kfont";
  @media screen and (max-width: 768px) {
    display: none;
    ${(props) =>
      props.toggle &&
      css`
        position: absolute;
        top: 79px;
        margin-right: 0;
        display: flex;
        width: 100%;
        background: white;
        align-items: center;
        flex-direction: column;
        height: 280px;
        margin-bottom: 2%;
        z-index: 100;
      `}
  }
`;

function Header2() {
  const [status, setStatus] = useState(false);
  const [toggle, setToggle] = useState(false);
  const onClickHandler = (e) => {
    setStatus((prevStatus) => (prevStatus ? false : true));
  };
  //========================================================================
  const showToggle = () => {
    setToggle(!toggle);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const accessToken = localStorage.getItem("accessToken");
  // ?????? ????????? ????????????

  const goToHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_API}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", "");
        navigate("/");
        dispatch(logoutAction);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const play = () => {
    console.log("Play damm it!!");
    var audio = document.getElementById("audio_play");
    console.log("Play damm it!!");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <Container toggle={toggle}>
      <audio
        id="audio_play"
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/waterdrop.mp3"
      ></audio>
      {/* src="https://iconmage.s3.ap-northeast-2.amazonaws.com/??????.png" */}
      <Img src="/??????.png" alt="" onClick={goToHome} />
      <BtnContainer className="menu" onclick={play} toggle={toggle}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <Guide onclick={play} toggle={toggle}>
            ?????????
          </Guide>
          <audio id="audio_play" src="waterdrop.mp3"></audio>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search toggle={toggle}>??????</Search>
        </Link>
        {/* <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/nearbyaquarium"
        >
          <Aquarium>?????????</Aquarium>
        </Link> */}
        {isLogin ? (
          <>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/manage"
            >
              <Manage onclick={play} toggle={toggle}>
                ??????
              </Manage>
              <audio id="audio_play" src="waterdrop.mp3"></audio>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/mypage"
            >
              <Mypage toggle={toggle}>???????????????</Mypage>
            </Link>
            {/* <Signout onClick={handleLogout}>????????????</Signout> */}
          </>
        ) : (
          <>
            <Login onClick={() => dispatch(loginModalOnAction)}>?????????</Login>
            <Signup onClick={() => dispatch(signupModalOnAction)}>
              ????????????
            </Signup>
          </>
        )}
        {!isLogin ? (
          <></>
        ) : (
          <>
            <Signout onClick={handleLogout}>????????????</Signout>
          </>
        )}
        {/* <Signup onClick={() => dispatch(signupModalOnAction)}>????????????</Signup> */}
      </BtnContainer>
      <Bars toggle={toggle} onClick={showToggle}>
        <FontAwesomeIcon className="toogleBtn" icon={faBars}></FontAwesomeIcon>
      </Bars>
    </Container>
  );
}

export default Header2;
