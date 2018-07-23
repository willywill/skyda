import { isEmpty } from 'ramda';

export const isNotEmpty = value => !isEmpty(value) && value !== null;
