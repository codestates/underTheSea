import styled from "styled-components";
import React, { useState } from "react";
import Header from "../component/Header";
import Header2 from "../component/Header2";
import axios from "axios";
import SearchCurrent from "./SearchCurrent";
import SearchInfo from "./SearchInfo";
import { useEffect } from "react";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Con = styled.div`
  /* max-width: 1450px;
  margin: auto; */
`;

const MainImg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 65vh;
  .img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 30vh;
  }
`;

const Auto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  position: relative;
  margin-top: 5%;
  /* border: 1px solid black; */

  @media screen and (max-width: 480px) {
    margin-top: 17%;
  }
`;

const InputContainer = styled.div`
  position: relative;
  align-items: center;
  border: 2px solid #108dee;
  border-radius: 5px;
  width: 35%;
  height: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;

  .fish-input {
    background-color: transparent;
    margin: 0%;
    padding-left: 8%;
    outline: none;
    border: none;
    width: 85%;
    font-size: max(1vw, 1.3rem);
    font-family: "Kfont";
    box-sizing: border-box;
  }

  .delete-button {
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0 0.5em 0.1em;
    color: #e5e5e5;
    font-size: 1.6rem;
    /* border: 1px solid black; */

    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .fish-input {
      font-size: max(2vw, 0.6rem);
    }
  }
  @media screen and (max-width: 480px) {
    width: 70%;
    height: 70%;
    .delete-button {
      padding-bottom: 2%;
    }
  }
`;

const Button = styled.button`
  width: 15%;
  height: 100%;
  font-size: 1.25rem;
  color: white;
  background: #108dee;
  overflow: hidden;
  padding: 0.2em;
  margin: 0%;
  border: 2px solid #108dee;
  cursor: pointer;

  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    /* left: 0; */
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
`;

const Text = styled.div`
  position: relative;
  margin-top: 10%;
  font-weight: bold;
  font-size: max(1vw, 1.7rem);
  text-align: center;
  line-height: 180%;

  @media screen and (max-width: 1024px) {
    font-size: max(2vw, 1.3rem);
  }
  @media screen and (max-width: 480px) {
    margin: 17% 0 10%;
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 5%;
  margin-bottom: 10%;

  @media screen and (max-width: 480px) {
  }
`;
const CardContainer = styled.div`
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @media screen and (max-width: 480px) {
  }
`;

function Search() {
  const [fish, setFish] = useState([]); //첫 랜딩될 화면 페이지
  const [allFish, setAllFish] = useState([]); // 60개의 물고기 정보값
  // const [filteredFish, setFilteredFish] = useState([]); //매치된 이름을 통해 정보가 필터링 되어서 들어온다. [{}{}]
  //==================================================================
  const [currentFish, setCurrentFIsh] = useState(false); //추천, 현재 상태
  const [hasText, setHasText] = useState(false); //인풋값 유무를 확인
  //==================================================================
  const [input, setInput] = useState([]);
  const [fishList, setFishList] = useState([]); //물고기 이름 리스트
  const [search, setSearch] = useState([]);
  // 검색 받아오기===========================================================

  const gotoSearch = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/fish/one`, {
        data: { fish_name: input },
      })
      .then((result) => {
        setSearch(result.data.data);
        // console.log(result.data.data, "물고기 한마리");
        setCurrentFIsh(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(search, "물고기 한마리");
  // 60개 리스트 받아오기===========================================================

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/all/63`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        setAllFish(result.data.data.fish_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/fishnamelist`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        // console.log(result.data.data);
        setFishList(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 추천 6개 카드  ===========================================================

  useEffect(() => {
    window.scroll(0, 0);
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/fish/all/6`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((result) => {
        setCurrentFIsh(false);
        setFish(result.data.data.fish_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 인풋  ===========================================================

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    value ? setHasText(true) : setHasText(false);
    setInput(value);

    // const matchFish = allFish.filter((fish) => fish.fish_name.match(value));
    // setFilteredFish(matchFish);
  };

  const handleDeleteButton = () => {
    setInput("");
  };

  return (
    <>
      <Header2 />
      <Con>
        <MainImg>
          <img
            className="img"
            src="https://iconmage.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5%E1%86%BC.jpg"
            alt=""
          ></img>
        </MainImg>
        <Auto>
          <InputContainer>
            <input
              className="fish-input"
              type="text"
              placeholder="어종명으로 검색해주세요."
              onChange={handleInputChange}
              value={input || ""}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  gotoSearch();
                }
              }}
              list="fishName"
            />

            <div className="delete-button" onClick={handleDeleteButton}>
              &times;
            </div>
            <datalist id="fishName">
              {fishList.map((el, idx) => (
                <option
                  className="fish-option"
                  value={el}
                  label={el}
                  key={idx}
                ></option>
              ))}
            </datalist>
            <Button onClick={gotoSearch}>
              <FontAwesomeIcon icon={faSearch} size="1x" color="#e5e5e5" />
            </Button>
          </InputContainer>
        </Auto>
        <Text>카드를 클릭하면 뒷면의 세부정보를 확인할 수 있습니다.</Text>

        {/* ============================================================= */}

        <Container>
          {currentFish ? (
            <CardContainer>
              <SearchInfo filteredFish={search} />
            </CardContainer>
          ) : (
            <CardContainer>
              {fish.map((item) => (
                <SearchCurrent key={item.id} item={item} />
              ))}
            </CardContainer>
          )}
        </Container>
      </Con>
      <Footer />
    </>
  );
}
export default Search;
