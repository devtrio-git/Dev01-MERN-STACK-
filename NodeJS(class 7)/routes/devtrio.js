import express from 'express'
const router = express.Router()
import { devtrioContoller } from '../controller/devtrioController.js';
import myLogger from '../middlewares/logger-middleware.js';

// Router level Middleware
// router.use(myLogger)
// For Particular path
router.use('/devtrio',myLogger)



router.get('/devtrio', devtrioContoller)
router.get('/event', (req, res) => {
    res.send('Events')
})

export default router