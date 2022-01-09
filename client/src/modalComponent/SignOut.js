import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// 1.7 송다영 1차 회원탈퇴 설정 (리덕스로 상태 관리 예정)

const DarkBackGround = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  z-index: 999;
  width: 25%;
  height: 40%;
  background: white;
  flex-direction: column;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 999;
  border-radius: 20px;
`;
const CloseBtnContainer = styled.div`
  z-index: 999;
  position: absolute;
  right: 3%;
  top: 0%;
  width: 12%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Form = styled.form`
  z-index: 999;
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextForm = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  top: 22%;
`;
const Text = styled.div`
  position: relative;
  line-height: 170%;
  font-family: "Kfont";
  font-size: 1.2rem;
  font-weight: 600;
`;
const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: row;
  position: absolute;
  top: 80%;
  justify-content: space-between;
`;
const CancleBtn = styled.button`
  z-index: 999;
  width: 45%;
  height: 90%;
  background: #e1e1e1;
  color: black;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.07);
  }
`;
const SignOutBtn = styled.button`
  z-index: 999;
  width: 45%;
  height: 90%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  :hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`;
//=======================================================================


function SignOut({ accessToken }) {
  const navigate = useNavigate();
  function signOut() {
    axios
      .delete("http://localhost:80/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        navigate("/");
      });
  }


  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>
              정말로 탈퇴하시나요? <br></br> 탈퇴시 유저 정보가 모두 삭제됩니다.
            </Text>
          </TextForm>
          <Btn>
            <CancleBtn type="button" onClick={closeModal}>
              아니요. 취소합니다.
            </CancleBtn>
            <SignOutBtn type="button">네. 탈퇴합니다.</SignOutBtn>
          </Btn>
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default SignOut;
