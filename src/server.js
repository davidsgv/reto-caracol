const express = require("express");
require("dotenv").config();
//const cors = require("cors");

const caracolRouter = require("./routes/caracol");

const app = express();
//app.use(cors());
//app.use(express.json());

app.use("/api/caracol", caracolRouter);
//app.use("/api/materias", jwtMiddleware, materiaRouter);
//app.use("/api/auth", authRouter);

module.exports = app;