import Nexmo from 'nexmo';
import config from '../config';

const nexmo = new Nexmo({ ...config.nexmo });

const options = {
    code_length: 6,
    brand: config.appName,
};

export const sendVerifyText = number => new Promise((resolve, reject) => {
    nexmo.verify.request({ number, ...options }, (error, result) => {
        if (error) {
            reject(error);
        } else {
            const requestId = result.request_id;
            if (result.status === '0') {
                resolve(requestId);
            } else {
                reject(result.error_text);
            }
        }
    });
});

export const confirmVerifyText = (requestId, code) => new Promise((resolve, reject) => {
    nexmo.verify.check({ request_id: requestId, code }, (error, result) => {
        if (error) {
            reject(error);
        } else {
            if (result && result.status === '0') {
                resolve();
            } else {
                const error = 'Wrong PIN. Try again.';
                reject(error);
            }
        }
    });
});
