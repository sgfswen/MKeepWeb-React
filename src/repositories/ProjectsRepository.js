// Libs
import request from 'superagent';
// App modules
import Repository from './Repository';
import Authorization from './Authorization';

const auth = new Authorization();

class ProjectsRepository extends Repository {
    getUrl() {
        return new Promise((resolve, reject) => {
            auth.getAccessToken()
                .then((accessToken) => {
                    const apiUrl = super.getUrl();

                    resolve(`${apiUrl}/projects?access_token=${accessToken}`);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getList() {
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

                            resolve(response.body);
                        });
                });
        });
    }

    getErrorMessage(responseBody) {
        return responseBody.error.message;
    }
}

export default ProjectsRepository;
