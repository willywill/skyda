import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from './models';
import { log } from './middleware/logger';
import config from './config';

const returnObject = (done) => ({ data, error = null }) => done(error, data);

const localOptions = {
    usernameField: 'email',
    passwordField: 'password',
};

const verifyLocalStrategy = async (email, password, done) => {
    const responseSend = returnObject(done);
    try {
        const query = { email };
        const user = await User.findOne(query).exec();
        const isMatch = await user.comparePassword(password);
        return isMatch
            ? responseSend({ data: user })
            : responseSend({ error: 'Incorrect Email or Password' });
    } catch (error) {
        log.error(error);
        responseSend({ error });
    }
};

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret,
};

const verifyJwtStrategy = async (payload, done) => {
    const responseSend = returnObject(done);
    if (payload.expires > Date.now()) {
        return responseSend({ error: 'Token has expired' });
    }

    log.info(`Payload: ${payload}`);
    return responseSend({ data: payload });
};

const localStrategy = new LocalStrategy(localOptions, verifyLocalStrategy);
const jwtStrategy = new JwtStrategy(jwtOptions, verifyJwtStrategy);

passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);
