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

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(store());
app.use(logger());
app.use(passport());
app.use(bodyParser());
app.use(securityPolicy());

app.post('/api/v1/signin', asyncHandler(async (req, res) => {
    res.send({ message: 'You hit the signin endpoint!' });
}));

app.listen(port, () => console.log(`Server started on port ${port}`));
