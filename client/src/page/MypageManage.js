import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 55.5vw;
  height: 10%;
  font-size: 1.3rem;
  font-family: "Kfont";
  font-weight: bold;
  border-bottom: 1px solid black;
  /* border: 1px solid black; */
  position: relative;
  left: 6%;
  bottom: 3%;
  box-sizing: border-box;

  .title {
    display: flex;

    padding: 0 0 2% 1.5%;
    /* border: 1px solid black; */
    flex: 6;
    box-sizing: border-box;
    position: relative;
  }
  .comment {
    flex: 2;
    padding-bottom: 2%;
    display: flex;
    box-sizing: border-box;
    position: relative;

    /* border: 1px solid black; */
  }

  @media screen and (max-width: 1024px) {
    .title {
      font-size: 1rem;
    }
    .comment {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 0.9rem;
    }
    .comment {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0%;
    padding-bottom: 2%;
    .title {
      flex: 4;
      font-size: 0.6rem;
    }
    .comment {
      flex: 2;
      font-size: 0.6rem;
      padding-left: 10%;
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
  margin-top: 9%;
  /* border: 1px solid black; */
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
  padding: 2.5% 0 2.6% 2%;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const Box2 = styled.div`
  flex: 2;
  width: 30%;
  height: 50%;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
  padding: 2.8% 0 2.7% 2%;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    padding-left: 5%;
    flex: 2.5;
  }
`;
//+0.3
//+0.2
//=======================================================================

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 8% 0 0 5%;
`;

const BoxImg = styled.img`
  display: flex;
  margin-bottom: 2%;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

const Notice = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-left: 2%;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
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

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

function MypageManage() {
  const navigate = useNavigate();
  const [manageInfo, setManageInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [manageLength, setManageLength] = useState([]);
  const [containerId, setContainerId] = useState([]);
  const [clickPage, setClickPage] = useState();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    manageHandler(pageNum);
  }, [pageNum]);

  const manageHandler = (page_num) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/user/manage/${page_num}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        const id = result.data.data.map((el) => el.container_id);
        setContainerId(id);
        setManageInfo([...result.data.data]);
        const page_length = Math.floor(result.data.length / 7);
        if (result.data.length % 7 !== 0) {
          const page = new Array(page_length + 1).fill(0);
          setManageLength([...page]);
        } else {
          const page = Array(page_length).fill(0);
          setManageLength([...page]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ???????????? ????????? ??????
  const selectCon = (e) => {
    const id = e.target.id;
    console.log(id);
    navigate(`/manage/${id}`);
  };

  // ???????????????
  const goToPre = () => {
    if (pageNum === 1) {
      return;
    }
    const page = pageNum;
    setPageNum(page - 1);
  };

  // ???????????????
  const goToNext = () => {
    if (pageNum === manageLength.length) {
      return;
    }
    setPageNum(pageNum + 1);
  };

  // ????????? ??????
  const selectPageNum = (e) => {
    setPageNum(e.target.id);
  };

  return (
    <>
      <Container>
        {manageInfo.length === 0 ? (
          <>
            <Empty>
              <BoxImg
                src="https://iconmage.s3.ap-northeast-2.amazonaws.com/?????????.png"
                alt=""
              />
              <Notice>?????? ????????? ????????? ????????????. </Notice>
            </Empty>
          </>
        ) : (
          <>
            <Head>
              <div className="title">?????? ??????</div>
              <div className="comment">????????????</div>
            </Head>
            {manageInfo.map((el, idx) => {
              // console.log(el, "?????????");
              return (
                <>
                  <BoxContainer key={idx}>
                    <Box id={el.container_id} onClick={selectCon}>
                      {el.container_name}
                    </Box>
                    <Box2>{el.size}</Box2>
                  </BoxContainer>
                </>
              );
            })}
            <PageBtnForm>
              <PageBtn onClick={goToPre}>??????</PageBtn>
              {manageLength.map((el, idx) => {
                return (
                  <PageBtn key={idx} id={idx + 1} onClick={selectPageNum}>
                    {idx + 1}
                  </PageBtn>
                );
              })}
              <PageBtn onClick={goToNext}>??????</PageBtn>
            </PageBtnForm>
          </>
        )}
      </Container>
    </>
  );
}
export default MypageManage;
