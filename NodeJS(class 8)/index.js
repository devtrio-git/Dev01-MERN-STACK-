import express from 'express';
import userRoutes from './routes/users.routes.js'
import productRoutes from './routes/products.routes.js'
import mongoose from 'mongoose';
// create an intence of express
const app = express();
//middleware
app.use(express.json());

mongoose.connect("mongodb+srv://devtrioteam:yU6D3S9Of5Ap4po3@cluster0.epqzfuz.mongodb.net/DevtrioDB")
.then(()=> console.log("MongoDB connected successfully..."))
.catch((e)=>console.log(e))

// create a simple route
app.get("/", (req, res)=>{
    res.send("Hello World By GET")
})


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})



// req.params --> /api/user/:id 
// req.query --> /api/user?gender=male --> req.query.gender

// req.body --> { "name" : "ashar" }