import {
    startGlobalCurrenciesUpdating,
    finishGlobalCurrenciesUpdating,
    setGlobalCurrenciesUpdatingError,
    startProjectCurrenciesUpdating,
    finishProjectCurrenciesUpdating,
    setProjectCurrenciesUpdatingError,
    applyCurrentProjectCurrencies,
    startMainCurrencyUpdating,
    finishMainCurrencyUpdating,
    setMainCurrencyUpdatingError
} from './currenciesReducerMethods';

import {
    GET_GLOBAL_CURRENCIES_LIST_STARTED,
    GET_GLOBAL_CURRENCIES_LIST_FINISHED,
    GET_GLOBAL_CURRENCIES_LIST_FAILED,
    UPDATE_PROJECT_CURRENCIES_STARTED,
    UPDATE_PROJECT_CURRENCIES_FINISHED,
    UPDATE_PROJECT_CURRENCIES_FAILED,
    UPDATE_PROJECT_MAIN_CURRENCY_STARTED,
    UPDATE_PROJECT_MAIN_CURRENCY_FINISHED,
    UPDATE_PROJECT_MAIN_CURRENCY_FAILED
} from 'redux/actions/currenciesActions';

import { CURRENT_PROJECT_CHANGED } from 'redux/actions/projectsActions';

/**
 *  {
 *      mainCurrency: {
 *          id: '585d67f43d56a3ca1fe6f497',
 *          isUpdating: false
 *      },
 *      global: {
 *          fetching: {
 *              inProgress: false,
 *              error: null,
 *              lastUpdate: '2017-01-19T04:36:19.867Z'
 *          },
 *          data: [
 *              {
 *                  id: '585d67f43d56a3ca1fe6f497',
 *                  iso: 'RUB',
 *                  created: '2016-12-23T18:07:48.139Z',
 *                  modified: '2016-12-23T18:07:48.139Z'
 *              }
 *          ]
 *      },
 *      project: {
 *          fetching: {
 *              inProgress: false,
 *              error: null,
 *              lastUpdate: '2017-01-19T04:36:19.867Z'
 *          },
 *          data: [
 *              {
 *                  id: '585d67f43d56a3ca1fe6f497',
 *                  iso: 'RUB',
 *                  created: '2016-12-23T18:07:48.139Z',
 *                  modified: '2016-12-23T18:07:48.139Z'
 *              }
 *          ]
 *      }
 *  }
 */
const initialState = {
    mainCurrency: {
        id: null,
        isUpdating: false
    },
    global: {
        fetching: {
            inProgress: false,
            error: null,
            lastUpdate: null
        },
        data: []
    },
    project: {
        fetching: {
            inProgress: false,
            error: null,
            lastUpdate: null
        },
        data: []
    }
};

export default function (state = initialState, action) {
    const date = (new Date()).toISOString();

    switch (action.type) {
        case GET_GLOBAL_CURRENCIES_LIST_STARTED:
            return startGlobalCurrenciesUpdating(state);
        case GET_GLOBAL_CURRENCIES_LIST_FINISHED:
            return finishGlobalCurrenciesUpdating(state, action.currenciesList, date);
        case GET_GLOBAL_CURRENCIES_LIST_FAILED:
            return setGlobalCurrenciesUpdatingError(state, action.error, date);
        case UPDATE_PROJECT_CURRENCIES_STARTED:
            return startProjectCurrenciesUpdating(state);
        case UPDATE_PROJECT_CURRENCIES_FINISHED:
            return finishProjectCurrenciesUpdating(state, action.currencies, date);
        case UPDATE_PROJECT_CURRENCIES_FAILED:
            return setProjectCurrenciesUpdatingError(state, action.error, date);
        case UPDATE_PROJECT_MAIN_CURRENCY_STARTED:
            return startMainCurrencyUpdating(state);
        case UPDATE_PROJECT_MAIN_CURRENCY_FINISHED:
            return finishMainCurrencyUpdating(state, action.mainCurrency);
        case UPDATE_PROJECT_MAIN_CURRENCY_FAILED:
            return setMainCurrencyUpdatingError(state, action.error);
        case CURRENT_PROJECT_CHANGED:
            return applyCurrentProjectCurrencies(
                state,
                action.project.currencies,
                action.project.mainCurrency._id,
                date
            );
        default:
            return state;
    }
}
