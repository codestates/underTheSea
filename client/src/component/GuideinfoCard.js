import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0px 0px 20px #adb5bd;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  /* margin-right: 35px; */
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 30px #adb5bd;
    transition: all 0.3s;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
`;
const Title = styled.div`
  width: 260px;
  height: 40px;
  border: 1px solid black;
  margin: 10px 0px;
`;
const Content = styled.div`
  width: 260px;
  height: 140px;
  border: 1px solid black;
`;
function GuideinfoCard() {
  return (
    <Container>
      <ImgContainer>
        <Img src="placeholder-300x300.jpg" />
      </ImgContainer>
      <Title></Title>
      <Content></Content>
    </Container>
  );
}

export default GuideinfoCard;
