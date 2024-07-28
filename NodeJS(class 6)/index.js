import express from 'express';
import webPageRoutes from './routes/web-page.router.js';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs')
app.use(express.static(path.join(process.cwd(), 'public')))
app.use('/', webPageRoutes)

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})