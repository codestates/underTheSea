module.exports = {
  addfishinfo: require("./admin/addfishinfo"),
  deletefishinfo: require("./admin/deletefishinfo"),
  editfishinfo: require("./admin/editfishinfo"),
  addcon: require("./container/addcon"),
  addfish: require("./container/addfish"),
  deletefish: require("./container/deletefish"),
  coninfo: require("./container/coninfo"),
  deletecon: require("./container/deletecon"),
  editcon: require("./container/editcon"),
  feed: require("./container/feed"),
  level: require("./container/level"),
  water: require("./container/water"),
  allcontainer: require("./container/all"),
  fishinfo: require("./fish/fishinfo"),
  allfishinfo: require("./fish/allfishinfo"),
  exactfishinfo: require("./fish/exactfishinfo"),
  fishnamelist: require("./fish/fishnamelist"),
  addcomment: require("./comment/addcomment"),
  tipscomment: require("./comment/tipscomment"),
  addtip: require("./tip/addtip"),
  alltips: require("./tip/alltips"),
  deletecommnet: require("./comment/deletecomment"),
  deletetip: require("./tip/deletetip"),
  edittip: require("./tip/edittip"),
  selectedtip: require("./tip/selectedtip"),
  editpwd: require("./user/editpwd"),
  login: require("./user/login"),
  logout: require("./user/logout"),
  signout: require("./user/signout"),
  signup: require("./user/signup"),
  usermanage: require("./user/usermanage"),
  usertips: require("./user/usertips"),
  usercomments: require("./user/usercomments"),
  commentinfo: require("./comment/commentinfo"),
  authgoogle: require("./user/authgoogle"),
  googlecallback: require("./user/googlecallback"),
  authkakako: require("./user/authkakao"),
  kakaocallback: require("./user/kakaocallback"),
};
