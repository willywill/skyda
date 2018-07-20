import mongoose from 'mongoose';
import config from '../config';
import { log } from './logger';

const db = config.db.url;

const store = () => {
    try {
        mongoose.connect(db, { useNewUrlParser: true })
            .then(() => log.info('Successfully connected to the database'));

        return (req, res, next) => next();
    } catch (error) {
        log.error(error);
    }
};

export default store;
