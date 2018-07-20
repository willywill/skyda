import express from 'express';
import {
    store,
    logger,
    passport,
    bodyParser,
    asyncHandler,
    securityPolicy,
} from './middleware';

import config from './config';
import { signUp } from './controllers/AuthenticationController';
import { log } from './middleware/logger';

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(store());
app.use(logger());
app.use(passport());
app.use(bodyParser());
app.use(securityPolicy());

app.post('/api/v1/auth/signup', asyncHandler(signUp));

app.listen(port, () => log.info(`Server started on port ${port}`));
