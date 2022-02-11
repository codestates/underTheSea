import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { containerCardInfoShowAction } from "../store/actions";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
`;
const TitleContainer = styled.div`
  margin-top: 13%;
  position: relative;
  width: 60%;
  height: 100%;
  /* border: 1px solid black; */
  text-align: center;
  border-bottom: 3px solid #108dee;
  line-height: 500%;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Form = styled.form`
  width: 60%;
  /* border: 1px solid red; */
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5% 2% 0.5% 2%;
  color: white;
  border-radius: 4px;
  border: 1px solid #108dee;
  background: #108dee;
  margin: 1.5% 0 0 53%;
  position: relative;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Input1 = styled.input`
  margin-top: 2%;
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.5% 0 0.5% 1%;
  border-radius: 10px;

  border: 3px solid #108dee;
`;
const Contents = styled.div`
  position: relative;
  margin: 4% 0 15%;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  text-align: left;
  justify-content: center;
`;
const Text1 = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  padding-left: 1%;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input2 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
const Input3 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;
const Input4 = styled.input`
  margin-top: 2%;
  width: 29%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;

const Text2 = styled.div`
  position: absolute;
  margin: 4% 0 0 1%;
  font-weight: bold;
  font-size: 1.7rem;
`;
const Input5 = styled.input`
  margin-top: 10%;
  width: 27%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;

const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7%;
  /* border: 1px solid black; */
`;

const Input6 = styled.input`
  width: 46%;
  height: 30%;
  font-weight: 700;
  font-size: 1.7rem;
  padding: 0.7% 0 0.7% 1%;
  border-radius: 10px;
  border: 3px solid #108dee;
`;

function ManageAddInfo({
  token,
  handleInputValue,
  getSize,
  containerAddRequest,
}) {
  // const state = useSelector((state) => state.manageReducer);
  // const { level_id, container_name, size, theme } = state;
  // const dispatch = useDispatch();

  // export const containerCardInfoShowAction = (data) => ({
  //   type: CONTAINER_CARD_INFO_SHOW,
  //   payload: {
  //     ...data,
  //   },

  // const [aquaInfo, setAquaInfo] = useState({
  //   container_name: "",
  //   size: "",
  //   theme: "",
  // });
  // const [size, setSize] = useState({
  //   width: 0,
  //   height: 0,
  //   vertical: 0,
  // });
  // const handleInputValue = (e) => {
  //   setAquaInfo({
  //     ...aquaInfo,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const getSize = (e) => {
  //   setSize({
  //     ...size,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const getWaterVolum = () => {
  //   let waterVolum = Math.floor(
  //     (size.width * size.height * size.vertical) / 1000
  //   );
  //   if (waterVolum > 0) {
  //     setAquaInfo({
  //       ...aquaInfo,
  //       size: waterVolum,
  //     });
  //   }
  // };

  // const containerAddRequest = () => {
  //   getWaterVolum();
  //   console.log("아쿠아인포", aquaInfo);

  //   console.log(token);
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_SERVER_API}/container/add`,
  //       { data: aquaInfo },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("추가성공!");
  //       console.log("응답이 뭘까?", res);
  //       // data: {id: 3, user_id: 1, container_name: '예쁜수족관', size: '20', theme: 'FO', …}
  //       // message: "Container is successfully added"
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>어항 정보 추가</Title>
        </TitleContainer>
        <Form>
          <Button type="button" onClick={containerAddRequest}>
            추가
          </Button>
          <Input1
            name="container_name"
            type="text"
            placeholder="수조명"
            onChange={handleInputValue}
          ></Input1>
          <Contents>
            <Text1>직사각형 수조</Text1>
            <Box1>
              <Input2
                name="width"
                type="text"
                placeholder="가로"
                onChange={getSize}
              ></Input2>
              <Input3
                name="vertical"
                type="text"
                placeholder="세로"
                onChange={getSize}
              ></Input3>
              <Input4
                name="height"
                type="text"
                placeholder="수위"
                onChange={getSize}
              ></Input4>
            </Box1>
            <Text2>볼형 수조</Text2>

            <Input5
              name="size"
              type="text"
              placeholder="물량"
              onChange={handleInputValue}
            ></Input5>
            <Box2>
              <Input6
                name="theme"
                type="text"
                placeholder="테마"
                onChange={handleInputValue}
              ></Input6>
            </Box2>
          </Contents>
        </Form>
        {/* <img src="${process.env.REACT_APP_SERVER_API}/level/11" /> */}
      </Container>
    </>
  );
}
export default ManageAddInfo;
