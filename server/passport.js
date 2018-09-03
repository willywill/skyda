import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from './models';
import { log } from './middleware/logger';
import config from './config';
import { isNotEmpty } from './utils';

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
        if (isNotEmpty(user)) {
            const isMatch = await user.comparePassword(password);
            return isMatch ? responseSend({ data: user }) : responseSend({ error: 'Incorrect Password.' });
        } else {
            responseSend({ error: 'No user with this email found.' });
        }
    } catch (error) {
        log.info(`Error: ${error}`);
        responseSend({ error });
    }
};

const cookieExtractor = req => req && req.cookies ? req.cookies.token : null;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: config.auth.secret,
};

const verifyJwtStrategy = async (payload, done) => {
    const responseSend = returnObject(done);
    if (payload.expires > Date.now()) {
        return responseSend({ error: 'Token has expired' });
    }

    log.info(`Payload: ${JSON.stringify(payload, null, 2)}`);
    return responseSend({ data: payload });
};

// const googleOptions = { callbackURL: 'api/v1/auth/google/redirect', ...config.google };

// const verifyGoogleStrategy = async (token, refreshToken, profile, done) => {
//     log.info(`Google Strategy: ${profile}`);
// };

const localStrategy = new LocalStrategy(localOptions, verifyLocalStrategy);
const jwtStrategy = new JwtStrategy(jwtOptions, verifyJwtStrategy);
// const googleStrategy = new GoogleStrategy(googleOptions, verifyGoogleStrategy);

passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);
// passport.use('google', googleStrategy);
