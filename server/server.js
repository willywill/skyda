import express from 'express';
import bodyParser from 'body-parser';
import { store, asyncHandler, logger } from './middleware';

import config from './config';

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(bodyParser.json());
app.use(store());
app.use(logger());

app.post('/api/v1/signin', asyncHandler(async (req, res) => {
    res.send(req.body);
}));

app.listen(port, () => console.log(`Server started on port ${port}`));
