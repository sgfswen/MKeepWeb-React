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
        <Route component={DashboardPage}    path='project/:projectId'/>
        <Route component={CurrenciesPage}   path='project/:projectId/currencies'/>
        <Route component={AccountsPage}     path='project/:projectId/accounts'/>
        <Route component={CategoriesPage}   path='project/:projectId/categories'/>
    </Route>
);
