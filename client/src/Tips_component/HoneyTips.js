import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginModalOnAction } from "../store/actions";
import axios from "axios";
import styled from "styled-components";
import Header2 from "../component/Header2";
import Footer from "../component/Footer";
import TipList from "./TipList";

const Container = styled.div`
  position: relative;
  max-width: 2000px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    .line {
      margin-top: 10px;
      width: 95%;
      border-bottom: 1px solid #cccccc;
    }
  }
`;

const TopCover = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: 20%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1108px) {
    width: 50%;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 10%;
  padding-bottom: 5px;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 1108px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.div`
  margin-top: 15px;
  font-size: 1.25rem;
  margin-bottom: 50px;
  font-weight: 500;
  color: #808080;
`;

const BtnContainer = styled.div`
  position: relative;
  width: 70%;
  margin-top: 3%;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const Btn = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 0;
  border-style: none;
  background: #108dee;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
  @media screen and (max-width: 480px) {
    width: 60px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

const TipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 70%;
  height: 100%;
  border: 1px solid #a7d9ff;
  border-radius: 4px;
  margin-bottom: 10%;
  @media screen and (max-width: 768px) {
    width: 100vw;
    border-style: none;
  }
`;

const TipListHeadContainer = styled.div`
  width: 95%;
  display: flex;
  font-size: 1.5rem;
  margin-top: 30px;
  border-bottom: 3px solid #a7d9ff;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    /* height: 50px; */
    /* border: 1px solid red; */
    display: none;
  }
`;

const TipListTitle = styled.div`
  flex: 6;
  margin-bottom: 30px;
  text-align: start;
  /* border: 1px solid red; */
  @media screen and (max-width: 768px) {
  }
`;

const TipListWriter = styled.div`
  flex: 2;
  margin-bottom: 30px;
  text-align: start;
  /* border: 1px solid red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TipListDate = styled.div`
  flex: 2;
  margin-bottom: 30px;
  text-align: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PageBtnForm = styled.form`
  display: flex;
  width: 95%;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    padding-top: 10px;
  }
`;

const PageBtn = styled.div`
  align-items: center;
  border-style: none;
  background-color: #ffffff;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
`;

function HoneyTips() {
  const [tipList, setTipList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [tipLength, setTipLength] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const accessToken = localStorage.getItem("accessToken");

  // 새글쓰기 페이지로 이동
  const goToNewTip = () => {
    navigate("/writetips");
  };

  useEffect(() => {
    window.scroll(0, 0);
    handleTipList();
  }, [pageNum]);

  // 페이지 숫자에 따른 게시물 조회
  const handleTipList = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/tip/all/${pageNum}`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    const { data: list } = result.data;
    setTipList([...list]);

    // 페이지네이션을 위해 전체 갯수와 같은 길이의 배열 생성
    const page_length = Math.floor(result.data.tip_num / 12);
    if (result.data.tip_num % 12 !== 0) {
      const page = new Array(page_length + 1).fill(0);
      setTipLength([...page]);
    } else {
      const page = Array(page_length).fill(0);
      setTipLength([...page]);
    }
  };

  // 이전페이지
  const goToPre = () => {
    if (pageNum === 1) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(page - 1);
  };

  // 다음페이지
  const goToNext = () => {
    if (pageNum === tipLength.length) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(pageNum + 1);
  };

  // 페이지 선택
  const selectPageNum = (e) => {
    const page = Number(e.target.id);
    setPageNum(page);
  };

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <Img src="게시판베너사진.jpeg"></Img>
          <TitleContainer>
            <Title>Board</Title>
            {/* <Starfish src="불가사리.png" /> */}
          </TitleContainer>
          <SubTitle>여러분의 지식을 나눠주세요!</SubTitle>
          {/* <Swarm src="무리.png" /> */}
        </TopCover>
        <BtnContainer>
          {isLogin ? (
            <Btn onClick={goToNewTip}>글쓰기</Btn>
          ) : (
            <Btn onClick={() => dispatch(loginModalOnAction)}>글쓰기</Btn>
          )}
        </BtnContainer>
        <div className="line"></div>
        <TipListContainer>
          <TipListHeadContainer>
            <div style={{ flex: "0.5" }}></div>
            <TipListTitle>제목</TipListTitle>
            <TipListWriter>작성자</TipListWriter>
            <TipListDate>작성일</TipListDate>
          </TipListHeadContainer>
          {tipList.map((el, idx) => {
            return <TipList key={idx} tip_id={el.tip_id} tip={el}></TipList>;
          })}
          <PageBtnForm>
            {tipLength.length > 1 ? (
              <>
                <PageBtn onClick={goToPre}>이전</PageBtn>
                {tipLength.map((el, idx) => {
                  return (
                    <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
                      {idx + 1}
                    </PageBtn>
                  );
                })}
                <PageBtn onClick={goToNext}>다음</PageBtn>
              </>
            ) : (
              <></>
            )}
          </PageBtnForm>
        </TipListContainer>
      </Container>
      <Footer />
    </>
  );
}
export default HoneyTips;
