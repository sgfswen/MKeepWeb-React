// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// UI components
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { LogInForm } from 'components/Authorization';
// Styles
import './LogInDialog.scss';

const propTypes = {
    isOpened: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    fetchingError: PropTypes.string
};

class LogInDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentForm: 'logIn'
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.handleClose();
    }

    getDialogActions({ fetching, fetchingError }) {
        const actions = [];

        if (fetching) {
            actions.push(
                <LinearProgress
                    key='progress'
                    mode='indeterminate'
                    className='log-in-progress'
                />
            );
        } else {
            if (fetchingError) {
                actions.push(
                    <Chip
                        className='error-message'
                        labelColor='secondary'
                    >
                        <b>Error:</b> {fetchingError}
                    </Chip>
                );
            }

            actions.push(
                <FlatButton
                    key='close'
                    label='Close'
                    onTouchTap={this.handleClose}
                />
            );
        }

        return actions;
    }

    render() {
        const actions = this.getDialogActions(this.props);
        let form;

        switch (this.state.currentForm) {
            case 'logIn':
                form = <LogInForm />;
                break;
            default:
                form = <LogInForm />;
        }

        return (
            <div>
                <Dialog
                    title='Authorization'
                    modal={false}
                    open={this.props.isOpened}
                    onRequestClose={this.props.handleClose}
                    actions={actions}
                >
                    {form}
                </Dialog>
            </div>
        );
    }
}

LogInDialog.propTypes = propTypes;

function mapStateToProps(state) {
    const fetching = state.user.fetching.inProgress;
    const fetchingError = state.user.fetching.error;

    return {
        fetching,
        fetchingError
    };
}

export default connect(mapStateToProps)(LogInDialog);
