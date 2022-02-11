import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 2% 3% 5%;
  width: 270px;
  height: 375px;
  box-shadow: 0px 0px 20px #adb5bd;
  border-radius: 20px;
  transition: all 0.3s;
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 30px #adb5bd;
    transition: all 0.3s;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 5%;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 53%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Img = styled.img`
  width: 102%;
  height: 115%;
  position: relative;
  top: 2%;
`;
const Content = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 45%;
  box-sizing: border-box;
  /* line-height: 250%; */
  .delete {
    position: absolute;
    width: 20%;
    height: 5%;
    top: 5%;
    right: 5%;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-family: "Kfont";
    :hover {
      cursor: pointer;
      color: #108dee;
    }
  }
`;

const DeleteBtn = styled.div`
  position: absolute;
  top: 2%;
  right: 5%;
  :hover {
    cursor: pointer;
    color: #108dee;
  }
`;

const ContainerInfoBox = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.div`
  width: 90%;
  border-radius: 5px;
  text-align: center;
  font-family: "Kfont";
  font-weight: bold;
  font-size: 1.3rem;
`;

const TextCover = styled.div`
  width: 90%;
  display: flex;
  border-radius: 5px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Kfont";
  width: 40%;
  font-weight: 600;
  font-size: 1.1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Size = styled.div`
  display: flex;
  width: 57%;
  justify-content: center;
  font-family: "Kfont";
  font-weight: 600;
  border-radius: 5px;
  background: #e1e1e1;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Theme = styled.div`
  display: flex;
  width: 57%;
  justify-content: center;
  font-family: "Kfont";
  font-weight: 600;
  border-radius: 5px;
  padding-bottom: 1%;
  background: #e1e1e1;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

function ManageInfo({ id, name, size, theme, level, handleCondata }) {
  const navigate = useNavigate();
  const month = new Date().getMonth() + 1;
  const accessToken = localStorage.getItem("accessToken");
  const DeleteHandler = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/container/${id}`, {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      })
      .then((result) => {
        navigate("/manage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendCardInfo = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/container/${id}/${month}`,
      {
        headers: { authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
    handleCondata(response.data.data);
    localStorage.setItem("conInfo", JSON.stringify(response.data.data));
    navigate(`${id}`);
  };
  const imgSrcUrl = `${process.env.REACT_APP_SERVER_API}/level/` + level;
  return (
    // 컨테이너를 누르면 매니지 디테일페이지로 정보가 넘어가야되요
    // 컨테이너 올을하면 수조 목록이 다뜨는데 환수정보랑 피딩정보가 없음
    // 클릭했을때 수조 아이디만 넘어가고 그 아이디로 피딩기록, 환수기록 조회, 물고기종류와 마릿수
    <Container onClick={sendCardInfo}>
      <Contents>
        <ImgContainer>
          <Img src={imgSrcUrl}></Img>
        </ImgContainer>
        <Content>
          <ContainerInfoBox>
            <Name>{name}</Name>

            <TextCover>
              <Text>어항 크기 :</Text>
              <Size>{size}L</Size>
            </TextCover>
            <TextCover>
              <Text>수조 테마 :</Text>
              <Theme>{theme}</Theme>
            </TextCover>
          </ContainerInfoBox>
          <DeleteBtn onClick={DeleteHandler}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </DeleteBtn>
          {/* <button className="delete" onClick={DeleteHandler}>
            삭제
          </button> */}
        </Content>
      </Contents>
    </Container>
  );
}
export default ManageInfo;
