// Libs
import request from 'superagent';
// App modules
import Repository from './Repository';

class ProjectsRepository extends Repository {
    getUrl() {
        return super.getUrl('projects');
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
