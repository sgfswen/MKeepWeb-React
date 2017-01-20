import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';

import AccountsPage from 'components/AccountsPage';
import CategoriesPage from 'components/CategoriesPage';
import CurrenciesPage from 'components/CurrenciesPage';
import DashboardPage from 'components/DashboardPage';

export default (
    <Route component={App} path='/'>
        <IndexRoute component={DashboardPage}/>
        <Route component={DashboardPage} path='project/:projectId'/>
        <Route component={AccountsPage} path='settings/accounts'/>
        <Route component={CategoriesPage} path='settings/categories'/>
        <Route component={CurrenciesPage} path='settings/currencies'/>
    </Route>
);
