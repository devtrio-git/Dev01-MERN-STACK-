import express from 'express';
import WebPageController from '../controllers/web-page.controller.js';

const router = express.Router();

router.get('/', WebPageController.getHome)
router.get('/about', WebPageController.getAbout)


export default router;

