import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header2 from "../component/Header2";
import CommentTips from "./CommentTips";
import ContentTips from "./ContentTips";
import Footer from "../component/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
`;

const TopCover = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-bottom: 2px solid #808080; */
  flex-direction: column;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: -1;
`;

const TitleContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid green; */
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Kfont";
  padding-bottom: 5px;
  margin-top: 10%;
  box-sizing: border-box;
  text-align: center;
`;
const SubTitle = styled.div`
  margin-top: 15px;
  /* color: #4a4a4a; */
  font-size: 1.25rem;
  margin-bottom: 50px;
  font-weight: 500;
  color: #808080;
  /* border: 1px solid red; */
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  width: 70%;
  height: 100%;
  border: 1px solid #a7d9ff;
  border-radius: 4px;
  margin-bottom: 10%;
`;

const BtnContainer = styled.div`
  width: 70%;
  margin-top: 45px;
  display: flex;
  justify-content: flex-end;
  /* border: 1px dashed darkcyan; */
`;

const BtnL = styled.button`
  width: 7%;
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    /* filter: brightness(95%); */
    background: #cccccc;
  }
`;

const Btn = styled.button`
  width: 7%;
  height: 30px;
  font-size: 1.1rem;
  box-sizing: border-box;
  align-items: center;
  margin: 0 8px;
  color: white;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    /* filter: brightness(95%); */
    background: #cccccc;
  }
`;

const BtnR = styled.button`
  width: 7%;
  height: 30px;
  font-size: 1.1rem;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: black;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  text-align: center;
  cursor: pointer;
  :hover {
    /* filter: brightness(95%); */
    background: #cccccc;
  }
`;

function PostTips() {
  const [tipData, setTipData] = useState({});
  const [comment, setComment] = useState([]);
  const [isWriter, setIsWriter] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const tip_id = params.tip_id;
  const { pathname } = useLocation();
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const accessToken = localStorage.getItem("accessToken");
  // const tip_id = localStorage.getItem("tip_id");

  // 선택한 게시물 댓글 렌더링
  useEffect(() => {
    window.scroll(0, 0);
    handlePostTip(tip_id);
    handleComment();
  }, []);

  // 해당 게시물 조회
  const handlePostTip = (tip_id) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/tip/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("user_name", res.data.data.user_name);
        setTipData({
          ...res.data.data,
        });
        setIsWriter(res.data.data.isWriter);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 해당 댓글 정보 불러오기
  const handleComment = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/comment/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setUserName(res.data.user_name);
        setComment([...res.data.data]);
      });
  };

  // 댓글 추가
  const handleUploadComment = (data) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_API}/comment/${tip_id}`,
        { data: data },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        const { data: result } = res.data;
        setComment([...comment, result]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 댓글 삭제
  const handleDeleteComment = (comment_id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/comment/${comment_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        handleComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 목록으로 이동
  const goToList = () => {
    localStorage.setItem("tip_id", null);
    navigate("/honeytips");
  };

  // 게시글 삭제
  const deleteTip = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/tip/${tip_id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((result) => {
        navigate("/honeytips");
      })
      .catch((err) => console.log(err));
  };

  // 게시글 수정
  const editTip = () => {
    localStorage.setItem("edit_tip", true);
    localStorage.setItem("tip_id", tipData.id);
    navigate("/writetips");
  };

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <Img src="/게시판베너사진.jpeg"></Img>
          <TitleContainer>
            <Title>정보공유 게시판</Title>
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
        </TopCover>
        <BtnContainer>
          <BtnL onClick={goToList}>목록</BtnL>
          {isWriter && isLogin ? (
            <>
              <Btn onClick={editTip}>수정</Btn>
              <BtnR onClick={deleteTip}>삭제</BtnR>
            </>
          ) : (
            <></>
          )}
        </BtnContainer>
        <PostContainer>
          <ContentTips tipData={tipData}></ContentTips>
          <CommentTips
            comment={comment}
            userName={userName}
            handleUploadComment={handleUploadComment}
            handleDeleteComment={handleDeleteComment}
          ></CommentTips>
        </PostContainer>
      </Container>
      <Footer />
    </>
  );
}
export default PostTips;
