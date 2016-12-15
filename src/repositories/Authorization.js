// Libs
import request from 'superagent';
import cookie from 'react-cookie';
// App modules
import config from '../config';

const { clientId, clientSecret, tokenMaxAge } = config.auth;

import Repository from './Repository';

class Authorization extends Repository {
    getUrl(action) {
        const apiUrl = super.getUrl();

        switch (action) {
            case 'logInEmail':
                return `${apiUrl}/authenticate`;
            case 'createAccount':
                return `${apiUrl}/registration`;
            default:
                return null;
        }
    }

    logInByEmail(email, password) {
        return new Promise((resolve, reject) => {
            request
                .post(this.getUrl('logInEmail'))
                .send({
                    'grant_type': 'password',
                    'client_id': clientId,
                    'client_secret': clientSecret,
                    'username': email,
                    password
                })
                .set('Accept', 'application/json')
                .end((error, response) => {
                    if (error) {
                        reject(this.getErrorMessage(response.body));
                        return;
                    }

                    cookie.save('accessToken', response.body.access_token, {
                        maxAge: tokenMaxAge
                    });

                    cookie.save('refreshToken', response.body.refresh_token, {
                        maxAge: tokenMaxAge
                    });

                    resolve(response.body);
                });
        });
    }

    createNewAccount(email, password) {
        console.info('createNewAccount', email, password);

        return new Promise((resolve, reject) => {
            request
                .post(this.getUrl('createAccount'))
                .send({
                    'username': email,
                    password
                })
                .set('Accept', 'application/json')
                .end((error, response) => {
                    console.info('createNewAccount resp', error, response);

                    if (error) {
                        reject(this.getErrorMessage(response.body));
                        return;
                    }

                    resolve(response.body);
                });
        });
    }

    getAccessToken() {
        return new Promise((resolve) => {
            const accessToken = cookie.load('accessToken');

            resolve(accessToken);
        });
    }

    getErrorMessage(responseBody) {
        let errorMessage;

        switch (responseBody.error) {
            case 'invalid_grant':
                errorMessage = 'Wrong email or password';
                break;
            default:
                errorMessage = responseBody.description;
        }

        return errorMessage || 'Error';
    }
}

export default Authorization;
