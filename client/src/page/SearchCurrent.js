import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 23%;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 7%;
  perspective: 1000px;

  #box:hover {
    transform: rotateY(-180deg);
  }

  @media screen and (max-width: 480px) {
    width: 85%;
    height: 270px;
    margin-bottom: 25%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #adb5bd;
  transform: rotateY(0deg);
  transition: 1.5s;
  /* border: 1px solid black; */
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 65%;
  }
`;
const Img = styled.img`
  width: 105%;
  height: 100%;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  width: 260px;
  height: 140px;
  text-align: left;
  line-height: 200%;
  margin: 10% 0 0 5%;
  font-family: "Kfont";

  @media screen and (max-width: 480px) {
    padding-left: 5%;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    width: 70%;
    height: 17%;
  }
`;

const Ename = styled.div`
  font-size: 1.2rem;
  color: #828282;
  font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 70%;
  }
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  font-family: "Kfont";
  box-sizing: border-box;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 90%;
  height: 93%;
  /* border: 1px solid black; */
  text-align: left;
  flex-direction: column;
  display: flex;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 5%;
`;

const NameB = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 130%;
  font-weight: bold;
  font-size: 1.5rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NamesB = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 12%;
  font-size: 0.8rem;
  color: #828282;
  text-align: center;
  font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 70%;
  }
`;
const Text = styled.div`
  position: absolute;
  top: 20%;
  line-height: 170%;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    top: 20%;
    line-height: 100%;
  }
`;
const Habitat = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid red; */
`;
const Temp = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid red; */
`;
const Size = styled.div`
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid red; */
`;

const Desc = styled.div`
  margin-top: 8%;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid red; */
`;
const DescBottom = styled.div`
  margin-top: 3%;
  /* border: 1px solid red; */
  line-height: 180%;
  font-size: 0.9rem;
  text-align: justify;

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;
function SearchCurrent({ item }) {
  return (
    // <OuterContainer>

    <Container>
      <Box id="box">
        <Front>
          <ImgContainer>
            <Img
              src={process.env.REACT_APP_SERVER_API + item.fish_img}
              alt=""
            ></Img>
          </ImgContainer>
          <Content>
            <Name>{item.fish_name}</Name>
            <Ename>{item.sci_name}</Ename>
          </Content>
        </Front>
        <Back>
          <Contents>
            <NameB>{item.fish_name}</NameB>
            <NamesB>{item.sci_name}</NamesB>
            <Text>
              <Habitat>서식지: {item.habitat}</Habitat>
              <Size>크기: {item.size}cm</Size>
              <Temp>수온: {item.temp}도</Temp>
              <Desc>
                주요특징:
                <DescBottom>{item.desc}</DescBottom>
              </Desc>
            </Text>
          </Contents>
        </Back>
      </Box>
    </Container>
    // </OuterContainer>
  );
}
export default SearchCurrent;
