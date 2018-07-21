import { transport, mailOptions } from './transporter';

const sendMail = options => {
    return new Promise((resolve, reject) => {
        transport.sendMail(options, (error) => {
            if (error) {
                reject(error);
            }
        });
        resolve();
    });
};

export const sendVerifyMail = async (receiver) => sendMail(mailOptions(receiver, 'Verify your email address', 'Test'));
