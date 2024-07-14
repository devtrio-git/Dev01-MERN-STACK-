import express from "express";
import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));

const router = express.Router();

router.get("/all", (req, res)=>{
    res.send(data.products)
})

router.get("/:id",(req,res)=>{
    const products = data.products.find(item => item.id == req.params.id)
    res.send(products)
})

router.post("/add", (req, res)=> {
    try {
        let payload = req.body;
        data.products.push(payload)
        res.status(201).json({success: true, data: data, message: "Product Add Successfull"})

    } catch (error) {
        res.send("error")
    } 
})

export default router