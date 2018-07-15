import morgan from 'morgan';

const logger = () => 
    (process.env.NODE_ENV === 'production')
        ? morgan('combined')
        : morgan('dev');

export default logger;