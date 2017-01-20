import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

const muiTheme = getMuiTheme(theme, {
    userAgent: navigator.userAgent
});

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const component = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(component, document.getElementById('react-view'));
