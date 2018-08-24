import express from 'express';
import nextApp from 'next';
import { log } from './middleware/logger';
import { store, logger, passport, bodyParser, securityPolicy } from './middleware';
import config from './config';
import './passport';
import { viewRoute } from './utils';
import authRoutes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dir: './client', dev });
const port = process.env.PORT || config.dev.port;
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const view = viewRoute(server, app);

    /**
     * Middleware
     */
    server.use(store());
    server.use(logger());
    server.use(passport());
    server.use(bodyParser());
    server.use(securityPolicy());

    /**
     * API Routes
     */
    server.use('/api/v1/auth', authRoutes);

    /**
     * View Routes
     */
    view('/');
    view('/signin');
    view('/profile');

    server.get('*', (req, res) => handle(req, res));

    /**
     * Server Listen
     */
    server.listen(port, error => {
        if (error) throw error;
        log.info(`> Ready on http://localhost:${port}`);
    });
});
