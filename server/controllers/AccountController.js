import { User } from '../models';
import { log } from '../middleware/logger';
import { isNotEmpty, extractPublicFields } from '../utils';

export const getUserInfo = async ({ body: { email } }, res) => {
    try {
        const query = { email };
        const user = await User.findOne(query).exec();
        if (isNotEmpty(user)) {
            res.status(200).send({ user: extractPublicFields(user) });
        } else {
            res.status(404).send({ error: 'Unable to retrieve information' });
        }
    } catch (error) {
        log.info(`Error getting account details: ${error}`);
        return res.status(500).send({ error });
    }
};
