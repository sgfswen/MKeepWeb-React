// Libs
import request from 'superagent';
// App modules
import Repository from './Repository';

class CurrenciesRepository extends Repository {
    constructor() {
        super();
    }

    getUrl(endPoint, ...params) {
        switch (endPoint) {
            case 'globalCurrencies':
                return super.getUrl('currencies');
            case 'projectCurrencies':
                return super.getUrl(`projects/${params[0]}/currencies`);
            case 'projectMainCurrency':
                return super.getUrl(`projects/${params[0]}/currencies/main`);
            default:
                return new Promise((resolve, reject) => {
                    reject(`End-point "${endPoint}" is not defined.`);
                });
        }
    }

    getGlobalCurrencies() {
        return new Promise((resolve, reject) => {
            this.getUrl('globalCurrencies')
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

    updateProjectCurrencies(projectId, currencies) {
        return new Promise((resolve, reject) => {
            this.getUrl('projectCurrencies', projectId)
                .then((url) => {
                    request
                        .post(url)
                        .send({
                            currencies
                        })
                        .set('Accept', 'application/json')
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

    updateProjectMainCurrency(projectId, currencyId) {
        return new Promise((resolve, reject) => {
            this.getUrl('projectMainCurrency', projectId)
                .then((url) => {
                    request
                        .post(url)
                        .send({
                            mainCurrency: currencyId
                        })
                        .set('Accept', 'application/json')
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
}

export default CurrenciesRepository;
