import config from '../config';

const { protocol, apiUrl } = config.api;

class Repository {
    getUrl() {
        return `${protocol}://${apiUrl}`;
    }
}

export default Repository;
