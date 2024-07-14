import express from 'express';
import userRoutes from './routes/users.routes.js'
import productRoutes from './routes/products.routes.js'
// create an intence of express
const app = express();
//middleware
app.use(express.json());



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