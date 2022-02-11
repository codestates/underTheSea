import styled from "styled-components";
import { useDispatch } from "react-redux";
import { skimmerInfoModalOnAction } from "../store/actions";

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
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 30px #adb5bd;
    transition: all 0.3s;
  }
  @media screen and (max-width: 400px) {
    width: 280px;
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    width: 225px;
    height: 245px;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  @media screen and (max-width: 320px) {
    height: 165px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;
const Title = styled.div`
  width: 260px;
  height: 40px;
  font-family: "Kfont";
  margin: 10px 0px;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  @media screen and (max-width: 320px) {
    width: 225px;
    justify-content: center;
    /* height: 245px; */
  }
`;
const Content = styled.div`
  font-family: "Kfont";
  width: 260px;
  height: 140px;
  border-radius: 10px;
  background: #e5e5e5;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 400px) {
    width: 240px;
    height: 120px;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;
function SkimmerCard() {
  const dispatch = useDispatch();

  return (
    // 컨테이너를 클릭하면 모달상태가 변경되야함
    <Container onClick={() => dispatch(skimmerInfoModalOnAction)}>
      <ImgContainer>
        <Img src="https://www.simplicityaquatics.com/wp-content/uploads/how-to-break-in-a-protein-skimmer@2x.jpg" />
      </ImgContainer>
      <Title>스키머란 무엇일까요?</Title>
      <Content>
        해수어를 키우려면 스키머를 필수라는데 스키머가 무엇일까요? 스키머에 관한
        모든 것을 알려드립니다.
      </Content>
    </Container>
  );
}

export default SkimmerCard;
