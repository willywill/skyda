import User from '../models/User';
import JWT from 'jsonwebtoken';
import { log } from '../middleware/logger';
import config from '../config';
import passport from 'passport';

const signToken = user => JWT.sign(user, config.auth.secret, { expiresIn: '7d' });

const authenticate = method => (req, res, next) => {
    const auth = (error, user) => {
        if (error) {
            log.error(error);
            return res.status(400).json({ error });
        } else if (!user) {
            return res.status(401).json({ error: 'You are unauthorized to access this resource.' });
        } else {
            req.user = user;
            return next();
        }
    };

    return passport.authenticate(method, { session: false }, auth)(req, res, next);
};

const authLocal = authenticate('local');

const signUp = async (req, res) => {
    try {
        const { email, password, phone = '' } = req.body;
        const query = { email };
        const user = await User.findOne(query).exec();
        if (user) {
            return res.status(403).json({ error: 'Email is already being used. Try again.' });
        } else {
            await User.create({ email, password, phone });
            return res.status(201).json({ message: 'Account was successfully created.' });
        }
    } catch (error) {
        log.debug(error);
        return res.status(500).json({ error: 'Something went wrong. Try again.' });
    }
};

const signIn = async ({ body }, res) => {
    const token = signToken(body);
    res.status(200).json({ token });
};

export {
    signUp,
    signIn,
    authLocal,
};
