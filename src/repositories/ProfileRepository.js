// Libs
import request from 'superagent';
// App modules
import Repository from './Repository';

class ProfileRepository extends Repository {
    getUrl() {
        return super.getUrl('profile');
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
