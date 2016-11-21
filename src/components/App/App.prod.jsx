import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const propTypes = {
    children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title='Money Keeper'
                    iconClassNameRight='muidocs-icon-navigation-expand-more'
                />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
