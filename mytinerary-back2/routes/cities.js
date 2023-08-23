import express from 'express';
import create from '../controllers/cities/create.js';


let router = express.Router();

//CREATE
router.post('/', create )



export default router