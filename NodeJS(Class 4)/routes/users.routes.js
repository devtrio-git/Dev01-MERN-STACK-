import express from "express";
import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));

const router = express.Router();

router.get("/all", (req, res)=>{
    res.send(data.users)
})

router.get("/:id",(req,res)=>{
    const users = data.users.find(item => item.id == req.params.id)
    res.send(users)
})

export default router