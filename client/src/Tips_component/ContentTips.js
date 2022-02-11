import React, { memo } from "react";
import styled from "styled-components";

const PostTitle = styled.div`
  width: 95%;
  font-size: 1.6rem;
  margin-top: 40px;
  /* border: 1px solid red; */
  font-family: "Kfont";
  font-weight: bold;
`;

const WriterCover = styled.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  border-bottom: 3px solid #a7d9ff;
  /* border: 1px solid red; */
`;

const WriterIcon = styled.div`
  /* width: 2.7vw;
  height: 5vh;
  border-radius: 60px;
  border: 1px solid gray;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px; */
  /* width: 5.1vw;
  height: 6.6vh; */
  width: 10%;
  height: 10%;
  position: relative;
  .userImg {
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
  }
`;

const WriterInfo = styled.div`
  width: 90%;
  /* height: 60%; */
  /* border: 1px solid red; */
  display: column;
  /* margin-bottom: 10px; */
  /* margin-left: 3px; */
`;

const Writer = styled.div`
  width: 100%;
  /* color: #808080; */
  font-size: 1rem;
  font-family: "Kfont";
  /* border: 1px solid red; */
  margin: 1% 0 1%;
`;

const Date = styled.div`
  width: 100%;
  color: #808080;
  font-size: 0.8rem;
  font-family: "Kfont";
  /* border: 1px solid red; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 300px;
  padding-bottom: 20px;
  margin-top: 30px;
  font-family: "Kfont";
  border-bottom: 3px solid #a7d9ff;
  white-space: normal;
  align-items: flex-start;
  margin-bottom: 2%;
`;

const ContentBox = styled.div`
  width: 90%;
  white-space: pre-line;
  box-sizing: border-box;
  font-family: "Kfont";
`;

function ContentTips({ tipData }) {
  // console.log(typeof tipData.createdAt);
  let date, time;
  if (tipData.createdAt) {
    date = tipData.createdAt.split("T")[0];
    time = tipData.createdAt.split("T")[1].split(".")[0];
  }
  // const
  // const date = tip.created_at.split("T")[0];
  return (
    <>
      <PostTitle>{tipData.title}</PostTitle>
      <WriterCover>
        <WriterIcon>
          <img className="userImg" src="/유저2.png" alt=""></img>
        </WriterIcon>
        <WriterInfo>
          <Writer>{tipData.user_name}</Writer>
          <Date>
            {date}&nbsp;
            {time}
          </Date>
        </WriterInfo>
      </WriterCover>
      <Content>
        {tipData.img ? (
          <img
            src={`${process.env.REACT_APP_SERVER_API}${tipData.img}`}
            style={{ width: "300px", height: "250px" }}
          ></img>
        ) : (
          <></>
        )}
        <br></br>
        <ContentBox>{tipData.content}</ContentBox>
      </Content>
    </>
  );
}
export default memo(ContentTips);
