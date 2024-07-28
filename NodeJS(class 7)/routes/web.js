import express from 'express';
const router = express.Router();
import { homeController } from '../controller/homeController.js';
import { aboutController } from '../controller/aboutController.js';



router.get('/', homeController)
router.get('/about', aboutController)
router.get('/about/22', (req, res) => {
    res.send('/about/22')
})


export default router