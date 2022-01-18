import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginModalOnAction, signupModalOnAction } from "../store/actions";

const Container = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 10vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px #adb5bd;
  /* border-bottom: 1px solid lightgray; */
  z-index: 99;
`;

const Img = styled.img`
  width: 13vw;
  margin-left: 1%;
`;

const Login = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Manage = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const Signup = styled.div`
  /* border: 1px solid red; */
  border-radius: 8px;
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Logout = styled.div`
  /* border: 1px solid red; */
  border-radius: 5px;
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  background: #008eff;
  color: white;
  position: relative;
  :hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Search = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;
const Guide = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  font-family: "Kfont";
  cursor: pointer;
  :hover {
    color: #008eff;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  /* border: 1px solid red; */
  justify-content: space-around;
  margin-right: 2%;
  width: 300px;
  font-family: "Kfont";
`;

function Header2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;
  const goToHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Img src="/로고.png" alt="" onClick={goToHome} />
      <BtnContainer>
        <Link style={{ textDecoration: "none", color: "black" }} to="/guide">
          <Guide>가이드</Guide>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/search">
          <Search>검색</Search>
        </Link>
        {isLogin ? (
          <Link style={{ textDecoration: "none", color: "black" }} to="/manage">
            <Manage>관리</Manage>
          </Link>
        ) : (
          <Login onClick={() => dispatch(loginModalOnAction)}>로그인</Login>
        )}
        {/* <Login onClick={() => dispatch(loginModalOnAction)}>로그인</Login> */}
        {isLogin ? (
          <Logout>로그아웃</Logout>
        ) : (
          <Signup onClick={() => dispatch(signupModalOnAction)}>
            회원가입
          </Signup>
        )}
        {/* <Signup onClick={() => dispatch(signupModalOnAction)}>회원가입</Signup> */}
      </BtnContainer>
    </Container>
  );
}

export default Header2;
