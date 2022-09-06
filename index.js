//modules and globals
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");
const { Project } = require('./models/project')

//middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//MONGO URI

const mongoURI =
  "MONGO_URI=mongodb+srv://Mnewsholme:AhQR9zAin8nJFsiJ@cluster0.i2kxvgb.mongodb.net/test";

//MONGO CONNECTION
const conn = mongoose.createConnection(mongoURI);

//init gfs
let gfs;

conn.once("open", () => {
  //init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

//create storage engine
//returns a promise
//using cyrpto.random method to generate a name(generates long string/ 16 characters)
//if error, uses promise rejector
//if no error, creates file name w/ extension.
//bucket name matches collection name
//resolve promise with fileInfo
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

//import router
app.use("/projects", require("./controllers/projects_controller.js"));

//route post/upload
//uploads photo to db
app.post("/uploads", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
  //res.redirect('/');
});

const port = 3000;

app.listen(process.env.port, () => console.log(`Hammering on port ${port}`));

module.exports.Project = require("./models/project.js");
