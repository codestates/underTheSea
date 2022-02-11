import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  LOG_IN_MODAL_ON,
  LOG_OUT_MODAL_ON,
  SIGN_UP_MODAL_ON,
  SIGN_OUT,
  SIGN_OUT_MODAL_ON,
  SKIMMER_INFO_MODAL_ON,
  SEA_BASIC_INFO_MODAL_ON,
  FILTER_MEDIA_MODAL_ON,
  ACTIVATION_MODAL_ON,
  MY_AQUARIUM_INFO_MODAL_ON,
  FEEDING_INPUT_MODAL_ON,
  ADDFISH_MODAL_ON,
  DEADFISH_MODAL_ON,
  RECOMMENDINFO_MODAL_ON,
  CONTAINER_CARD_INFO_SHOW,
  EXCHANGEWATER_MODAL_ON,
  WSDINFO_MODAL_ON,
  HELP_MODAL_ON,
  ADD_CONTAINER_MODAL_ON,
  LYMPHO_MODAL_ON,
  WORD_MODAL_ON,
  LEVEL_UP_MODAL_ON,
  MODAL_OFF,
  PWD_MODAL_ON,
  HTM_MODAL_ON,
} from "./actionTypes";
import axios from "axios";
// import coninfoApi from "../../../api/getConinfo";

export const loginAction = {
  type: LOG_IN,
};
export const logoutAction = {
  type: LOG_OUT,
};
export const loginModalOnAction = {
  type: LOG_IN_MODAL_ON,
};
export const signupModalOnAction = {
  type: SIGN_UP_MODAL_ON,
};
export const signoutAction = {
  type: SIGN_OUT,
};
export const signoutModalAction = {
  type: SIGN_OUT_MODAL_ON,
};
export const pwdModalAction = {
  type: PWD_MODAL_ON,
};
export const lymphoModalOnAction = {
  type: LYMPHO_MODAL_ON,
};
export const modalOff = {
  type: MODAL_OFF,
};
export const skimmerInfoModalOnAction = {
  type: SKIMMER_INFO_MODAL_ON,
};
export const seaBasicInfoModalOnAction = {
  type: SEA_BASIC_INFO_MODAL_ON,
};
export const filterMediaModalOnAction = {
  type: FILTER_MEDIA_MODAL_ON,
};
export const activationModalOnAction = {
  type: ACTIVATION_MODAL_ON,
};
export const myAquariumInfoModalOnAction = {
  type: MY_AQUARIUM_INFO_MODAL_ON,
};
export const feedingInputModalOnAction = {
  type: FEEDING_INPUT_MODAL_ON,
};
export const recommendInfoModalOnAction = {
  type: RECOMMENDINFO_MODAL_ON,
};
export const exchangeWaterModalOnAction = {
  type: EXCHANGEWATER_MODAL_ON,
};
export const wsdInfoModalOnAction = {
  type: WSDINFO_MODAL_ON,
};
export const helpInfoModalOnAction = {
  type: HELP_MODAL_ON,
};
export const htmModalOnAction = {
  type: HTM_MODAL_ON,
};
export const addcontainerModalOnAction = {
  type: ADD_CONTAINER_MODAL_ON,
};
export const logoutModalOnAction = {
  type: LOG_OUT_MODAL_ON,
};
export const signupAction = {
  type: SIGN_UP,
};
export const levelupModalOnAction = {
  type: LEVEL_UP_MODAL_ON,
};
export const addfishModalOnAction = {
  type: ADDFISH_MODAL_ON,
};
export const deadfishModalOnAction = {
  type: DEADFISH_MODAL_ON,
};
export const wordModalOnAction = {
  type: WORD_MODAL_ON,
};
// export const getContainerInfoAction = async () => {
//   const conInfo = await coninfoApi();
//   return {
//     type: GET_CONTAINER_INFO,
//     payload: conInfo.data,
//   };
// };
export const containerCardInfoShowAction = (data) => ({
  type: CONTAINER_CARD_INFO_SHOW,
  payload: {
    ...data,
  },
});
