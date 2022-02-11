import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header2 from "../component/Header2";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../component/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopCover = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  /* box-shadow: 0px 2px 10px gray; */
`;

const TopImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
  z-index: -1;
`;

const TitleContainer = styled.div`
  width: 20%;
  display: flex;
  margin-top: 5%;
  /* border: 1px solid green; */
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  /* font-family: "Kfont"; */
  font-size: 3rem;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 5px;
  box-sizing: border-box;
  text-align: center;
  /* border-bottom: 5px solid #108dee; */
`;
const SubTitle = styled.div`
  width: 70%;
  margin-top: 1%;
  color: #808080;
  font-family: "Kfont";
  font-size: 1.25rem;
  margin-bottom: 50px;
  text-align: center;
  /* border: 1px solid red; */
`;

const SubTitle2 = styled.div`
  width: 70%;
  margin-top: 5%;
  color: #808080;
  font-family: "Kfont";
  font-size: 1.25rem;
  margin-bottom: 50px;
  text-align: center;
  /* border: 1px solid red; */
`;

const TipRules = styled.div`
  width: 70%;
  padding: 3%;
  color: black;
  background-color: #e3e3e2;
  text-align: start;
`;
// ------------------------------------------------------

const InputContainer = styled.div`
  width: 82%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  /* border: 1px solid black; */
`;

const TitleInput = styled.input`
  width: 90%;
  height: 8%;
  padding: 0 0 0 3%;
  align-items: center;
  position: relative;
  border: 1px solid gray;
  font-family: "Kfont";
  font-size: 1.3rem;
  margin-bottom: 1%;
  outline: none;
`;
//
const ImageInputForm = styled.label`
  display: flex;
  /* top: 60%; */
  width: 93%;
  height: 25%;
  /* position: relative; */
  /* border-radius: 4px; */
  color: white;
  cursor: pointer;
  border: 1px dashed gray;
  box-sizing: border-box;
  justify-content: center;
  margin: 2% 0 3%;
  padding: 3% 0;
`;
//
const ImageInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const TipInput = styled.textarea`
  position: relative;
  width: 90%;
  height: 30%;
  border: none;
  font-family: "Kfont";
  font-size: 1.2rem;
  padding: 3% 0 1% 3%;
  border: 1px solid gray;
  outline: none;
`;

const TipBtnBox = styled.div`
  width: 76%;
  height: 5%;
  margin-top: 5%;
  margin-bottom: 2%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 3px solid #808080;
`;

const StringBox = styled.div`
  width: 50%;
  margin-bottom: 1%;
  font-size: 1.7rem;
  font-family: "Kfont";
  font-weight: bold;
  color: #4a4a4a;
`;

const ButtonForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  /* border: 1px dashed darkcyan; */
`;

const Btn = styled.button`
  width: 12%;
  height: 8%;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: white;
  font-family: "Kfont";
  font-size: 1.1rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  background: #108dee;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #cccccc;
  }
`;
const BtnR = styled.button`
  width: 12%;
  height: 8%;
  box-sizing: border-box;
  align-items: center;
  margin: 0 5px;
  color: black;
  font-family: "Kfont";
  font-size: 1.1rem;
  font-weight: bold;
  border-style: none;
  border-radius: 4px;
  margin-right: 0;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #cccccc;
  }
`;

// ================================================================================

function WriteTips() {
  const accessToken = localStorage.getItem("accessToken");
  const edit_tip = localStorage.getItem("edit_tip");
  const tip_id = localStorage.getItem("tip_id");
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tip, setTip] = useState({
    title: "",
    content: "",
    img: "",
  });
  const [image, setImage] = useState("");
  const [isEdit, setIsEdit] = useState(edit_tip);

  // 수정버튼을 누르고 들어왔을 때
  useEffect(() => {
    window.scroll(0, 0);
    getTipData();
  }, []);

  const getTipData = () => {
    if (isEdit === "true") {
      axios
        .get(`${process.env.REACT_APP_SERVER_API}/tip/${tip_id}`, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log("res데이타", res.data);
          const { data: tip_data } = res.data;
          console.log("팁데이타", tip_data);
          setTip({
            ...tip_data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  // 이미지 파일 선택
  const selectFIle = async (e) => {
    const file = e.target.files[0];
    const result = await postImage(file);
    console.log(result.data.imagePath);
    setTip({
      ...tip,
      img: result.data.imagePath,
    });
  };

  // 이미지 파일 저장
  const postImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/images`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return result;
  };

  // 게시물 등록
  const handleAddTip = async () => {
    if (!accessToken) {
      console.log("null");
      return;
    }
    if (!tip.title) {
      console.log("invalid title");
      alert("제목을 입력해주세요");
      return;
    }
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/tip`,
      { data: tip },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const tip_id = result.data.data.id;
    navigate(`/posttips/${tip_id}`);
  };

  // 게시물 등록 취소
  const handleCancle = () => {
    setTip({
      ...tip,
      title: "",
      content: "",
      img: "",
    });
    console.log("팁초기화됨?", tip);
    setImage("");
    localStorage.setItem("edit_tip", false);
    navigate(-1);
  };

  // 텍스트 입력
  const handleInputValue = (e) => {
    setTip({
      ...tip,
      [e.target.name]: e.target.value,
    });
  };

  // 게시물 수정
  const handleEditTip = () => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_API}/tip/${tip_id}`,
        { data: tip },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem("edit_tip", false);
        navigate(`/posttips/${tip_id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header2></Header2>
      <Container>
        <TopCover>
          <TopImg src="글쓰기3.jpeg"></TopImg>
          <TitleContainer>
            <Title>BOARD</Title>
          </TitleContainer>
          <SubTitle>꿀팁들 나누세요!</SubTitle>
        </TopCover>
        <SubTitle2>
          물고기를 키우면서 알게 된 정보나 경험을 <br></br>Board 게시판에서
          작성해보세요
        </SubTitle2>
        {/* ========================================================== */}
        <TipBtnBox>
          <StringBox>글쓰기</StringBox>
          <ButtonForm>
            {isEdit === "true" ? (
              <Btn onClick={handleEditTip}>수정</Btn>
            ) : (
              <Btn onClick={handleAddTip}>등록</Btn>
            )}
            <BtnR onClick={handleCancle}>취소</BtnR>
          </ButtonForm>
        </TipBtnBox>
        <TipRules>
          [게시판 규정] <br />
          <br /> 1. 제목을 반드시 입력해 주세요 <br />
          <br /> 2. 논란이 있을만한 글은 삼가해 주시고, 논란 시 무통보 삭제 될
          수 있습니다. <br />
          <br /> 3. 욕설과 비속어는 엄격히 금지되어 있습니다.
        </TipRules>
        <InputContainer>
          {isEdit === "true" ? (
            <>
              <TitleInput
                placeholder="제목을 입력해 주세요."
                type="text"
                name="title"
                onChange={handleInputValue}
                value={tip.title}
              />
              {tip.img ? (
                <>
                  <ImageInputForm
                    for="input-image"
                    style={{ borderStyle: "none" }}
                  >
                    <img
                      id="select-img"
                      src={`${process.env.REACT_APP_SERVER_API}${tip.img}`}
                      style={{
                        objectFit: "cover",
                        // width: "100%",
                        // height: "100%",
                      }}
                    ></img>
                  </ImageInputForm>
                </>
              ) : (
                <>
                  <ImageInputForm for="input-image">
                    <img
                      id="select-img"
                      src="이미지2.png"
                      style={{
                        objectFit: "cover",
                        // width: "100%",
                        // height: "100%",
                      }}
                    ></img>
                  </ImageInputForm>
                </>
              )}

              <TipInput
                placeholder="내용을 입력하세요"
                type="text"
                name="content"
                onChange={handleInputValue}
                value={tip.content}
              />
            </>
          ) : (
            <>
              <TitleInput
                placeholder="제목을 입력해 주세요."
                type="text"
                name="title"
                onChange={handleInputValue}
              />
              {tip.img ? (
                <>
                  <ImageInputForm
                    for="input-image"
                    style={{ borderStyle: "none" }}
                  >
                    <img
                      id="select-img"
                      src={`${process.env.REACT_APP_SERVER_API}${tip.img}`}
                      style={{
                        objectFit: "cover",
                        // width: "100%",
                        // height: "100%",
                      }}
                    ></img>
                  </ImageInputForm>
                </>
              ) : (
                <>
                  <ImageInputForm for="input-image">
                    <img
                      id="select-img"
                      src="이미지2.png"
                      style={{
                        objectFit: "cover",
                        // width: "100%",
                        // height: "100%",
                      }}
                    ></img>
                  </ImageInputForm>
                </>
              )}
              <TipInput
                placeholder="내용을 입력하세요"
                type="text"
                name="content"
                onChange={handleInputValue}
              />
            </>
          )}
          <ImageInput id="input-image" onChange={selectFIle} type="file" />
        </InputContainer>
      </Container>
      <Footer></Footer>
    </>
  );
}
export default WriteTips;
