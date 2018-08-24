import express from 'express';
import { log } from './middleware/logger';
import {
    store,
    logger,
    passport,
    bodyParser,
    securityPolicy,
} from './middleware';
import config from './config';
import './passport';
import './routes';

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(store());
app.use(logger());
app.use(passport());
app.use(bodyParser());
app.use(securityPolicy());

app.listen(port, error => {
    if (error) throw error;
    log.info(`Server started on port ${port}`);
});
