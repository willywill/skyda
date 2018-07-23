import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true }
);

const saltAndHashPassword = async (user, next) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        next(error);
    }
};

const saltAndHashPasswordIfModified = async (user, next) => {
    if (!user.password && !user.isModified('password')) {
        return next();
    }

    await saltAndHashPassword(user, next);

    return next();
};

// TODO: Replace next calls with returned promises - http://mongoosejs.com/docs/middleware.html
userSchema.pre('save', async function (next) {
    return saltAndHashPasswordIfModified(this, next);
});

userSchema.pre('findOneAndUpdate', async function (next) {
    return saltAndHashPasswordIfModified(this._update, next);
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
