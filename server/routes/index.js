import express from 'express';
import { asyncHandler } from '../middleware';
import * as auth from '../controllers/AuthenticationController';

const router = express.Router();

router.post('/signup', asyncHandler(auth.signUp));
router.post('/signin', auth.local, asyncHandler(auth.signIn));
router.get('/verify/:_id', asyncHandler(auth.verify));
router.post('/updatepassword', auth.jwt, asyncHandler(auth.updatePassword));
router.post('/resetpassword', asyncHandler(auth.resetPassword));
router.delete('/deactivate/:_id', auth.jwt, asyncHandler(auth.deactivateAccount));

export default router;
