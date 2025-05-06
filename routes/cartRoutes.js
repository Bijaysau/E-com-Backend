import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cart.controller.js";
import authUser from "../middleware/auth.js";

const carRouter = express.Router();

carRouter.post("/get", authUser, getUserCart);
carRouter.post("/add", authUser, addToCart);
carRouter.post("/update", authUser, updateCart);

export default carRouter;
