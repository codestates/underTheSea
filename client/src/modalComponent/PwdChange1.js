import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { modalOff } from "../store/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  height: 55%;
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

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 75%;
  }
`;

const CloseBtnContainer = styled.button`
  z-index: 999;
  position: absolute;
  right: 3%;
  top: 0%;
  width: 12%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  z-index: 999;
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

//성공메세지=======================================================================

const PwdSuccess = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid red; */
`;
const PwdSuccessText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Kfont";
  margin-top: 20%;
`;
const CloseBtn = styled.button`
  width: 100%;
  height: 18%;
  margin-bottom: 20%;
  background: #108dee;
  border-style: none;
  padding: 3%;
  border-radius: 4px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
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
//비밀번호 창 =======================================================================

const TextForm = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  top: 5%;

  @media screen and (max-width: 480px) {
    top: 0%;
  }
`;
const Text = styled.div`
  position: relative;
  font-family: "Kfont";
  font-size: 1.1rem;
  font-weight: 600;
`;

const NewPwd = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 480px) {
    top: -5%;
  }
`;
const CurPwd1 = styled.input`
  margin-top: 9%;
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10%;
  z-index: 100;
  @media screen and (max-width: 480px) {
    position: relative;
    top: -5%;
  }
`;
const NewPwd1 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  margin-bottom: 2%;
  box-sizing: border-box;
  z-index: 100;
  @media screen and (max-width: 480px) {
    position: relative;
    top: -3%;
  }
`;
const NewPwd2 = styled.input`
  width: calc(100%-10px);
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 2%;
  z-index: 100;
  @media screen and (max-width: 480px) {
    position: relative;
    top: 0%;
    margin-top: 4%;
  }
`;
const Warning = styled.div`
  width: calc(100%-10px);
  height: 7%;
  font-size: 0.5rem;
  color: red;
  position: relative;
  bottom: 14%;
  padding-left: 2%;

  @media screen and (max-width: 480px) {
    /* border: 1px solid black; */
    line-height: 120%;
    height: 10%;
    top: 0%;
    padding-left: 2%;
    margin: 0%;
  }
`;
const Warning1 = styled.div`
  width: calc(100%-10px);
  height: 15%;
  font-size: 0.5rem;
  color: red;
  position: relative;
  bottom: 80%;
  padding-left: 2%;

  @media screen and (max-width: 480px) {
    border: 1px solid black;
    bottom: 55%;
  }
`;

const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  flex-direction: column;
  position: absolute;
  top: 80%;
  justify-content: space-between;
`;

const ConfirmBtn = styled.button`
  z-index: 999;
  width: 100%;
  height: 50%;
  background: #0474e8;
  color: white;
  font-family: "Kfont";
  border-style: none;
  border-radius: 4px;
  font-weight: bold;
  position: relative;
  font-size: 1.3rem;
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

  @media screen and (max-width: 480px) {
    margin-top: 10%;
    height: 60%;
    font-size: 1rem;
    padding: 0.2em 0 0.2em;
  }
`;
//=======================================================================

function PwdChange({ handleOff }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  //비밀번호 저장
  const [currentPwd, setCurrentPwd] = useState({
    cur_pwd: "",
    new_pwd: "",
    verifyPassword: "",
  });
  //상태 변경
  const [password, setPassword] = useState(false);
  //에러메세지
  const [errorMsg, setErrorMsg] = useState("");
  //새로운 비밀번호 = 새로운 비밀번호 확인
  const onChangePasswordChk = () =>
    currentPwd.new_pwd === currentPwd.verifyPassword;

  //유효성
  const checkPassword = (new_pwd) => {
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; //대문자, 소문자, 숫자로 이루어진 10자 이하
    return regExp.test(new_pwd);
  };
  const checkPassword2 = (new_pwd) => {
    let regExp2 = /[a-zA-Z0-9]/;
    return regExp2.test(new_pwd);
  };
  //------------------------------------------------------------------------------------

  const handleInputValue = (key) => (e) => {
    setCurrentPwd({ ...currentPwd, [key]: e.target.value });
  };
  //------------------------------------------------------------------------------------

  const fixPasswordHandler = () => {
    const accessToken = localStorage.getItem("accessToken");
    const { cur_pwd, new_pwd, verifyPassword } = currentPwd;
    //재확인
    if (!cur_pwd || !new_pwd || !verifyPassword) {
      setErrorMsg("비밀번호를 확인해주세요");
    } else if (!checkPassword(new_pwd) || !onChangePasswordChk()) {
      setErrorMsg("올바른 정보를 입력해주세요");
    } else {
      setErrorMsg("");
      if (!accessToken) {
        return;
      } else {
        axios
          .patch(
            `${process.env.REACT_APP_SERVER_API}/user/password`,
            {
              data: { cur_pwd, new_pwd },
            },
            {
              headers: { authorization: `Bearer ${accessToken}` },
              withCredentials: true,
            }
          )
          .then(() => {
            setPassword(true);
            navigate("/mypage");
          })
          .catch((err) => {
            setErrorMsg("비밀번호를 확인해주세요.");
            console.log(err);
          });
      }
    }
  };
  //------------------------------------------------------------------------------------
  // useEffect(() => {
  //   setMessage({
  //     ...message,
  //     password:
  //       currentPwd.new_pwd.length >= 8
  //         ? checkPassword(currentPwd.new_pwd)
  //           ? "사용할 수 있는 비밀번호 입니다."
  //           : "비밀번호는 영문, 숫자 조합이어야 합니다."
  //         : "비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.",
  //     verifyPassword:
  //       currentPwd.verifyPassword.length >= currentPwd.new_pwd.length &&
  //       currentPwd.verifyPassword.length >= 8
  //         ? currentPwd.verifyPassword === currentPwd.new_pwd
  //           ? "비밀번호가 일치합니다."
  //           : "비밀번호가 불일치합니다."
  //         : "비밀번호를 확인해주세요.",
  //   });
  //   setValidation({
  //     ...validation,
  //     password: checkPassword(currentPwd.new_pwd),
  //     verifyPassword: currentPwd.new_pwd === currentPwd.verifyPassword,
  //   });
  // }, [currentPwd]);

  return (
    <DarkBackGround>
      <ModalContainer>
        <CloseBtnContainer>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            type="button"
            color="#e5e5e5"
            onClick={handleOff}
          />
        </CloseBtnContainer>
        <Form>
          <TextForm>
            <Text>비밀번호 변경</Text>
          </TextForm>
          {password ? (
            <PwdSuccess>
              <PwdSuccessText>
                비밀번호가 변경되었습니다.<br></br>닫기를 눌러주세요.
              </PwdSuccessText>
              <CloseBtn onClick={handleOff}>닫기</CloseBtn>
            </PwdSuccess>
          ) : (
            <NewPwd>
              <CurPwd1
                placeholder="현재 비밀번호"
                type="password"
                onChange={handleInputValue("cur_pwd")}
              />
              <NewPwd1
                placeholder="새 비밀번호"
                type="password"
                autoComplete="on"
                onChange={handleInputValue("new_pwd")}
              />
              {!currentPwd.new_pwd ? (
                <Warning>
                  비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.
                  {/* currentPwd.new_pwd.length >= 8  */}
                </Warning>
              ) : currentPwd.new_pwd.length >= 8 &&
                checkPassword(currentPwd.new_pwd) &&
                checkPassword2(currentPwd.new_pwd) ? (
                <Warning>사용할 수 있는 비밀번호 입니다.</Warning>
              ) : (
                <Warning>사용할 수 없는 비밀번호 입니다.</Warning>
              )}
              <NewPwd2
                placeholder="새 비밀번호 확인"
                type="password"
                required
                autoComplete="on"
                onChange={handleInputValue("verifyPassword")}
              />
              {onChangePasswordChk() || !currentPwd.verifyPassword ? (
                <Warning className="pwd-txt">비밀번호가 일치합니다.</Warning>
              ) : (
                <Warning>비밀번호가 일치하지 않습니다.</Warning>
              )}

              <Btn>
                <ConfirmBtn type="button" onClick={fixPasswordHandler}>
                  확인
                </ConfirmBtn>
                <Warning1>{errorMsg}</Warning1>
              </Btn>
            </NewPwd>
          )}
        </Form>
      </ModalContainer>
    </DarkBackGround>
  );
}

export default PwdChange;
