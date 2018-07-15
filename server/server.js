import express from 'express';
import bodyParser from 'body-parser';
import { store } from './middleware';

import config from './config';

const app = express();
const port = process.env.PORT || config.dev.port;

app.use(bodyParser.json());
app.use(store());

app.listen(port, () => console.log(`Server started on port ${port}`));
