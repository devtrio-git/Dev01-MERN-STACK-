import express from 'express';
import Posts from '../controllers/post.controller.js';


const router = express.Router();

router.post('/create', Posts.create)
router.get('/all', Posts.all)
router.get('/get/:id', Posts.getById)
router.put('/update/:id', Posts.update)
router.patch('/update-one/:id', Posts.updateOne)
router.delete('/remove/:id', Posts.remove)


export default router;