import { isEmpty, curry, pick } from 'ramda';

export const isNotEmpty = value => !isEmpty(value) && value !== null;

export const viewRoute = curry((server, app, path) => server.get(path, (req, res) => app.render(req, res, path)));

export const extractPublicFields = pick(['firstName', 'lastName', 'email', 'phone', 'isVerified']);
