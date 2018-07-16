import passport from 'passport';
import User from './models/User';
import { Strategy as LocalStrategy } from 'passport-local';

const signUp = async (req, res) => {
    try {
        const { email, password, phone = '' } = req.body;
        const query = { email };
        const user = await User.findOne(query).exec();
        if (user) {
            res.status(403).json({ error: 'Email is already being used. Try again.' });
        } else {
            const newUser = phone 
                ? await User.create({ email, password, phone })
                : await User.create({ email, password });
            return res.status(201).json({ message: 'Account was successfully created.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong. Try again.' });
    }
}

export {
    signUp,
}
