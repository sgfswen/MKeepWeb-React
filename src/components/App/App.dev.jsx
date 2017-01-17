import React, { Component, PropTypes } from 'react';
import AppProd from './App.prod';

const propTypes = {
    children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <AppProd>
                <div>
                    {this.props.children}
                </div>
            </AppProd>
        );
    }
}

App.propTypes = propTypes;

export default App;
