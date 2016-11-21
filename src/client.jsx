import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

const muiTheme = getMuiTheme(theme, {
    userAgent: navigator.userAgent
});

const store = configureStore();
const component = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(component, document.getElementById('react-view'));
