// App modules
import Authorization from './Authorization';
// Config
import config from '../config';

class Repository {
    constructor() {
        this.protocol = config.api.protocol;
        this.apiUrl = config.api.url;
        this.auth = new Authorization();
    }

    getUrl(endPoint) {
        return new Promise((resolve, reject) => {
            this.auth.getAccessToken()
                .then((accessToken) => {
                    const apiUrl = `${this.protocol}://${this.apiUrl}/`;

                    resolve(`${apiUrl}/${endPoint}?access_token=${accessToken}`);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default Repository;
