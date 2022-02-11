import styled from "styled-components";
import React from "react";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";
import SignOut from "../modalComponent/SignOut";
import PwdChange1 from "../modalComponent/PwdChange1";
import axios from "axios";
import { signoutModalAction, pwdModalAction } from "../store/actions";
import MypageContent from "./MypageContent";
import MypageComment from "./MypageComment";
import MypageManage from "./MypageManage";
import MypageMenuBar from "./MypageMenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const BoxContainer = styled.div`
  max-width: 2000px;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  height: 100%;
  font-family: "Kfont";

  .Box {
    width: 100%;
    height: 52vh;
    display: flex;
    flex-direction: column;
    background: #ace0ff;
  }

  .userImg {
    position: relative;
    top: 18%;
    left: 15%;
    width: 28vw;
    height: 35vh;
  }

  .img {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .userGreeting {
    position: relative;
    width: 30vw;
    height: 5vh;
    font-size: 1.7em;
    left: 40%;
    bottom: 10%;
    font-weight: bold;
    padding-left: 2%;
  }
  .userNotice {
    position: relative;
    width: 30vw;
    height: 5vh;
    left: 40%;
    bottom: 9%;
    padding-left: 2%;
  }
  @media screen and (max-width: 1024px) {
    .userGreeting {
      font-size: 1.4rem;
      margin-bottom: 1%;
    }
    .userNotice {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 768px) {
    .userGreeting {
      font-size: 1rem;
      margin-bottom: 1%;
    }
    .userNotice {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 480px) {
    .Box {
      width: 100%;
      height: 40vh;
    }

    .userImg {
      position: relative;
      top: 25%;
      width: 40vw;
      height: 20vh;
      left: 8%;
    }

    .img {
    }
    .userGreeting {
      top: -18%;
      margin-left: 7%;
      font-size: 0.7em;
      width: 40%;
    }
    .userNotice {
      top: -19%;
      width: 35%;
      margin-left: 7%;
      font-size: 0.6em;
    }
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 1450px;
  margin: auto;
  height: 25vh;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  position: relative;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  line-height: 500%;
`;

const Title = styled.div`
  position: relative;
  width: 13vw;
  height: 8vh;
  font-size: 1.7rem;
  font-weight: bold;
  justify-content: center;
  top: 63%;
  right: 8%;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    height: 2vh;
    width: 30vw;
    top: 50%;
    left: 3%;
  }
`;

const Box1 = styled.div`
  position: relative;
  justify-content: space-evenly;
  display: flex;
  width: 20vw;
  height: 4vh;
  left: 22%;
  top: 8%;
  @media screen and (max-width: 480px) {
    width: 30%;
    height: 45%;
    left: 14%;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
  }
`;
const ButtonL = styled.button`
  width: 8vw;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #108dee;
  background: #108dee;
  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
    height: 6vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    height: 6vh;
  }
  @media screen and (max-width: 480px) {
    width: 75%;
    height: 4vh;
    border-radius: 5px;
  }
`;
const ButtonR = styled.button`
  width: 8vw;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background: #cccccc;
  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
    height: 6vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    height: 6vh;
  }
  @media screen and (max-width: 480px) {
    width: 75%;
    height: 4vh;
    border-radius: 5px;
    /* border: 1px solid black; */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-bottom: 10%;
  }
`;

const Box3 = styled.div`
  border: 1px solid #ace0ff;
  margin-top: 4%;
  width: 70vw;
  height: 90vh;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    border: 1px solid black;
    height: 60vh;
    width: 80vw;
    font-size: 0.7rem;
    border: 1px solid #cccccc;
  }
`;

function Mypage() {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const [currentPage, setCurrentPage] = useState("manage");
  //========================================================================
  const state = useSelector((state) => state.modalReducer);
  const { isSignoutModal } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    manageHandler();
  }, []);

  const manageHandler = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/user/manage/1`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        // console.log(result.data.user_name, "????????");
        setUserName([...result.data.user_name]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOn = () => {
    setOpenModal(true);
  };
  const handleOff = () => {
    setOpenModal(false);
  };

  function pageRender() {
    if (currentPage === "manage") {
      return <MypageManage />;
    } else if (currentPage === "comment") {
      return <MypageComment />;
    } else if (currentPage === "contents") {
      return <MypageContent />;
    }
  }

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <BoxContainer>
        <UserInfo>
          <div className="Box">
            <div className="userImg">
              <img className="img" src="유저1.png"></img>
            </div>
            <div className="userGreeting">{userName}님 환영합니다!</div>
            <div className="userNotice">
              마이페이지에서는 간략한 사용자정보를 조회할 수 있습니다.
            </div>
          </div>
        </UserInfo>
        <Container>
          <TitleContainer>
            <Title>계정정보 조회</Title>
            <Box1>
              <ButtonL onClick={handleOn}>비밀번호 변경</ButtonL>
              {openModal && <PwdChange1 handleOff={handleOff} />}
              <ButtonR
                onClick={() => {
                  dispatch(signoutModalAction);
                }}
              >
                회원탈퇴
              </ButtonR>
            </Box1>
          </TitleContainer>
        </Container>

        {/* ============================================================================================= */}
        <ContentContainer>
          <MypageMenuBar setCurrentPage={setCurrentPage}></MypageMenuBar>
          <Box3>{pageRender(currentPage)}</Box3>

          {/* <BoxImg src="/빈박스.png" alt="" /> */}
          {/* <Notice>현재 등록된 정보가 없습니다. </Notice> */}
          {isSignoutModal && <SignOut />}
        </ContentContainer>
      </BoxContainer>
      <Footer />
    </>
  );
}
export default Mypage;
