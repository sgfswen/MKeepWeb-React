// React
import React, { Component, PropTypes } from 'react';
// Components
import LogInForm from './LogInForm';
// UI components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const propTypes = {
    isOpened: PropTypes.bool,
    handleClose: PropTypes.func
};

class LogInDialog extends Component {
    render() {
        const actions = [
            <FlatButton
                key='ok'
                label='Ok'
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.handleClose}
            />
        ];

        return (
            <Dialog
                title='Log In'
                actions={actions}
                modal={false}
                open={this.props.isOpened}
                onRequestClose={this.props.handleClose}
            >
                <LogInForm />
            </Dialog>
        );
    }
}

LogInDialog.propTypes = propTypes;

export default LogInDialog;
