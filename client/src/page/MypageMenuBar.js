import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";

const Box2 = styled.div`
  /* border: 1px solid #108dee; */
  margin-top: 2%;
  width: 70vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ace0ff;
  font-size: 2rem;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    height: 5vh;
    width: 80vw;
    justify-content: space-evenly;
  }
`;
const Manage = styled.div`
  /* border: 1px solid black; */
  width: 16%;
  height: 60%;
  font-size: 1.7rem;
  background: none;
  text-align: center;
  margin-right: 10%;
  :hover {
    background: #cccccc;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    margin-right: 0%;

    :hover {
      background: none;
    }
  }
`;
const Contents = styled.div`
  /* border: 1px solid black; */
  width: 16%;
  height: 60%;
  font-size: 1.7rem;
  background: none;
  text-align: center;
  margin-right: 10%;
  /* z-index: 999; */
  cursor: pointer;
  :hover {
    background: #cccccc;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    margin-right: 0%;
    :hover {
      background: none;
    }
  }
`;

const Comment = styled.div`
  /* border: 1px solid black; */
  width: 16%;
  height: 60%;
  font-size: 1.7rem;
  text-align: center;
  /* z-index: 999; */
  background: none;

  cursor: pointer;
  :hover {
    background: #cccccc;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    :hover {
      background: none;
    }
  }
`;

function MypageMenuBar({ setCurrentPage }) {
  const [currentClick, setCurrentClick] = useState("manage");
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    setCurrentPage(e.target.textContent);
  };

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "white";
      }
      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "black";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Box2>
        <Manage id="manage" onClick={GetClick}>
          manage
        </Manage>

        <Contents id="contents" onClick={GetClick}>
          contents
        </Contents>

        <Comment id="comment" onClick={GetClick}>
          comment
        </Comment>
      </Box2>
    </>
  );
}
export default MypageMenuBar;
