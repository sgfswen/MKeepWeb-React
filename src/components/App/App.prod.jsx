import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from '../Layout';

injectTapEventPlugin();

const propTypes = {
    children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <Layout
                children={this.props.children}
            />
        );
    }
}

App.propTypes = propTypes;

export default App;
