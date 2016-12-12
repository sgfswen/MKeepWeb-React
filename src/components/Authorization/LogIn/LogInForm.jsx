// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logInByEmail } from 'redux/actions/authActions';
// UI components
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
            isLoading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isLoading: true
        });

        this.props.dispatch(logInByEmail(this.state.email, this.state.password));
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
        return (
            <div className='log-in-form'>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth={true}
                            floatingLabelText='Email'
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                        />
                        <br />
                        <TextField
                            fullWidth={true}
                            floatingLabelText='Password'
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />
                        <br />
                        <RaisedButton
                            label='Log In'
                            fullWidth={true}
                            onTouchTap={this.handleSubmit}
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
