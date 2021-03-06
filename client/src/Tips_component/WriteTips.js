import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header2 from "../component/Header2";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../component/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 50%;
  }
`;

const TopCover = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
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
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 5px;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.div`
  width: 70%;
  margin-top: 1%;
  color: #808080;
  font-family: "Kfont";
  font-size: 1.25rem;
  margin-bottom: 50px;
  text-align: center;
`;

const SubTitle2 = styled.div`
  width: 70%;
  margin-top: 5%;
  color: #808080;
  font-family: "Kfont";
  font-size: 1.25rem;
  margin-bottom: 50px;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TipRules = styled.div`
  width: 70%;
  padding: 3%;
  color: black;
  background-color: #e3e3e2;
  text-align: start;
  @media screen and (max-width: 768px) {
    width: 78%;
  }
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
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 80vh;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
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
  @media screen and (max-width: 768px) {
    margin-top: 10%;
    width: 84%;
  }
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
  @media screen and (max-width: 768px) {
    width: 40%;
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
  @media screen and (max-width: 768px) {
    width: 40%;
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

  // ??????????????? ????????? ???????????? ???
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
          console.log("res?????????", res.data);
          const { data: tip_data } = res.data;
          console.log("????????????", tip_data);
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

  // ????????? ?????? ??????
  const selectFIle = async (e) => {
    const file = e.target.files[0];
    const result = await postImage(file);
    console.log(result.data.imagePath);
    setTip({
      ...tip,
      img: result.data.imagePath,
    });
  };

  // ????????? ?????? ??????
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

  // ????????? ??????
  const handleAddTip = async () => {
    if (!accessToken) {
      console.log("null");
      return;
    }
    if (!tip.title) {
      console.log("invalid title");
      alert("????????? ??????????????????");
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

  // ????????? ?????? ??????
  const handleCancle = () => {
    setTip({
      ...tip,
      title: "",
      content: "",
      img: "",
    });
    console.log("????????????????", tip);
    setImage("");
    localStorage.setItem("edit_tip", false);
    navigate(-1);
  };

  // ????????? ??????
  const handleInputValue = (e) => {
    setTip({
      ...tip,
      [e.target.name]: e.target.value,
    });
  };

  // ????????? ??????
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
          <TopImg src="?????????3.jpeg"></TopImg>
          <TitleContainer>
            <Title>BOARD</Title>
          </TitleContainer>
          <SubTitle>????????? ????????????!</SubTitle>
        </TopCover>
        <SubTitle2>
          ???????????? ???????????? ?????? ??? ????????? ????????? <br></br>Board ???????????????
          ??????????????????
        </SubTitle2>
        {/* ========================================================== */}
        <TipBtnBox>
          <StringBox>?????????</StringBox>
          <ButtonForm>
            {isEdit === "true" ? (
              <Btn onClick={handleEditTip}>??????</Btn>
            ) : (
              <Btn onClick={handleAddTip}>??????</Btn>
            )}
            <BtnR onClick={handleCancle}>??????</BtnR>
          </ButtonForm>
        </TipBtnBox>
        <TipRules>
          [????????? ??????] <br />
          <br /> 1. ????????? ????????? ????????? ????????? <br />
          <br /> 2. ????????? ???????????? ?????? ????????? ?????????, ?????? ??? ????????? ?????? ???
          ??? ????????????. <br />
          <br /> 3. ????????? ???????????? ????????? ???????????? ????????????.
        </TipRules>
        <InputContainer>
          {isEdit === "true" ? (
            <>
              <TitleInput
                placeholder="????????? ????????? ?????????."
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
                      src="?????????2.png"
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
                placeholder="????????? ???????????????"
                type="text"
                name="content"
                onChange={handleInputValue}
                value={tip.content}
              />
            </>
          ) : (
            <>
              <TitleInput
                placeholder="????????? ????????? ?????????."
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
                      src="?????????2.png"
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
                placeholder="????????? ???????????????"
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
