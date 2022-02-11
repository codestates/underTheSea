import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 55.5vw;
  height: 20%;
  font-size: 1.3rem;
  font-family: "Kfont";
  font-weight: bold;
  border-bottom: 1px solid black;
  /* border: 1px solid black; */
  position: relative;
  left: 6%;
  bottom: 3%;
  padding-bottom: 0.5%;
  box-sizing: border-box;

  .title {
    display: flex;
    padding: 0 0 2% 3%;
    /* border: 1px solid black; */
    flex: 6;
    box-sizing: border-box;
    position: relative;
  }
  .date {
    flex: 2;
    display: flex;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 2%;
    /* border: 1px solid black; */
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0%;
    height: 10%;
    padding-bottom: 2%;
    margin-top: 3%;
    .title {
      flex: 4;
      font-size: 0.6rem;
    }
    .date {
      flex: 1.6;
      font-size: 0.6rem;
      left: 0%;
    }
  }
`;
const Container = styled.div`
  position: relative;
  display: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1px; */
  z-index: 100;
  margin-top: 8%;
`;

const BoxContainer = styled.div`
  display: flex;
  margin: 0;
  width: 55.5vw;
  /* border: 1px solid red; */
  box-sizing: border-box;
  align-items: center;
  position: relative;
  bottom: 3%;
  margin-left: 6%;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f4;
    color: black;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: -6%;
  }
`;

const Box = styled.div`
  position: relative;
  flex: 6;
  width: 30%;
  height: 50%;
  margin: 0;
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
  /* border: 1px solid black; */
  padding: 2.5% 0 2.6% 3%;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const Box1 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  font-size: 0.9rem;
  color: gray;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  padding: 2.8% 0 2.7%;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    padding-left: 5%;
    flex: 2.5;
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 9% 0 0 5%;
`;

const BoxImg = styled.img`
  display: flex;
  margin-bottom: 2%;
`;

const Notice = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-left: 2%;
`;

const PageBtnForm = styled.form`
  display: flex;
  width: 95%;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const PageBtn = styled.div`
  align-items: center;
  border-style: none;
  background-color: #ffffff;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

function MypageContent() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [contentLength, setContentLength] = useState([]);

  useEffect(() => {
    content(pageNum);
  }, [pageNum]);
  const content = (page_num) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/user/tips/${page_num}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        setTest([...result.data.data]);
        const page_length = Math.floor(result.data.length / 7);
        if (result.data.length % 7 !== 0) {
          const page = new Array(page_length + 1).fill(0);
          setContentLength([...page]);
        } else {
          const page = Array(page_length).fill(0);
          setContentLength([...page]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 게시글 선택시 이동
  const selectTip = (e) => {
    const id = e.target.id;
    navigate(`/posttips/${id}`);
  };

  // 이전페이지
  const goToPre = () => {
    if (pageNum === 1) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(page - 1);
    console.log(pageNum);
  };

  // 다음페이지
  const goToNext = () => {
    if (pageNum === contentLength.length) {
      return;
    }
    const page = Number(pageNum);
    setPageNum(pageNum + 1);
    console.log(pageNum);
  };

  // 페이지 선택
  const selectPageNum = (e) => {
    const page = Number(e.target.id);
    setPageNum(page);
    console.log(pageNum);
  };

  return (
    <>
      {/* <Head>
        <div className="title">작성한 글 제목</div>
        <div className="date">날짜</div>
      </Head> */}
      <Container>
        {test.length === 0 ? (
          <>
            <Empty>
              <BoxImg
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/빈박스.png"
                alt=""
              />
              <Notice>현재 등록된 정보가 없습니다. </Notice>
            </Empty>
          </>
        ) : (
          <>
            <Head>
              <div className="title">작성한 글 제목</div>
              <div className="date">날짜</div>
            </Head>
            {test.map((el) => {
              const date = el.created_at.split("T")[0];
              // console.log(el, "//////");
              return (
                <>
                  <BoxContainer key={el.id}>
                    <Box id={el.tip_id} onClick={selectTip}>
                      {el.title}
                    </Box>
                    <Box1>{date}</Box1>
                  </BoxContainer>
                </>
              );
            })}{" "}
            <PageBtnForm>
              <PageBtn onClick={goToPre}>이전</PageBtn>
              {contentLength.map((el, idx) => {
                return (
                  <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
                    {idx + 1}
                  </PageBtn>
                );
              })}
              <PageBtn onClick={goToNext}>다음</PageBtn>
            </PageBtnForm>
          </>
        )}
      </Container>
    </>
  );
  // });
}
export default MypageContent;
