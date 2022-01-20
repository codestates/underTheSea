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
} from "../store/actions";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vh;
  /* background-color: rgba(51, 153, 255, 0.1); */
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  line-height: 180%;
  color: #008eff;
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
`;

const Text = styled.div`
  width: 60%;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  line-height: 180%;
`;

const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15%;
  /* background-color: rgba(51, 153, 255, 0.1); */
`;

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  font-weight: bold;
  font-size: 1.5rem;
`;
const LevelCover = styled.div`
  display: flex;
  width: 8%;
`;
const LevelText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 50%; */
  color: #008eff;
  font-weight: bold;
  font-family: "Kfont";
  /* border: 1px solid red; */
`;

const Logo = styled.img`
  width: 20%;
`;

const Levelinfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.2rem;
  margin-left: 10px;
  /* border: 1px solid red; */
  font-family: "Kfont";
`;
const ImgContainer = styled.div`
  width: 50%;
  height: 40%;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MidContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1%;
  align-items: center;
  /* background: #00d2ff; */
  /* background-color: rgba(102, 178, 255, 0.2); */
  /* background-color: rgba(51, 153, 255, 0.1); */
  /* background-color: #e5e5e5; */
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 4vh;
  margin-top: 1%;
  /* border: 1px solid red; */
`;

const HelpBtn = styled.div`
  display: flex;
  /* text-align: right; */
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  /* width: 11%; */
  font-family: "Kfont";
  /* border: 1px solid blue; */
  cursor: pointer;
`;

const AddfishBtn = styled.div`
  display: flex;
  /* text-align: right; */
  justify-content: flex-end;
  align-items: center;
  color: #108dee;
  font-weight: bold;
  margin: 0px 20px;
  /* width: 11%; */
  font-family: "Kfont";
  /* border: 1px solid blue; */
  cursor: pointer;
`;
const DeadfishBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  color: #108dee;
  /* width: 11%; */
  font-family: "Kfont";
  font-weight: bold;
  /* border: 1px solid blue; */
  cursor: pointer;
`;

const ProgressBar = styled.div`
  padding: 2px;
  box-sizing: border-box;
  display: flex;
  border-radius: 5px;
  width: 50%;
  height: 4vh;
  border: 2px solid #108dee;
`;

// const goal_percent = dog.walk_goal
//     ? Math.min(100, Math.floor((100 * dog.walk_num) / dog.walk_goal))
//     : 0;

// bar가 지금 골퍼센트임
// const ProgressBar = styled.div`
//   position: absolute;
//   left: 0;
//   width: ${(props) => (props.bar ? props.bar : "50%")};
//   height: 100%;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   box-shadow: -5px 0 0 0 #bbdd3e inset;
//   background-color: #a2c523;
// `;
const Progress = styled.div`
  width: ${(props) => props.EXP};
  height: 3vh;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(#00d2ff, #3a7bd5);
`;
//--------------------------------------------
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 6vh;
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
`;

//------------------- 캘린더 --------------------
const CalendarContainer = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  /* background: white; */
  background-color: rgba(51, 153, 255, 0);
  width: 40px;
  height: 30px;
  border-style: none;
`;

const Span = styled.span`
  font-size: 1.5rem;
`;

const Table = styled.table`
  /* border: 1px solid gray; */
`;

const Tbody = styled.tbody`
  /* border: 1px dashed blue; */
`;

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
  /* border: 1px solid black; */
`;

const Td = styled.td`
  display: flex;
  /* border: 1px solid rgba(51, 153, 255, 0.3); */
  border: 1px solid black;
  /* justify-content: center; */
  background: white;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  width: 6.8vw;
  height: 13vh;
  /* margin: 1px; */
`;
const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /* border: 1px solid red; */
  .sun {
    color: red;
  }
  .sat {
    color: blue;
  }
`;
const Day = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  width: 7vw;
  height: 3vh;
  /* margin: 1px; */
  /* border: 1px solid black; */
`;
// 지금 해야되는거는 피딩기록하는 버튼을 누르면 버튼을 누른 숫자만큼 클릭한 날에 달력에 정보가 보여야해

const FoodIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  /* border: 2px solid royalblue; */
`;

const FoodInnerContainer = styled.div`
  display: flex;
  /* border: 1px dashed red; */
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
`;

const FoodTypeAndNum = styled.div`
  display: flex;
`;

const FeedingNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const FoodIcon = styled.img`
  width: 40%;
  /* border: 1px solid blue; */
`;

function ManageDetail({ condata, handleCondata }) {
  const params = useParams();
  let exAmount = 0;
  const month = new Date().getMonth() + 1;
  let today = new Date().toISOString().split("T")[0].split("-");
  today = today[0].slice(2) + today[1] + today[2];
  const container_id = params.container_id;
  const [feedingInfo, setFeedingInfo] = useState({
    container_id,
    type: "",
  });
  const [finalList, setFinalList] = userState([]);
  const [expArr, setExpArr] = useState([]);
  const [progressBar, SetProgressBar] = useState(0);
  const accessToken = localStorage.getItem("accessToken");
  const [exwaterInfo, setExwaterInfo] = useState({
    container_id,
    amount: "",
  });
  const conInfo = JSON.parse(localStorage.getItem("conInfo"));
  const state = useSelector((state) => state.modalReducer);
  const {
    isMyAquariumInfoModal,
    isFeedingModal,
    isAddfishModal,
    isDeadfishModal,
    isExchangeModal,
    isHelpModal,
  } = state;

  const dispatch = useDispatch();
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; // today == moment()   입니다.
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const getCurrentWeek = () => {
    const day = new Date();
    day.setHours(day.getHours() + 9);
    const sunday = day.getTime() - 86400000 * day.getDay();
    day.setTime(sunday);
    const result = [day.toISOString().slice(0, 10)];
    for (let i = 1; i < 7; i++) {
      day.setTime(day.getTime() + 86400000);
      result.push(day.toISOString().slice(0, 10));
    }
    return result;
  };

  const getConinfo = async () => {
    const res = await axios.get(
      `http://localhost:80/container/${container_id}/${month}`,
      {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
    console.log("RES FROM getConinfo", res.data);
    handleCondata(res.data.data);
  };

  const getFinalList = () => {
    let thisWeek = getCurrentWeek();

    let curWeek = thisWeek.map(
      (day) => (day = day.split("-").join("").slice(2))
    );

    let exWaterObj = {};
    condata.ex_water_list.forEach((el) => {
      if (!exWaterObj[el.createdAt]) {
        exWaterObj[el.createdAt] = el.amount;
      } else {
        exWaterObj[el.createdAt] += el.amount;
      }
    });
    let final_list = {};
    condata.feed_list.forEach((el1) => {
      let one_day_list = condata.feed_list.filter(
        (el2) => el1.createdAt === el2.createdAt
      );
      let array = [0, 0, 0, 0];
      one_day_list.forEach((el) => (array[el.type - 1] = el.count));
      final_list[el1.createdAt] = array;
    });

    //---------------
    let temp = [];
    for (let key in final_list) {
      if (curWeek.includes(key)) {
        let sum = final_list[key].reduce((a, b) => a + b);
        for (let i = 0; i < sum; i++) {
          temp.push(1);
        }
      }
    }

    setExpArr(temp);
    if (!expArr.includes(2)) {
      for (let key in exWaterObj) {
        if (curWeek.includes(key)) temp.push(2);
        break;
      }
    }
    setExpArr(temp);
    console.log("temp", temp);
    EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
    console.log("경험치바", EXP);
    SetProgressBar(EXP);
    setFinalList(final_list);
  };

  const handleExwaterValue = (e) => {
    setExwaterInfo({
      ...exwaterInfo,
      amount: e.target.value,
    });
  };

  const exwaterAddRequest = async () => {
    try {
      const response = await axios.post(
        `http://localhost:80/container/${container_id}/ex_water`,
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
      handleCondata(response.data.data);
      getFinalList();
      console.log("FROM 443", condata);

      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };

  if (condata.length === 0) {
    console.log("CONDATA is EMPTY");
    getConinfo();
  }
  getFinalList();

  // ----- 해당수조 총 물고기수 ------
  let total = 0;
  for (let i = 0; i < condata.fish_list.length; i++) {
    total += condata.fish_list[i].fish_num;
  }
  // console.log("토탈", total);
  // ----------------------------

  let todayEx = condata.ex_water_list.filter((el) => el.createdAt === today);

  for (let i = 0; i < todayEx.length; i++) {
    exAmount += todayEx[i].amount;
  }

  const imgSrcUrl = "http://localhost:80/level/" + condata.level;
  // const conExInfo = JSON.parse(localStorage.getItem("conExInfo"));
  // 환수데이터가공

  exWaterObj = {};
  condata.ex_water_list.forEach((el) => {
    if (!exWaterObj[el.createdAt]) {
      exWaterObj[el.createdAt] = el.amount;
    } else {
      exWaterObj[el.createdAt] += el.amount;
    }

    // console.log(oneDayList)
  });

  let exp = [];

  // const levelUpRequest = () => {
  // for (let key in final_list) {
  //   if (curWeek.includes(key)) exp.push(1);
  // }

  // for (let key in exWaterObj) {
  //   if (curWeek.includes(key)) exp.push(2);
  //   break;
  // }
  useEffect(() => {
    // console.log("조건문밖 요청", expArr);
    // console.log("경험치길이", expArr.length);
    // console.log("환수포함여부", expArr.includes(2));
    if (expArr.length >= 15 && expArr.includes(2)) {
      // console.log("조건문안 요청", expArr);
      axios
        .patch(
          `http://localhost:80/container/${container_id}/level`,
          {},
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          localStorage.setItem("conInfo", JSON.stringify(res.data.data));
          handleCondata(res.data.data);
          if (
            res.message === "You've already leveled up this week" ||
            res.message === "You've reached max level"
          ) {
          }
          console.log("res--->", res);
          SetProgressBar([]);
          setExpArr([]);
        })
        .catch((err) => console.log(err));
    }
  }, [expArr]);
  // console.log("렙업요청안의 경험치배열", expArr);

  // };

  useEffect(() => {
    axios
      .get(
        `http://localhost:80/container/${container_id}/${month}`,
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
        // console.log("response:", res.data.data);
        // levelUpRequest();
        localStorage.setItem("conInfo", JSON.stringify(res.data.data));
        handleCondata(res.data.data);

        let final_list = {};
        condata.feed_list.forEach((el1) => {
          let one_day_list = condata.feed_list.filter(
            (el2) => el1.createdAt === el2.createdAt
          );
          let array = [0, 0, 0, 0];
          one_day_list.forEach((el) => (array[el.type - 1] = el.count));
          final_list[el1.createdAt] = array;
        });

        //---------------
        let temp = [];
        for (let key in final_list) {
          if (curWeek.includes(key)) {
            let sum = final_list[key].reduce((a, b) => a + b);
            for (let i = 0; i < sum; i++) {
              temp.push(1);
            }
          }
        }
        if (!expArr.includes(2)) {
          for (let key in exWaterObj) {
            if (curWeek.includes(key)) temp.push(2);
            break;
          }
        }
        setExpArr(temp);
        console.log("랜더링 되자마자 temp", temp);
        console.log("랜더링 되자마자 expArr", expArr);
        EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
        console.log("피딩기록추가에 exp", expArr);
        console.log("피딩기록추가에 EXP", EXP);
        SetProgressBar(EXP);
      })
      .catch((err) => console.log(err));
  }, []);

  const calendarArr = () => {
    // console.log("From Cal", final_list);
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
              if (
                // final_list[days.format("YYMMDD")] &&
                moment().format("YYYYMMDD") === days.format("YYYYMMDD")
              ) {
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
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")] === undefined
                              ? 0
                              : final_list[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                    </FoodIconContainer>
                    <ExWaterRecord>
                      {exWaterObj[days.format("YYMMDD")]}L
                    </ExWaterRecord>
                  </Td>
                );
              } else if (final_list[days.format("YYMMDD")]) {
                //오늘은 아니지만 기록이 있을 때
                return (
                  <Td key={index}>
                    <Number>{days.format("D")}</Number>
                    <FoodIconContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/펠렛.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][0]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/플레이크.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][1]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/냉동.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][2]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                        <FoodTypeAndNum>
                          <FoodIcon src="https://iconmage.s3.ap-northeast-2.amazonaws.com/생먹이.png" />
                          <FeedingNum>
                            {final_list[days.format("YYMMDD")][3]}
                          </FeedingNum>
                        </FoodTypeAndNum>
                      </FoodInnerContainer>
                      <FoodInnerContainer></FoodInnerContainer>
                      {/* 여기서 exAmount 이거로 랜더링 하면됨 */}
                      <ExWaterRecord>
                        {exWaterObj[days.format("YYMMDD")] === undefined
                          ? 0
                          : exWaterObj[days.format("YYMMDD")]}
                        L
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

  const handleFoodtype = (e) => {
    setFeedingInfo({
      ...feedingInfo,
      type: e.target.name,
    });
  };
  let EXP;

  const addFeedingNum = async () => {
    try {
      const response = await axios.post(
        `http://localhost:80/container/${container_id}/feed`,
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
      console.log("비동기응답", response.data.data);
      // setExpArr()
      localStorage.setItem("conInfo", JSON.stringify(response.data.data));
      handleCondata(response.data.data);

      //---------------

      let exWaterObj = {};
      condata.ex_water_list.forEach((el) => {
        if (!exWaterObj[el.createdAt]) {
          exWaterObj[el.createdAt] = el.amount;
        } else {
          exWaterObj[el.createdAt] += el.amount;
        }

        // console.log(oneDayList)
      });

      // --------- 피딩데이터 가공 ---------

      let final_list = {};
      condata.feed_list.forEach((el1) => {
        let one_day_list = condata.feed_list.filter(
          (el2) => el1.createdAt === el2.createdAt
        );
        let array = [0, 0, 0, 0];
        one_day_list.forEach((el) => (array[el.type - 1] = el.count));
        final_list[el1.createdAt] = array;
      });

      let temp = [];
      for (let key in final_list) {
        if (curWeek.includes(key)) {
          let sum = final_list[key].reduce((a, b) => a + b);
          for (let i = 0; i < sum; i++) {
            temp.push(1);
          }
        }
      }
      if (!expArr.includes(2)) {
        for (let key in exWaterObj) {
          if (curWeek.includes(key)) temp.push(2);
          break;
        }
      }
      setExpArr(temp);
      console.log("임시배열 temp", temp);
      EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
      console.log("피딩기록추가에 exp", expArr);
      console.log("피딩기록추가에 EXP", EXP);
      SetProgressBar(EXP);
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("밖에있는 경험치", progressBar);
  return (
    <>
      <Header2 />

      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          {/* <Text>Hello</Text> */}
          <Text>{condata.container_name}</Text>
          {/* <Text>수조</Text> */}
        </TextContainer>
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}

        {/* ----------------------- */}

        <MidContainer>
          {/* ----------------------------------------- */}
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>{Math.floor(condata.level / 10)}</Levelinfo>
            </LevelCover>
            <Logo
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png"
              alt="/로고.png"
            />
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
        {/* -------------------- 달력 ------------------- */}
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

        {/* ----------------------------------------- */}

        {/* <ManageDetCard condata={condata} /> */}
      </OuterContainer>
      {isMyAquariumInfoModal && (
        <AquaInfo
          condata={condata}
          total={total}
          container_id={container_id}
          month={month}
        />
      )}
      {isFeedingModal && (
        <FeedingInput
          addFeedingNum={addFeedingNum}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isExchangeModal && (
        <ExChangeWaterInput
          handleExwaterValue={handleExwaterValue}
          exwaterAddRequest={exwaterAddRequest}
        />
      )}
      {isAddfishModal && <AddFish container_id={container_id} />}
      {isDeadfishModal && <Deadfish container_id={container_id} />}
      {isHelpModal && <HelpInfo />}
      <Footer />
    </>
  );
}
export default ManageDetail;