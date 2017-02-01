export function mergeCurrencies(globalCurrencies, projectCurrencies, currentCurrency) {
    const result = [];
    const projectCurrenciesMap = mapArrayToObject(projectCurrencies);

    for (const globalCurrency of globalCurrencies) {
        result.push(Object.assign({
            isSelected: projectCurrenciesMap.hasOwnProperty(globalCurrency._id),
            isDefault: globalCurrency._id === currentCurrency
        }, globalCurrency));
    }

    return result;
}

export function sortArrayOfObjects(array, field = '_id', invert = false) {
    return array.sort((item1, item2) => {
        if (item1[field] < item2[field]) {
            return invert ? 1 : -1;
        }

        if (item1[field] > item2[field]) {
            return invert ? -1 : 1;
        }

        return 0;
    });
}

export function mapArrayToObject(array, field = '_id') {
    const result = {};

    for (const item of array) {
        result[item[field]] = item;
    }

    return result;
}
