import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from '../Layout';

injectTapEventPlugin();

const propTypes = {
    children: PropTypes.node,
    currentProjectId: PropTypes.string
};

class App extends Component {
    componentWillReceiveProps(nextProps) {
        // Todo: Can I use another component lifecycle method to avoid this `if`?
        if (this.props.currentProjectId !== nextProps.currentProjectId) {
            browserHistory.push(`/project/${nextProps.currentProjectId}`);
        }
    }

    render() {
        return (
            <Layout
                children={this.props.children}
            />
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    console.log('map project id', state.projects.currentProject);

    return {
        currentProjectId: state.projects.currentProject
    };
}

export default connect(mapStateToProps)(App);
