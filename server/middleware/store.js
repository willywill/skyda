import mongoose from 'mongoose';
import config from '../config';

const db = config.db.url;

const store = () => {
    try {
        mongoose
            .connect(db, { useNewUrlParser: true })
            .then(() => console.log('Successfully connected to the database'))
            .catch((err) => console.log(err));
    } finally {
        return (req, res, next) => next();
    }
};

export default store;
