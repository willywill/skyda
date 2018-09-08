import axios from 'axios';

const fetch = {
    get: url => {
        return axios.get(url).then(res => res.data);
    },
    post: (url, body) => {
        return axios.post(url, JSON.stringify(body)).then(res => res.data);
    },
    delete: (url) => {
        return axios.delete(url).then(res => res.data);
    },
};

export default fetch;
