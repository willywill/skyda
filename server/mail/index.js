import { head, length } from 'ramda';
import { transport, mailOptions } from './transporter';
import { log } from '../middleware/logger';
import { verifyEmailTemplate } from './templates/verifyEmail';

const getAcceptedEmails = info => info.accepted;
const getSentTo = info => head(getAcceptedEmails(info));
const emailSent = info => length(getAcceptedEmails(info));

const sendMail = options => {
    return new Promise((resolve, reject) => {
        transport.sendMail(options, (error, info) => {
            if (error) {
                reject(error);
            }

            if (emailSent(info)) {
                log.info(`Email was sent! Sent to - ${getSentTo(info)}`);
                resolve();
            }
        });
    });
};

export const sendVerifyMail = async ({ firstName, email, _id }) => {
    const subject = 'Verify your email address';
    const verifyTemplate = verifyEmailTemplate(firstName, _id);
    return sendMail(mailOptions(email, subject, verifyTemplate));
};