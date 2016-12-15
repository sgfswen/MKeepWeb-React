// Libs
import request from 'superagent';
// App modules
import Repository from './Repository';
import Authorization from './Authorization';

const auth = new Authorization();

class ProfileRepository extends Repository {
    getUrl() {
        return new Promise((resolve, reject) => {
            auth.getAccessToken()
                .then((accessToken) => {
                    const apiUrl = super.getUrl();

                    resolve(`${apiUrl}/profile?access_token=${accessToken}`);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getProfile() {
        return new Promise((resolve, reject) => {
            this.getUrl()
                .then((url) => {
                    request
                        .get(url)
                        .end((error, response) => {
                            if (error) {
                                reject(this.getErrorMessage(response.body));
                                return;
                            }

                            resolve({
                                id: response.body.user_id,
                                name: response.body.name
                            });
                        });
                });
        });
    }

    getErrorMessage(responseBody) {
        return responseBody.error.message;
    }
}

export default ProfileRepository;
