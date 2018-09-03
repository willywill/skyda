import User from '../models/User';
import JWT from 'jsonwebtoken';
import { log } from '../middleware/logger';
import config from '../config';
import passport from 'passport';
import { sendVerifyMail, sendPasswordResetMail } from '../mail';
import { isNotEmpty } from '../utils';

const signToken = user => JWT.sign(user, config.auth.secret);

const authenticate = method => (req, res, next) => {
    const auth = (error, user) => {
        if (error) {
            log.info(`Error: ${error}`);
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

export const local = authenticate('local');
export const jwt = authenticate('jwt');

export const signUp = async ({ body }, res) => {
    try {
        const { firstName, lastName, email, password, phone = null } = body;
        const query = { email };
        const user = await User.findOne(query).exec();
        if (isNotEmpty(user)) {
            return res.status(403).json({ error: 'Email is already being used. Try again.' });
        } else {
            const newUser = await User.create({ firstName, lastName, email, password, phone });
            sendVerifyMail(newUser);
            return res.status(201).json({ message: 'Account was successfully created.' });
        }
    } catch (error) {
        log.debug(`Error signing up: ${error}`);
        return res.status(500).json({ error: 'Something went wrong. Try again.' });
    }
};

export const signIn = async ({ body: { email } }, res) => {
    const token = signToken(email);
    res.status(200).json({ token });
};

export const verify = async ({ params: { _id } }, res) => {
    try {
        const query = { _id };
        const update = { isVerified: true };
        const user = await User.findByIdAndUpdate(query, update).exec();
        if (isNotEmpty(user)) {
            return res.status(200).json({ message: 'Account successfully verified.' });
        } else {
            return res.status(404).send({ message: 'Something happened. Try again.' });
        }
    } catch (error) {
        log.info(`Error verifying account: ${error}`);
        return res.status(500).send({ error });
    }
};

export const updatePassword = async ({ body: { _id, newPassword } }, res) => {
    try {
        const query = { _id };
        const update = { password: newPassword };
        const user = await User.findByIdAndUpdate(query, update).exec();
        if (isNotEmpty(user)) {
            return res.status(200).json({ message: 'Password successfully changed.' });
        } else {
            return res.status(404).send({ error: 'Unable to update password. Try again.' });
        }
    } catch (error) {
        log.info(`Error updating password: ${error}`);
        return res.status(500).send({ error });
    }
};

export const resetPassword = async ({ body: { email } }, res) => {
    try {
        const query = { email };
        const user = await User.findOne(query).exec();
        if (isNotEmpty(user)) {
            await sendPasswordResetMail(user);
            return res.status(200).json({ message: 'Password reset email successfully sent.' });
        } else {
            return res.status(404).send({ error: 'No user with this email found.' });
        }
    } catch (error) {
        log.info(`Could not send the email: ${error}`);
        return res.status(500).send({ error });
    }
};

export const deactivateAccount = async ({ params: { _id } }, res) => {
    try {
        const query = { _id };
        await User.deleteOne(query).exec();
        return res.status(200).json({ message: 'Account successfully deactivated.' });
    } catch (error) {
        log.info(`Could not deactivate the account: ${error}`);
        return res.status(500).send({ error });
    }
};
