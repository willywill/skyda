import mongoose from 'mongoose';
import config from '../config';

const db = config.db.url;

const store = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log('Successfully connected to the database');
        return (req, res, next) => next();
    } catch (error) {
        console.log(error);
    }
};

export default store;
