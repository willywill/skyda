import helmet from 'helmet';

const securityPolicy = () => helmet({
    frameguard: {
        action: 'deny',
    }
});

export default securityPolicy;
