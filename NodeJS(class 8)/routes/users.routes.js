import express from "express";
import { getAllUsers, getUser, getUserByGender, addUser,updateUser, SaveUser } from "../controller/users.controller.js";
const router = express.Router();

router.get("/all", getAllUsers )
router.get("/user/:id", getUser )
router.get("/byGender", getUserByGender)
router.post("/addUser", addUser)
router.put("/edit/:id", updateUser)
// save data in mongoDb
router.post("/save", SaveUser)

export default router