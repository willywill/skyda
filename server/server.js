import express from 'express';
import { log } from './middleware/logger';
import { signUp, signIn, authLocal, verify, resetPassword, authJWT, updatePassword } from './controllers/AuthenticationController';
import {
    store,
    logger,
    passport,
    bodyParser,
    asyncHandler,
    securityPolicy,
} from './middleware';
import config from './config';
import './passport';

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(store());
app.use(logger());
app.use(passport());
app.use(bodyParser());
app.use(securityPolicy());

app.post('/api/v1/auth/signup', asyncHandler(signUp));
app.post('/api/v1/auth/signin', authLocal, asyncHandler(signIn));
app.get('/api/v1/auth/verify/:_id', asyncHandler(verify));
app.post('/api/v1/auth/changepassword', authJWT, asyncHandler(updatePassword));
app.post('/api/v1/auth/resetpassword', asyncHandler(resetPassword));

app.listen(port, () => log.info(`Server started on port ${port}`));
