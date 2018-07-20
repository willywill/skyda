import User from '../models/User';

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
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong. Try again.' });
    }
};

export {
    signUp,
};
