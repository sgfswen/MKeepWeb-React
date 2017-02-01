import { CurrenciesRepository } from 'repositories';

const repository = new CurrenciesRepository();

export const GET_GLOBAL_CURRENCIES_LIST_STARTED = 'GET_GLOBAL_CURRENCIES_LIST_STARTED';
export const GET_GLOBAL_CURRENCIES_LIST_FINISHED = 'GET_GLOBAL_CURRENCIES_LIST_FINISHED';
export const GET_GLOBAL_CURRENCIES_LIST_FAILED = 'GET_GLOBAL_CURRENCIES_LIST_FAILED';
export const UPDATE_PROJECT_CURRENCIES_STARTED = 'UPDATE_PROJECT_CURRENCIES_STARTED';
export const UPDATE_PROJECT_CURRENCIES_FINISHED = 'UPDATE_PROJECT_CURRENCIES_FINISHED';
export const UPDATE_PROJECT_CURRENCIES_FAILED = 'UPDATE_PROJECT_CURRENCIES_FAILED';
export const UPDATE_PROJECT_MAIN_CURRENCY_STARTED = 'UPDATE_PROJECT_MAIN_CURRENCY_STARTED';
export const UPDATE_PROJECT_MAIN_CURRENCY_FINISHED = 'UPDATE_PROJECT_MAIN_CURRENCY_FINISHED';
export const UPDATE_PROJECT_MAIN_CURRENCY_FAILED = 'UPDATE_PROJECT_MAIN_CURRENCY_FAILED';

export function getGlobalCurrenciesList() {
    return (dispatch) => {
        dispatch(getGlobalCurrenciesListStart());

        repository.getGlobalCurrencies()
            .then((projectsList) => {
                dispatch(getGlobalCurrenciesListFinished(projectsList));
            })
            .catch((error) => {
                dispatch(getGlobalCurrenciesListFailed(error));
            });
    };
}

export function updateProjectCurrencies(projectId, currencies) {
    return (dispatch) => {
        dispatch(updateProjectCurrenciesStart());

        repository.updateProjectCurrencies(projectId, currencies)
            .then((updatedCurrencies) => {
                dispatch(updateProjectCurrenciesFinished(updatedCurrencies));
            })
            .catch((error) => {
                dispatch(updateProjectCurrenciesFailed(error));
            });
    };
}

export function updateProjectMainCurrency(projectId, currencyId) {
    return (dispatch) => {
        dispatch(updateProjectMainCurrencyStart());

        repository.updateProjectMainCurrency(projectId, currencyId)
            .then((mainCurrency) => {
                dispatch(updateProjectMainCurrencyFinished(mainCurrency));
            })
            .catch((error) => {
                dispatch(updateProjectMainCurrencyFailed(error));
            });
    };
}

function getGlobalCurrenciesListStart() {
    return {
        type: GET_GLOBAL_CURRENCIES_LIST_STARTED
    };
}

function getGlobalCurrenciesListFinished(currenciesList) {
    return {
        type: GET_GLOBAL_CURRENCIES_LIST_FINISHED,
        currenciesList
    };
}

function getGlobalCurrenciesListFailed(data) {
    return {
        type: GET_GLOBAL_CURRENCIES_LIST_FAILED,
        error: data.error
    };
}

function updateProjectCurrenciesStart() {
    return {
        type: UPDATE_PROJECT_CURRENCIES_STARTED
    };
}

function updateProjectCurrenciesFinished(currencies) {
    return {
        type: UPDATE_PROJECT_CURRENCIES_FINISHED,
        currencies
    };
}

function updateProjectCurrenciesFailed(error) {
    return {
        type: UPDATE_PROJECT_CURRENCIES_FAILED,
        error
    };
}

function updateProjectMainCurrencyStart() {
    return {
        type: UPDATE_PROJECT_MAIN_CURRENCY_STARTED
    };
}

function updateProjectMainCurrencyFinished(mainCurrency) {
    return {
        type: UPDATE_PROJECT_MAIN_CURRENCY_FINISHED,
        mainCurrency
    };
}

function updateProjectMainCurrencyFailed(error) {
    return {
        type: UPDATE_PROJECT_MAIN_CURRENCY_FAILED,
        error
    };
}
