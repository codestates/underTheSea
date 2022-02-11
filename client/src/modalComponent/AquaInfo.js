import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { modalOff } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 30%;
  height: 60%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 80%;
  }
`;
const CloseBtnContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 10%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;
const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ShowContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const InfoShow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  /* border: 1px solid red; */
`;
const ThememContainer = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  height: 10%;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    height: 12%;
  }
`;
const ThemeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 90%;
  font-weight: bold;
  color: #108dee;
  border-right: 1px solid #e5e5e5;
  font-family: "Kfont";
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const ThemeShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
`;
const LastExchange = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 150px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
`;
const TopText = styled.div`
  color: #108dee;
  font-family: "Kfont";
  margin-bottom: 1%;
  font-size: 1.25rem;
`;
const MiddleText = styled.div`
  font-weight: bold;
  color: #108dee;
  font-family: "Kfont";
  margin-bottom: 1%;
  font-size: 1.5rem;
`;
const BottomText = styled.div`
  color: #108dee;
  font-family: "Kfont";
  font-size: 1.25rem;
`;

function AquaInfo({ conInfo, container_id, month }) {
  const dispatch = useDispatch();
  const [diff, setDiff] = useState(0);
  const [dateInfo, setDateInfo] = useState({
    thisYear: "",
    thisMonth: "",
    thisDay: "",
  });
  const [fishNum, setFishNum] = useState(0);
  const accessToken = localStorage.getItem("accessToken");
  const [myAquaInfo, setMyAquaInfo] = useState({});
  let total = 0;
  useEffect(() => {
    // console.log("유즈이펙트는 실행되니?", container_id);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_API}/container/${container_id}/${month}`,
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
        console.log("응답데이터 -> ", res.data.data);
        setMyAquaInfo(res.data.data);
        console.log("마이아쿠아인포", myAquaInfo);

        let lastExDay = "20" + res.data.data.ex_water_list[0].createdAt;
        console.log("lastExDay", lastExDay);
        let thisYear = Number(lastExDay.slice(0, 4));
        let thisMonth = Number(lastExDay.slice(4, 6));
        let thisDay = Number(lastExDay.slice(6));
        let lastDay = new Date(thisYear, thisMonth - 1, thisDay);
        let curDay = new Date().getTime();
        console.log("curday", curDay);
        console.log("lastday", lastDay);
        let showDiff =
          Math.ceil((curDay - lastDay.getTime()) / (1000 * 3600 * 24)) - 1;
        console.log("차이", typeof thisMonth);
        if (thisMonth < 10) {
          thisMonth = "0" + String(thisMonth);
        }
        setDiff(showDiff);
        setDateInfo({
          ...dateInfo,
          thisYear,
          thisMonth,
          thisDay,
        });
        let LENGTH = res.data.data.fish_list.length;
        console.log("랜스", LENGTH);
        if (LENGTH) {
          for (let i = 0; i < LENGTH; i++) {
            total += res.data.data.fish_list[i].fish_num;
          }
          setFishNum(total);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("토탈~~", fishNum);
  // if (myAquaInfo.ex_water_list) {
  //   console.log("환수기록", myAquaInfo.ex_water_list);
  //   let lastExDay =
  //     "20" +
  //     myAquaInfo.ex_water_list[myAquaInfo.ex_water_list.length - 1].createdAt;
  //   console.log("lastExDay", lastExDay);
  //   let thisYear = Number(lastExDay.slice(0, 4));
  //   let thisMonth = Number(lastExDay.slice(4, 6));
  //   let thisDay = Number(lastExDay.slice(6));
  //   // lastExDay =
  //   //   String(thisYear) + "-" + String(thisMonth) + "-" + String(thisDay);
  //   let lastDay = new Date(thisYear, thisMonth - 1, thisDay);
  //   let curDay = new Date().getTime();
  //   console.log("curday", curDay);
  //   console.log("lastday", lastDay);
  //   // let dayFromExwater = curDay - lastDay.getTime();
  //   let showDiff =
  //     Math.ceil((curDay - lastDay.getTime()) / (1000 * 3600 * 24)) - 1;
  //   // let showDiff = dayFromExwater / 1000 / 60 / 60 / 24;
  //   // setDiff(showDiff);
  //   console.log("차이", showDiff);

  //   let LENGTH = myAquaInfo.fish_list.length;
  //   if (LENGTH) {
  //     for (let i = 0; i < LENGTH; i++) {
  //       total += myAquaInfo.fish_list[i].fish_num;
  //     }
  //     console.log("total", total);
  //   }
  // }

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <CloseBtn>
            <FontAwesomeIcon
              icon={faTimes}
              color="#e5e5e5"
              onClick={() => dispatch(modalOff)}
            />
          </CloseBtn>
        </CloseBtnContainer>
        <ShowContainer>
          <InfoShow>
            <ThememContainer>
              <ThemeTitle>테마</ThemeTitle>
              <ThemeShow>{myAquaInfo.theme}</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>크기</ThemeTitle>
              <ThemeShow>{myAquaInfo.size}L</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>마릿수</ThemeTitle>
              <ThemeShow>{fishNum}마리</ThemeShow>
            </ThememContainer>
            <ThememContainer>
              <ThemeTitle>마지막 환수일</ThemeTitle>
              {/* <ThemeShow>{lastExDay}</ThemeShow> */}
              <ThemeShow>
                {dateInfo.thisYear}-{dateInfo.thisMonth}-{dateInfo.thisDay}
              </ThemeShow>
            </ThememContainer>
            <LastExchange>
              <TopText>마지막 환수일로부터</TopText>
              <MiddleText>{diff}일</MiddleText>
              <BottomText>지났습니다!</BottomText>
            </LastExchange>
          </InfoShow>
        </ShowContainer>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default AquaInfo;
