import styled from "styled-components";
import { useDispatch } from "react-redux";
import { wsdInfoModalOnAction } from "../store/actions";

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
function WSDCard() {
  const dispatch = useDispatch();

  return (
    // 컨테이너를 클릭하면 모달상태가 변경되야함
    <Container onClick={() => dispatch(wsdInfoModalOnAction)}>
      <ImgContainer>
        <Img src="https://iconmage.s3.ap-northeast-2.amazonaws.com/해수어백점병.jpeg" />
      </ImgContainer>
      <Title>백점병이 무엇일까요?</Title>
      <Content>
        해수어에 관심이 생기셨다면 들어보셨을 백점병은 생각보다 흔한 어병입니다.
        어떤 병이고 어떻게 치료할까요?
      </Content>
    </Container>
  );
}

export default WSDCard;
