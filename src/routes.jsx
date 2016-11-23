import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';

import AccountsPage from 'components/AccountsPage';
import CategoriesPage from 'components/CategoriesPage';
import CurrenciesPage from 'components/CurrenciesPage';

import CounterPage from 'components/CounterPage';
import HelloWorldPage from 'components/HelloWorldPage';
import TimePage from 'components/TimePage';

export default (
    <Route component={App} path='/'>
        <IndexRoute component={HelloWorldPage} />

        <Route component={AccountsPage} path='accounts' />
        <Route component={CategoriesPage} path='categories' />
        <Route component={CurrenciesPage} path='currencies' />

        <Route component={CounterPage} path='counters' />
        <Route component={TimePage} path='time' />
    </Route>
);
