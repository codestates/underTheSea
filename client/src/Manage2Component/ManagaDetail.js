import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header2 from "../component/Header2";
import ManageDetCard from "./ManageDetCard";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FeedingInput from "../modalComponent/FeedingInput";
import AquaInfo from "../modalComponent/AquaInfo";
import ExChangeWaterInput from "../modalComponent/ExChangeWaterInput";
import AddFish from "../modalComponent/Addfish";
import Deadfish from "../modalComponent/Deadfish";
import HelpInfo from "../modalComponent/HelpInfo";
import Footer from "../component/Footer";
import { useSelector, useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import {
  myAquariumInfoModalOnAction,
  feedingInputModalOnAction,
  exchangeWaterModalOnAction,
  addfishModalOnAction,
  deadfishModalOnAction,
  helpInfoModalOnAction,
  levelupModalOnAction,
} from "../store/actions";
import axios from "axios";
import { useParams } from "react-router-dom";
import Levelup from "../modalComponent/Levelup";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 2000px;
  height: 40vh;
  @media screen and (max-width: 480px) {
    height: 20vh;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
  @media screen and (max-width: 480px) {
    top: 25%;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  position: relative;
  top: 65%;
  width: 23%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 60%;
    top: 45%;
  }
`;

const Text = styled.div`
  width: 60%;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  line-height: 180%;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const ContainerS = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px #adb5bd;
  border-radius: 10px;
  width: 50%;
  height: 20vh;
  margin-bottom: 3%;
  @media screen and (max-width: 480px) {
    width: 70%;
    height: 18vh;
  }
`;
const HabitatContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 480px) {
    height: 15px;
  }
`;
const FishDesc = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 10px;
  width: 100%;
  height: 90%;
  font-size: 1rem;
  line-height: 140%;
  border-left: 1.5px solid #e5e5e5;
`;
const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const HabitatShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  width: 50%;
  height: 100%;
`;

const Habitat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Kfont";
  width: 50%;
  height: 100%;
`;
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Kfont";
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const LeftInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 0px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 868px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    font-size: 0.7rem;
    padding: 0px;
  }
`;
const ImgD = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  height: 20vh;
  @media screen and (max-width: 868px) {
    height: 100%;
  }
`;
const DetailImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  @media screen and (max-width: 868px) {
    width: 40%;
  }
`;

const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12%;
`;

const FishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 12%;
`;

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  font-weight: bold;
  font-size: 1.5rem;
  /* border: 1px solid red; */
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;
const LevelCover = styled.div`
  display: flex;
  width: 8%;
`;
const LevelText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #008eff;
  font-weight: bold;
  font-family: "Kfont";
`;

const Logo = styled.img`
  width: 20%;
  height: 120%;
  margin-bottom: 2%;
  @media screen and (max-width: 480px) {
    width: 40%;
    height: 80%;
  }
`;

const Levelinfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.2rem;
  margin-left: 10px;
  font-family: "Kfont";
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 40%;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MidContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1%;
  align-items: center;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
  @media screen and (max-width: 480px) {
    width: 70%;
    justify-content: space-between;
  }
`;

const HelpBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  font-family: "Kfont";
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 30%;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

const AddfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  margin: 0px 20px;
  font-family: "Kfont";
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 30%;
    justify-content: center;
    margin: 0px;
    font-size: 0.9rem;
  }
`;
const DeadfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  color: #108dee;
  font-family: "Kfont";
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 30%;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

const ProgressBar = styled.div`
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  width: 50%;
  height: 4vh;
  border: 2px solid #108dee;
  @media screen and (max-width: 480px) {
    width: 70%;
    margin-bottom: 5px;
  }
`;
const Progress = styled.div`
  transition: all 1s;
  width: ${(props) => props.EXP};
  height: 3vh;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(#00d2ff, #3a7bd5);
  @media screen and (max-width: 480px) {
    width: ${(props) => props.EXP};
    height: 100%;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 6vh;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const Button = styled.button`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-family: "Kfont";
  cursor: pointer;
  background: #108dee;
  border: 2px solid #108dee;
  color: white;
  font-size: 1rem;
  position: relative;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    /* margin-right: 3%; */
  }
`;

//------------------- 캘린더 --------------------

const CalendarContainer = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const Control = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CalendarBtn = styled.button`
  background-color: rgba(51, 153, 255, 0);
  width: 40px;
  height: 30px;
  border-style: none;
  /* @media screen and (max-width: 480px) {
    border-bottom: 1px solid black;
  } */
`;

const Span = styled.span`
  font-size: 1.5rem;
`;

const Table = styled.table`
  @media screen and (max-width: 480px) {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 100%;
  }
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;
const Number = styled.span`
  box-sizing: border-box;

  padding-left: 5px;
  display: flex;
  width: 100%;
  height: 20px;
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

const Td = styled.td`
  display: flex;
  border: 1px solid black;
  background: white;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  width: 6.8vw;
  height: 13vh;
  @media screen and (max-width: 480px) {
    width: 100%;
    border-style: none;
  }
`;

const MobileTd = styled.td`
  display: flex;
  border: 1px solid black;
  background: white;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1rem;
  width: 6.8vw;
  height: 13vh;
  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 40vh;
    justify-content: space-around;
  }
`;

const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .sun {
    color: red;
  }
  .sat {
    color: blue;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
  }
  @media screen and (max-width: 350px) {
    width: 95%;
  }
`;
const Day = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  width: 7vw;
  height: 3vh;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.9rem;
  }
`;

const FoodIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const FoodInnerContainer = styled.div`
  display: flex;
`;

const ExWaterRecord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 90%;
  height: 30px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-top: 2px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const FoodTypeAndNum = styled.div`
  display: flex;
`;

const FeedingNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const FoodIcon = styled.img`
  width: 40%;
`;
function ManageDetail({ condata, setCondata }) {
  //변수 선언부분
  const params = useParams();
  const container_id = params.container_id;
  let exAmount = 0;
  const month = new Date().getMonth() + 1;
  let todayString = new Date().toISOString().split("T")[0].split("-");
  todayString = todayString[0].slice(2) + todayString[1] + todayString[2];

  const accessToken = localStorage.getItem("accessToken");
  let conInfo = JSON.parse(localStorage.getItem("conInfo"));
  let exWaterObj = JSON.parse(localStorage.getItem("exWaterObj"));
  let finalList = JSON.parse(localStorage.getItem("finalList"));
  const [progressBar, setProgressBar] = useState(0);
  const [getMoment, setMoment] = useState(moment());

  const [exwaterInfo, setExwaterInfo] = useState({
    container_id,
    amount: "",
  });
  const [feedingInfo, setFeedingInfo] = useState({
    container_id,
    type: "",
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
    isExchangeModal,
    isHelpModal,
    isLevelupModal,
  } = state;

  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  //함수선언부분
  //
  // [...'220119', '220120', '220121'] 형태로 return
  const GetCurrentWeek = () => {
    const day = new Date();
    day.setHours(day.getHours() + 9);
    const sunday = day.getTime() - 86400000 * day.getDay();
    day.setTime(sunday);
    let result = [day.toISOString().slice(0, 10)];
    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }
    result = result.map((day) => (day = day.split("-").join("").slice(2)));
    return result;
  };
  //
  // return 값 없음. 그냥 바로 condata 갱신
  const UpdateConInfo = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_API}/info/container/${container_id}/${month}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
          withCredentials: true,
        }
      )
      .then((response) => {
        localStorage.setItem("conInfo", JSON.stringify(response.data.data));
        setCondata(response.data.data);
        UpdateFinalList();
      });

    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/container/${container_id}/${month}`,
      {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
    setCondata(response.data.data);
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    console.log("UpdateConInfo called and condata is:", condata);
    UpdateFinalList();
  };
  //
  //return 값 없음. 그냥 바로 condata 갱신
  const AddFeedRequest = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/container/${container_id}/feed`,
      {
        data: feedingInfo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      {
        withCredentials: true,
      }
    );
    console.log("container 아이디", container_id);
    console.log("응답", response);
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    setCondata(response.data.data);
    conInfo = JSON.parse(localStorage.getItem("conInfo"));
    UpdateProgressBar();
    console.log("AddFeedRequest called and conInfo is:", conInfo);
  };
  //
  //return 값 없음. 그냥 바로 condata 갱신
  const AddWaterRequest = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/container/${container_id}/ex_water`,
      {
        data: exwaterInfo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      {
        withCredentials: true,
      }
    );
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    setCondata(response.data.data);
    conInfo = JSON.parse(localStorage.getItem("conInfo"));
    UpdateProgressBar();
    console.log("AddWaterRequest called and condata is:", condata);
  };
  //
  //return 값 없음. 그냥 바로 condata 갱신
  const LevelUpRequest = async () => {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_API}/container/level/${container_id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    setCondata(response.data.data);
    console.log("LevelUpRequest called and condata is:", condata);
  };

  //
  // return 값 없음. 바로 finalList 갱신
  const UpdateFinalList = () => {
    let final_list = {};
    conInfo.feed_list.forEach((el1) => {
      let one_day_list = conInfo.feed_list.filter(
        (el2) => el1.createdAt === el2.createdAt
      );
      let array = [0, 0, 0, 0];
      one_day_list.forEach((el) => (array[el.type - 1] = el.count));
      final_list[el1.createdAt] = array;
    });
    localStorage.setItem("finalList", JSON.stringify(final_list));
    finalList = JSON.parse(localStorage.getItem("finalList"));
    // console.log(
    //   "UpdateFinalList called and finalList is:",
    //   finalList,
    //   "and conInfo is:",
    //   conInfo
    // );
  };
  //
  // return 값 없음. 바로 ExWaterObj 갱신
  const UpdateExWaterObj = () => {
    let tempObj = {};

    conInfo.ex_water_list.forEach((el) => {
      if (!tempObj[el.createdAt]) {
        tempObj[el.createdAt] = el.amount;
      } else {
        tempObj[el.createdAt] += el.amount;
      }
    });
    localStorage.setItem("exWaterObj", JSON.stringify(tempObj));
    exWaterObj = JSON.parse(localStorage.getItem("exWaterObj"));
  };
  //
  // return값 없음. 바로 progressBar 갱신  && 조건 충족하면 레벨 업도 요청
  const UpdateProgressBar = () => {
    console.log("UpdateProgressBar called and condata is:", condata);
    finalList = JSON.parse(localStorage.getItem("finalList"));
    exWaterObj = JSON.parse(localStorage.getItem("exWaterObj"));
    let temp = [];
    const curWeek = GetCurrentWeek();

    for (let key in finalList) {
      if (curWeek.includes(key)) {
        let sum = finalList[key].reduce((a, b) => a + b);
        for (let i = 0; i < sum; i++) {
          temp.push(1);
        }
      }
    }
    if (!temp.includes(2)) {
      for (let key in exWaterObj) {
        if (curWeek.includes(key)) temp.push(2);
        break;
      }
    }
    console.log("conInfo.last_lv_up@@@", conInfo.last_lv_up);
    // last_lv_up: "2022-01-21T05:39:45.000Z"
    if (temp.length >= 15 && temp.includes(2)) {
      LevelUpRequest();
      if (!conInfo.last_lv_up) {
        dispatch(levelupModalOnAction);
      } else {
        // console.log("conInfo.last_lv_up ----->>", typeof conInfo.last_lv_up);
        let lastLvUp = conInfo.last_lv_up.split("T")[0].split("-");
        lastLvUp = lastLvUp[0].slice(2) + lastLvUp[1] + lastLvUp[2];
        console.log("라스트업", lastLvUp);
        if (!curWeek.includes(lastLvUp)) {
          dispatch(levelupModalOnAction);
        }
      }
      // let lastLvUp

      // 2022-01-21T05:56:51.000Z
    }

    setProgressBar(Math.floor((temp.length * 100) / 15));
  };
  //
  // 캘린더 어레이 레이아웃을 리턴
  const calendarArr = () => {
    UpdateFinalList();
    UpdateExWaterObj();
    conInfo = JSON.parse(localStorage.getItem("conInfo"));
    finalList = JSON.parse(localStorage.getItem("finalList"));
    exWaterObj = JSON.parse(localStorage.getItem("exWaterObj"));
    // console.log(
    //   "calendarArr called and conInfo is:",
    //   conInfo,
    //   "and finalList is :",
    //   finalList
    // );

    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <Tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                //오늘이고 기록도 있을때
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")] === undefined
                              ? 0
                              : finalList[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                    </FoodIconContainer>
                    <ExWaterRecord>
                      {exWaterObj[days.format("YYMMDD")]}L
                    </ExWaterRecord>
                  </Td>
                );
              } else if (finalList[days.format("YYMMDD")]) {
                //오늘은 아니지만 기록이 있을 때
                return (
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {finalList[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer></FoodInnerContainer>
                      {/* 여기서 exAmount 이거로 랜더링 하면됨 */}
                      <ExWaterRecord>
                        {exWaterObj[days.format("YYMMDD")] || 0}L
                      </ExWaterRecord>
                    </FoodIconContainer>
                  </Td>
                );
              } else if (
                moment().format("YYYYMMDD") === days.format("YYYYMMDD")
              ) {
                //오늘
                return (
                  <Td key={index}>
                    <Number style={{ color: "#108dee" }}>
                      {days.format("D")}
                    </Number>
                  </Td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  //지난 달
                  <Td
                    key={index}
                    style={{
                      color: "#e5e5e5",
                    }}
                  >
                    <Number>{days.format("D")}</Number>
                  </Td>
                );
              } else {
                return (
                  //모든 경우를 제외한 평범한 날
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                  </Td>
                );
              }
            })}
        </Tr>
      );
    }
    return result;
  };
  //

  //
  // handler 함수 선언
  const handleExwaterValue = (e) => {
    setExwaterInfo({
      ...exwaterInfo,
      amount: e.target.value,
    });
  };
  //
  //
  const handleFeedAddRequest = async () => {
    try {
      AddFeedRequest();
      UpdateFinalList();
      UpdateProgressBar();
      console.log("handleFeedAddRequest called and condata is:", condata);
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  //
  //
  const handleExwaterAddRequest = async () => {
    try {
      AddWaterRequest();
      UpdateFinalList();
      UpdateProgressBar();
      console.log(
        "handleExwaterAddRequest called and condata is:",
        condata,
        "and exWaterObj:",
        exWaterObj
      );
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  //
  //
  const handleFoodtype = (e) => {
    setFeedingInfo({
      ...feedingInfo,
      type: e.target.name,
    });
  };

  //
  // 함수 실행 부분
  useEffect(() => {
    window.scroll(0, 0);
    UpdateConInfo();
    UpdateProgressBar();
    UpdateFinalList();
  }, []);

  let total = 0;
  for (let i = 0; i < conInfo.fish_list.length; i++) {
    total += conInfo.fish_list[i].fish_num;
  }
  let todayEx = conInfo.ex_water_list.filter(
    (el) => el.createdAt === todayString
  );

  for (let i = 0; i < todayEx.length; i++) {
    exAmount += todayEx[i].amount;
  }
  const imgSrcUrl =
    `${process.env.REACT_APP_SERVER_API}/level/` + conInfo.level;
  return (
    <>
      <Header2 />
      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          <Text>{conInfo.container_name}</Text>
        </TextContainer>
      </Container>
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
        </ImgContainer>

        {/* ----------------------------------------- */}

        <MidContainer>
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>{Math.floor(conInfo.level / 10)}</Levelinfo>
            </LevelCover>
            {/* src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png" */}
            <Logo src="/로고.png" alt="/로고.png" />
          </Level>
          <ProgressBar>
            <Progress EXP={`${progressBar}%`}></Progress>
          </ProgressBar>
          <BtnContainer>
            <Button onClick={() => dispatch(feedingInputModalOnAction)}>
              피딩기록
            </Button>
            <Button
              onClick={() => dispatch(myAquariumInfoModalOnAction)}
              className="info"
            >
              수조정보
            </Button>
            <Button onClick={() => dispatch(exchangeWaterModalOnAction)}>
              환수기록
            </Button>
          </BtnContainer>
        </MidContainer>
        <BottomContainer>
          {/* <button onClick={() => dispatch(levelupModalOnAction)}>
            임시버튼
          </button> */}
          <HelpBtn
            onClick={() => {
              dispatch(helpInfoModalOnAction);
              console.log(isHelpModal);
            }}
          >
            도움말
          </HelpBtn>
          <AddfishBtn onClick={() => dispatch(addfishModalOnAction)}>
            물고기추가
          </AddfishBtn>
          <DeadfishBtn onClick={() => dispatch(deadfishModalOnAction)}>
            용궁기록
          </DeadfishBtn>
        </BottomContainer>

        {/* —————————— 달력 ————————— */}

        <CalendarContainer>
          <Control>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#108dee" />
            </CalendarBtn>
            <Span>{today.format("YYYY 년 MM 월")}</Span>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                color="#108dee"
              />
            </CalendarBtn>
          </Control>
          <WeekContainer>
            <Day className="sun">일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day className="sat">토</Day>
          </WeekContainer>
          <Table>
            <Tbody>{calendarArr()}</Tbody>
          </Table>
        </CalendarContainer>

        {/* ———————————————————— */}

        {/* <ManageDetCard condata={condata} /> */}
      </OuterContainer>
      <FishCardContainer>
        {conInfo.fish_list.map((el, idx) => {
          return (
            <ContainerS key={idx}>
              <DetailImg>
                <ImgD
                  src={`${process.env.REACT_APP_SERVER_API}${el.fish_img}`}
                  alt="이미지"
                />
              </DetailImg>
              {/* ———————————————————— */}
              <Content>
                <LeftInfo>
                  <Name>{el.fish_name}</Name>

                  <HabitatContainer>
                    <Habitat>종류</Habitat>
                    <HabitatShow>
                      {el.fresh_water ? "담수어" : "해수어"}
                    </HabitatShow>
                  </HabitatContainer>
                  <HabitatContainer>
                    <Habitat>적정수온</Habitat>
                    <HabitatShow>{el.temp}</HabitatShow>
                  </HabitatContainer>

                  <HabitatContainer>
                    <Habitat>산호합사</Habitat>
                    <HabitatShow>{el.reefsafe ? "O" : "X"}</HabitatShow>
                  </HabitatContainer>
                  <HabitatContainer>
                    <Habitat>마릿수</Habitat>
                    <HabitatShow>{el.fish_num}</HabitatShow>
                  </HabitatContainer>
                </LeftInfo>
                <RightInfo>
                  <FishDesc>{el.desc}</FishDesc>
                </RightInfo>
              </Content>
            </ContainerS>
          );
        })}
      </FishCardContainer>
      {isMyAquariumInfoModal && (
        <AquaInfo
          conInfo={conInfo}
          total={total}
          container_id={container_id}
          month={month}
        />
      )}
      {isFeedingModal && (
        <FeedingInput
          handleFeedAddRequest={handleFeedAddRequest}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isExchangeModal && (
        <ExChangeWaterInput
          handleExwaterValue={handleExwaterValue}
          handleExwaterAddRequest={handleExwaterAddRequest}
        />
      )}
      {isAddfishModal && <AddFish container_id={container_id} />}
      {isDeadfishModal && <Deadfish container_id={container_id} />}
      {isHelpModal && <HelpInfo />}
      {isLevelupModal && <Levelup />}
      <Footer />
    </>
  );
}

export default ManageDetail;
