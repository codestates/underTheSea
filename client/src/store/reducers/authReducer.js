import { LOG_IN, LOG_OUT, SIGN_OUT } from "../actions/actionTypes";

const userInfoState = {
  isLogin: false,
  email: "",
  image: "",
};

const authReducer = (prevState = userInfoState, action) => {
  let state;
  switch (action.type) {
    case LOG_IN:
      state = {
        ...prevState,
        isLogin: true,
      };
      break;
    case LOG_OUT:
      state = {
        ...userInfoState,
        isLogin: false,
      };
      break;
    case SIGN_OUT:
      state = { ...userInfoState };
      break;
    default:
      state = { ...prevState };
  }
  return state;
};

export default authReducer;
