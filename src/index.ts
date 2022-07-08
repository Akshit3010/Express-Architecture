import express from "express";
import { authRouter } from "./routes/auth.routes";
import mongoose from "mongoose";
import config from "config";

const url: string = config.get("db.url");
mongoose.connect(url);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("Hello"));

app.listen(8080, () => {
  console.log("server started on http://localhost:8080/");
});
