import express from 'express';
import { log } from './middleware/logger';
import * as auth from './controllers/AuthenticationController';
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

app.post('/api/v1/auth/signup', asyncHandler(auth.signUp));
app.post('/api/v1/auth/signin', auth.local, asyncHandler(auth.signIn));
app.get('/api/v1/auth/verify/:_id', asyncHandler(auth.verify));
app.post('/api/v1/auth/updatepassword', auth.jwt, asyncHandler(auth.updatePassword));
app.post('/api/v1/auth/resetpassword', asyncHandler(auth.resetPassword));
app.delete('/api/v1/auth/deactivate/:_id', auth.jwt, asyncHandler(auth.deactivateAccount));

app.listen(port, () => log.info(`Server started on port ${port}`));
