import express from 'express';
import { asyncHandler } from '../middleware';
import * as auth from './controllers/AuthenticationController';

const router = express.Router();

router.post('/api/v1/auth/signup', asyncHandler(auth.signUp));
router.post('/api/v1/auth/signin', auth.local, asyncHandler(auth.signIn));
router.get('/api/v1/auth/verify/:_id', asyncHandler(auth.verify));
router.post('/api/v1/auth/updatepassword', auth.jwt, asyncHandler(auth.updatePassword));
router.post('/api/v1/auth/resetpassword', asyncHandler(auth.resetPassword));
router.delete('/api/v1/auth/deactivate/:_id', auth.jwt, asyncHandler(auth.deactivateAccount));
