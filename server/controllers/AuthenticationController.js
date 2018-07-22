import User from '../models/User';
import JWT from 'jsonwebtoken';
import { log } from '../middleware/logger';
import config from '../config';
import passport from 'passport';
import { sendVerifyMail, sendPasswordResetMail } from '../mail';
import { isNotEmpty } from '../utils';

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
const authJWT = authenticate('jwt');

const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone = null } = req.body;
        const query = { email };
        const user = await User.findOne(query).exec();
        if (isNotEmpty(user)) {
            return res.status(403).json({ error: 'Email is already being used. Try again.' });
        } else {
            const newUser = await User.create({ firstName, lastName, email, password, phone });
            await sendVerifyMail(newUser);
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

const verify = async ({ params }, res) => {
    try {
        const { _id } = params;
        const query = { _id };
        const update = { isVerified: true };
        const user = await User.findByIdAndUpdate(query, update).exec();
        if (isNotEmpty(user)) {
            return res.status(200).json({ message: 'Account successfully verified.' });
        } else {
            return res.status(401).send({ message: 'Something happened. Try again.' });
        }
    } catch (error) {
        log.info(error);
        return res.status(500).send({ error });
    }
};

const updatePassword = async ({ body: { _id, newPassword } }, res) => {
    try {
        const query = { _id };
        const update = { password: newPassword };
        const user = await User.findByIdAndUpdate(query, update).exec();
        if (isNotEmpty(user)) {
            return res.status(200).json({ message: 'Password successfully changed.' });
        } else {
            return res.status(401).send({ error: 'Unable to update password. Try again.' });
        }
    } catch (error) {
        log.info(error);
        return res.status(500).send({ error });
    }
};

const resetPassword = async ({ body: { email } }, res) => {
    try {
        const query = { email };
        const user = await User.findOne(query).exec();
        if (isNotEmpty(user)) {
            await sendPasswordResetMail(user);
            return res.status(200).json({ message: 'Password reset email successfully sent.' });
        } else {
            return res.status(401).send({ error: 'No user with this email found.' });
        }
    } catch (error) {
        log.info(`Could not send the email: ${error}`);
        return res.status(500).send({ error });
    }
};

export {
    verify,
    signUp,
    signIn,
    authLocal,
    authJWT,
    updatePassword,
    resetPassword,
};
