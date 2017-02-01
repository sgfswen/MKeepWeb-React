export function startGlobalCurrenciesUpdating(state) {
    return Object.assign({}, state, {
        global: Object.assign({}, state.global, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: true,
                error: null
            })
        })
    });
}

export function finishGlobalCurrenciesUpdating(state, currencies, date) {
    return Object.assign({}, state, {
        global: Object.assign({}, state.global, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: false,
                lastUpdate: date
            }),
            data: currencies
        })
    });
}

export function setGlobalCurrenciesUpdatingError(state, error, date) {
    return Object.assign({}, state, {
        global: Object.assign({}, state.global, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: false,
                lastUpdate: date,
                error
            })
        })
    });
}

export function startProjectCurrenciesUpdating(state) {
    return Object.assign({}, state, {
        project: Object.assign({}, state.project, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: true,
                error: null
            })
        })
    });
}

export function finishProjectCurrenciesUpdating(state, currencies, date) {
    return Object.assign({}, state, {
        project: Object.assign({}, state.project, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: false,
                lastUpdate: date
            }),
            data: currencies
        })
    });
}

export function setProjectCurrenciesUpdatingError(state, error, date) {
    return Object.assign({}, state, {
        project: Object.assign({}, state.project, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: false,
                lastUpdate: date,
                error
            })
        })
    });
}

export function applyCurrentProjectCurrencies(state, currencies, mainCurrency, date) {
    return Object.assign({}, state, {
        mainCurrency: {
            id: mainCurrency,
            isUpdating: false
        },
        project: Object.assign({}, state.project, {
            fetching: Object.assign({}, state.fetching, {
                inProgress: false,
                lastUpdate: date
            }),
            data: currencies
        })
    });
}

export function startMainCurrencyUpdating(state) {
    return Object.assign({}, state, {
        mainCurrency: Object.assign({}, state.mainCurrency, {
            isUpdating: true
        })
    });
}

export function finishMainCurrencyUpdating(state, mainCurrency) {
    return Object.assign({}, state, {
        mainCurrency: Object.assign({}, state.mainCurrency, {
            id: mainCurrency._id,
            isUpdating: false
        })
    });
}

export function setMainCurrencyUpdatingError(state) {
    return Object.assign({}, state, {
        mainCurrency: Object.assign({}, state.mainCurrency, {
            isUpdating: false
        })
    });
}
