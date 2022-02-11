import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faBullseye,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

const TipContainer = styled.div`
  position: relative;
  width: 95%;
  height: 60px;
  display: flex;
  margin-bottom: 1px;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  align-items: center;
  &:hover {
    background-color: #f7f7f4;
    color: black;
  }
`;

const TipTitle = styled.div`
  position: relative;
  //   z-index: 1;
  flex: 6;
  width: 90%;
  height: 50%;
  margin-top: 5px;
  /* border: 1px solid red; */
  align-items: center;
  font-family: "Kfont";
  box-sizing: border-box;
`;

const TipWriter = styled.div`
  flex: 2;
  width: 90%;
  height: 50%;
  margin-top: 5px;
  font-size: 0.9rem;
  /* border: 1px solid black; */
  font-family: "Kfont";
  box-sizing: border-box;
`;

const TipDate = styled.div`
  flex: 2;
  width: 90%;
  height: 50%;
  margin-top: 7px;
  font-size: 0.8rem;
  color: #808080;
  /* border: 1px solid black; */
  font-family: "Kfont";
  text-align: center;
  box-sizing: border-box;
`;

function TipList({ tip_id, tip }) {
  const navigate = useNavigate();
  const date = tip.created_at.split("T")[0];
  //   console.log(tip.tip_id);

  // 게시물 선택&조회
  const handleSelectTip = (e) => {
    navigate(`/posttips/${tip_id}`);
  };

  return (
    <>
      <TipContainer>
        <div style={{ flex: "0.5", alignItems: "center" }}>
          <FontAwesomeIcon
            size="1x"
            icon={faFish}
            color="#828282"
          ></FontAwesomeIcon>
        </div>

        <TipTitle id={tip_id} onClick={handleSelectTip}>
          {tip.title}
        </TipTitle>
        <TipWriter>{tip.user_name}</TipWriter>
        <TipDate>{date}</TipDate>
      </TipContainer>
    </>
  );
}

export default TipList;
