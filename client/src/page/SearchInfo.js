import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 5%;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #adb5bd;
  margin-bottom: 7%;
  perspective: 1000px;

  #box:hover {
    transform: rotateY(-180deg);
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
  transform: rotateY(0deg);
  transition: 1s;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
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
  /* box-sizing: border-box; */
  /* border: 1px solid black; */
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Ename = styled.div`
  font-size: 1.2rem;
  color: #828282;
  font-style: italic;
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
`;
const Text = styled.div`
  position: absolute;
  top: 20%;
  line-height: 170%;
  font-weight: bold;
`;
const Habitat = styled.div`
  /* border: 1px solid red; */
`;
const Temp = styled.div`
  /* border: 1px solid red; */
`;
const Size = styled.div`
  /* border: 1px solid red; */
`;

const Desc = styled.div`
  margin-top: 8%;
  /* border: 1px solid red; */
`;
const DescBottom = styled.div`
  margin-top: 3%;
  /* border: 1px solid red; */
  line-height: 180%;
  font-size: 0.9rem;
  text-align: justify;
`;
function SearchInfo({ filteredFish }) {
  // console.log(filteredFish, "ㅅㅓ치입니다");

  return (
    <Container key={filteredFish.id}>
      <Box id="box">
        <Front>
          <ImgContainer>
            <Img
              src={
                `${process.env.REACT_APP_SERVER_API}` + filteredFish.fish_img
              }
            ></Img>
          </ImgContainer>
          <Content>
            <Name>{filteredFish.fish_name}</Name>
            <Ename>{filteredFish.sci_name}</Ename>
          </Content>
        </Front>
        <Back>
          <Contents>
            <NameB>{filteredFish.fish_name}</NameB>
            <NamesB>{filteredFish.sci_name}</NamesB>
            <Text>
              <Habitat>서식지: {filteredFish.habitat} </Habitat>
              <Size>크기:{filteredFish.size} </Size>
              <Temp>수온:{filteredFish.temp} </Temp>
              <Desc>
                주요특징:
                <br />
                <DescBottom>{filteredFish.desc}</DescBottom>
              </Desc>
            </Text>
          </Contents>
        </Back>
      </Box>
    </Container>
  );
}

//   return filteredFish.map((el) => {
//     return (
//       <Container key={el.id}>
//         <Box id="box">
//           <Front>
//             <ImgContainer>
//               <Img src={"http://localhost:80" + el.fish_img}></Img>
//             </ImgContainer>
//             <Content>
//               <Name>{el.fish_name}</Name>
//               <Ename>{el.sci_name}</Ename>
//             </Content>
//           </Front>
//           <Back>
//             <Contents>
//               <NameB>{el.fish_name}</NameB>
//               <NamesB>{el.sci_name}</NamesB>
//               <Text>
//                 <Habitat>서식지: {el.habitat} </Habitat>
//                 <Size>크기:{el.size} </Size>
//                 <Temp>수온:{el.temp} </Temp>
//                 <Desc>
//                   주요특징:
//                   <br />
//                   <DescBottom>{el.desc}</DescBottom>
//                 </Desc>
//               </Text>
//             </Contents>
//           </Back>
//         </Box>
//       </Container>
//     );
//   });
// }
export default SearchInfo;
