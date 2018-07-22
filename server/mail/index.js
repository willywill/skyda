import { head, length } from 'ramda';
import { transport, mailOptions } from './transporter';
import { log } from '../middleware/logger';
import { verifyEmailTemplate, passwordResetTemplate } from './templates';

const getAcceptedEmails = info => info && info.accepted;
const getSentTo = info => head(getAcceptedEmails(info));
const emailSent = info => length(getAcceptedEmails(info));

const sendMail = (email, subject, template) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions(email, subject, template), (error, info) => {
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
    const subject = 'Verify Your Email Address';
    const verifyTemplate = verifyEmailTemplate(firstName, _id);
    return sendMail(email, subject, verifyTemplate);
};

export const sendPasswordResetMail = async ({ email, _id }) => {
    const subject = 'Reset Your Password';
    const resetTemplate = passwordResetTemplate(_id);
    return sendMail(email, subject, resetTemplate);
};
