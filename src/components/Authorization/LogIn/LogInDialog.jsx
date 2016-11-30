// React
import React, { Component, PropTypes } from 'react';
// UI components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const propTypes = {
    isOpened: PropTypes.bool,
    handleClose: PropTypes.func
};

class LogInDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleClose();
    }

    handleClose() {
        this.props.handleClose();
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        const actions = [
            <FlatButton
                key='cancel'
                label='Close'
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                key='login'
                label='Log in'
                type='submit'
                primary={true}
                onTouchTap={this.handleSubmit}
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
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText='Email'
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />
                    <br />
                    <TextField
                        floatingLabelText='Password'
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                    />
                </form>
            </Dialog>
        );
    }
}

LogInDialog.propTypes = propTypes;

export default LogInDialog;
