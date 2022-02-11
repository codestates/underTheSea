const controllers = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post("/logout", controllers.logout);
router.delete("/", controllers.signout);
router.get("/manage/:page_num", controllers.usermanage);
router.get("/tips/:page_num", controllers.usertips);
router.get("/comments/:page_num", controllers.usercomments);
router.patch("/password", controllers.editpwd);
router.get("/auth/google", controllers.authgoogle);
router.post("/auth/google/callback", controllers.googlecallback);
router.get("/auth/kakao", controllers.authkakako);
router.post("/auth/kakao/callback", controllers.kakaocallback);
router.get("/status", controllers.checkstatus);

module.exports = router;
