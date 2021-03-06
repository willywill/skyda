import morgan from 'morgan';
import winston, { createLogger } from 'winston';

const options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
    },
};

export const log = createLogger({
    transports: [new winston.transports.Console(options.console)],
    exitOnError: false,
});

log.stream = {
    write: (message) => {
        log.info(message);
    },
};

const logger = () =>
    (process.env.NODE_ENV === 'production')
        ? morgan('combined', { stream: log.stream })
        : morgan('dev');

export default logger;
