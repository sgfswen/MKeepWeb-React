// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logInByEmail, createNewAccount } from 'redux/actions/authActions';
// App components
import FieldValidator from 'utils/FieldValidator';
// UI components
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// Styles
import './LogInForm.less';

const propTypes = {
    dispatch: PropTypes.func.isRequired
};

class LogInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {
                email: null,
                password: null
            },
            isLoading: false,
            wasSubmitted: false
        };

        this.validator = new FieldValidator();

        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleCreateNewAccountClick = this.handleCreateNewAccountClick.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLogInClick() {
        this.setState({
            wasSubmitted: true
        });

        if (!this.validateForm()) {
            return;
        }

        this.setState({
            isLoading: true
        });
        this.props.dispatch(logInByEmail(this.state.email, this.state.password));
    }

    handleCreateNewAccountClick() {
        this.setState({
            wasSubmitted: true
        });

        if (!this.validateForm()) {
            return;
        }

        this.setState({
            isLoading: true
        });
        this.props.dispatch(createNewAccount(this.state.email, this.state.password));
    }

    handleChangeEmail(event) {
        const email = event.target.value;

        this.setState({
            email
        });

        this.validateEmail(email);
    }

    handleChangePassword(event) {
        const password = event.target.value;

        this.setState({
            password
        });

        this.validatePassword(password);
    }

    validateForm() {
        const emailIsValid = this.validateEmail(this.state.email);
        const passwordIsValid = this.validatePassword(this.state.password);

        return emailIsValid && passwordIsValid;
    }

    validateEmail(email) {
        if (email.length === 0) {
            this.updateErrorMessages({
                email: 'Email is required'
            });

            return false;
        }

        if (!this.validator.isEmail(email)) {
            this.updateErrorMessages({
                email: 'Email is not correct'
            });

            return false;
        }

        this.updateErrorMessages({
            email: null
        });

        return true;
    }

    validatePassword(password) {
        if (password.length === 0) {
            this.updateErrorMessages({
                password: 'Password is required'
            });

            return false;
        }

        this.updateErrorMessages({
            password: null
        });

        return true;
    }

    updateErrorMessages(errorMessages) {
        const currentErrors = this.state.errors;

        for (const error in errorMessages) {
            if (!errorMessages.hasOwnProperty(error)) {
                continue;
            }

            currentErrors[error] = errorMessages[error];
        }

        this.setState({
            errors: currentErrors
        });
    }

    render() {
        const wasSubmitted = this.state.wasSubmitted;

        return (
            <div className='log-in-form'>
                <div>
                    <form>
                        <TextField
                            fullWidth={true}
                            floatingLabelText='Email'
                            value={this.state.email}
                            errorText={wasSubmitted && this.state.errors.email}
                            onChange={this.handleChangeEmail}
                        />
                        <br />
                        <TextField
                            fullWidth={true}
                            floatingLabelText='Password'
                            type='password'
                            value={this.state.password}
                            errorText={wasSubmitted && this.state.errors.password}
                            onChange={this.handleChangePassword}
                        />
                        <br />
                        <FlatButton
                            label='Create new account'
                            labelStyle={{
                                fontSize: 12
                            }}
                            primary={true}
                            onTouchTap={this.handleCreateNewAccountClick}
                            className='registration-button'
                            style={{
                                float: 'right'
                            }}
                        />
                        <RaisedButton
                            label='Log In'
                            fullWidth={true}
                            onTouchTap={this.handleLogInClick}
                            className='log-in-button'
                        />
                    </form>
                </div>
                <div>
                    <RaisedButton
                        label='Google'
                        fullWidth={true}
                        className='sign-in-button google'
                        disabled={true}
                    />
                    <RaisedButton
                        label='VK'
                        fullWidth={true}
                        className='sign-in-button vk'
                        disabled={true}
                    />
                    <RaisedButton
                        label='Facebook'
                        fullWidth={true}
                        className='sign-in-button facebook'
                        disabled={true}
                    />
                </div>
            </div>
        );
    }
}

LogInForm.propTypes = propTypes;

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(LogInForm);
