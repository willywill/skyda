import { isEmpty, curry } from 'ramda';

export const isNotEmpty = value => !isEmpty(value) && value !== null;

export const viewRoute = curry((server, app, path) => server.get(path, (req, res) => app.render(req, res, path)));
