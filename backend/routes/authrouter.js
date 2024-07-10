import express from "express";
const authrouter = express.Router();
import {
  getalluser,
  createuser,
  getsingleuser,
  updatedetails,
  deletedetails,
} from "../controllers/user-controller.js";

authrouter.route("/allusers").get(getalluser);
authrouter.route("/createuser").post(createuser);
authrouter.route("/singleuser/:id").get(getsingleuser);

// update
authrouter.route("/user/:id").put(updatedetails);

//delete
authrouter.route("/user/:id").delete(deletedetails);

export { authrouter };
