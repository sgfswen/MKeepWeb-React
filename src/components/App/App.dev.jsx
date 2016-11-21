import React, { Component, PropTypes } from 'react';
import AppProd from './App.prod';
import DevTools from '../DevTools';

const propTypes = {
    children: PropTypes.node
};
const renderDevTools = false;

class App extends Component {
    render() {
        return (
            <AppProd>
                <div>
                    {this.props.children}
                    {renderDevTools && <DevTools />}
                </div>
            </AppProd>
        );
    }
}

App.propTypes = propTypes;

export default App;
