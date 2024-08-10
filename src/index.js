import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/index.js";


dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());

const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use("/", router());




