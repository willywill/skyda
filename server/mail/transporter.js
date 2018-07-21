import nodemailer from 'nodemailer';
import config from '../config';

const transportOptions = {
    host: config.mail.host,
    port: config.mail.port,
    secure: config.mail.secure,
    auth: {
        user: config.mail.user,
        pass: config.mail.password,
    }
};

export const mailOptions = (to, subject, template) => ({
    from: config.mail.user,
    to,
    subject,
    text: template,
});

export const transport = nodemailer.createTransport(transportOptions);
