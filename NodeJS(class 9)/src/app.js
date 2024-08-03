import express from 'express';
import Constants from './constant.js';
import connectDb from './db/db.connect.js';
import postRoutes from './routes/post.router.js';


const app = express();
const port = Constants.PORT;

app.use(express.json());
connectDb(Constants.URI)
app.use('/post', postRoutes);

app.listen(port, () => {
    console.log(`Server listening on PORT http://localhost:${port}`);

})