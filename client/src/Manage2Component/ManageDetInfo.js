import React from "react";
import styled from "styled-components";

//manage 페이지에서 카드의 세부 css / ManageInfo
//후에 컴포넌트 이동
//이름 영어나 한글로 통일 / 컴포넌트 이름 재설정 /  이미지 파일 정리

const ContainerS = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px #adb5bd;
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  margin-bottom: 7%;
`;

const DetailImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 25%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`;

const ImgD = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 75%;
  height: 20vh;
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
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
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

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Kfont";
`;

const HabitatContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;
const MidContainer = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
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

const HabitatShow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kfont";
  width: 50%;
  height: 100%;
`;

function ManageDetInfo() {
  let conInfo = JSON.parse(localStorage.getItem("conInfo"));
  return (
    <>
      {conInfo.fish_list.map((el, idx) => {
        return (
          <ContainerS key={idx}>
            <DetailImg>
              <ImgD
                src={`${process.env.REACT_APP_SERVER_API}${el.fish_img}`}
                alt="이미지"
              />
            </DetailImg>
            {/* ----------------------------------------- */}
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
    </>
  );
}
export default ManageDetInfo;
