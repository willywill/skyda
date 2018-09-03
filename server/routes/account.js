import express from 'express';
import { asyncHandler } from '../middleware';
import * as auth from '../controllers/AuthenticationController';
import * as account from '../controllers/AccountController';

const router = express.Router();

router.post('/myaccount', auth.jwt, asyncHandler(account.getUserInfo));

export default router;
