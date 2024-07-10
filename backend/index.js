import express from "express";
import cors from "cors";
import "./config.js";
import { connectdb } from "./config/db.js";
import { authrouter } from "./routes/authrouter.js";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/crud", authrouter);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running ");
  });
});
