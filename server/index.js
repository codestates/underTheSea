require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const http = require("http");
const db = require("./db/connection");
const indexRouter = require("./routes");

const port = 80;

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, getFileStream } = require("./s3");
const app = express();
const httpServer = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://d1vxn99hda5rup.cloudfront.net",
      "https://underthesea.gq",
      "https://www.underthesea.gq",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);
app.use(cookieParser());

app.get("/", function (req, res) {
  res.status(200).send("hello world!!!!!!!!!!!");
});

app.get("/status", (req, res) => {
  db.query("use uts", (err) => {
    if (err) {
      return res.status(400).send("DB Not Connected");
    }
    return res.status(200).send("DB connected!!!!!");
  });
});

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});
app.get("/addfishinfo", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/addfishinfo.html"));
});

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;

  const result = await uploadFile(file);
  await unlinkFile(file.path);
  res.send({ imagePath: `/images/${result.Key}` });
});

app.get("/level/:level_id", (req, res) => {
  const level_id = req.params.level_id;
  res.sendFile(`./level_imgs/${level_id}.png`, { root: __dirname });
});
app.use("/", indexRouter);

httpServer.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});

module.exports = httpServer;
