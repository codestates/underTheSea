import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Header2 from "../component/Header2";

const Container = styled.div`
  margin: auto;
  max-width: 2000px;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

const MiddleContainer = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 2000px;
  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const BigBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover .overlay {
    height: 80%;
  }
  :hover .image {
    opacity: 1;
    transform: scale(1.05);
    transition: all 300ms ease-in;
  }
  @media screen and (max-width: 768px) {
    .image {
      opacity: 0.8;
    }
    .smalltext {
      font-size: 30px;
    }
  }
`;

const MiddleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 1s ease;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TextForm = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -230%);
  text-align: center;
`;

const TextForm2 = styled.div`
  color: white;
  font-size: 3rem;
  position: absolute;
  font-weight: 800;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -450%);
  text-align: center;
`;

const Seawater = styled.div`
  width: 33%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const Tips = styled.div`
  position: relative;
  width: 34%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: clip;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const TipImg = styled.img`
  position: block;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  @media screen and (max-width: 768px) {
    height: 120%;
  }
`;

const SeaImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Freshwater = styled.div`
  width: 33%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const SmallText = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    color: white;
    width: 100%;
    top: 30%;
    text-align: center;
    /* font-size: max(2vw, 1rem); */
    font-size: 2rem;
    font-weight: bold;
    z-index: 1;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    display: block;
    color: white;
    width: 100%;
    top: 30%;
    text-align: center;
    /* font-size: max(1vw, 0.9rem); */
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 1;
  }
`;

function Guide() {
  const Navigate = useNavigate();
  const goToSeawater = () => {
    Navigate("/seawaterguide");
  };
  const goToTips = () => {
    Navigate("/honeytips");
  };
  const goToFreshwater = () => {
    Navigate("/freshwaterguide");
  };
  return (
    <>
      <Header2></Header2>
      <Container>
        <MiddleContainer>
          <Seawater onClick={goToSeawater}>
            <BigBox>
              <SeaImg src="??????????????????.jpeg" className="image" />
              <SmallText>SEA WATER</SmallText>
              <MiddleBox className="overlay">
                <TextForm className="text">SEA WATER</TextForm>
              </MiddleBox>
            </BigBox>
          </Seawater>
          <Tips onClick={goToTips}>
            <BigBox>
              <TipImg src="??????????????????.png" className="image"></TipImg>
              <SmallText>BOARD</SmallText>
              <MiddleBox className="overlay">
                <TextForm2 className="text">BOARD</TextForm2>
              </MiddleBox>
            </BigBox>
          </Tips>
          <Freshwater onClick={goToFreshwater}>
            <BigBox>
              <SeaImg src="???????????????.jpeg" className="image" />
              <SmallText>FRESH WATER</SmallText>
              <MiddleBox className="overlay">
                <TextForm className="text">FRESH WATER</TextForm>
              </MiddleBox>
            </BigBox>
          </Freshwater>
        </MiddleContainer>
      </Container>
    </>
  );
}
export default Guide;
