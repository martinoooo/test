import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from '../config';

import User from '../models/user'; 
import authenticate from '../middlewares/authenticate'

let router = express.Router();

router.post('/',authenticate,(req,res) => {
	res.status(201).json({success:true})
});

export default router;