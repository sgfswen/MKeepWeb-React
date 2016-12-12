// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// UI components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import { LogInForm } from 'components/Authorization';
// Styles
import './LogInDialog.less';

const propTypes = {
    isOpened: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    fetching: PropTypes.bool
};

class LogInDialog extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.handleClose();
    }

    render() {
        const actions = [];

        if (this.props.fetching) {
            actions.push(
                <LinearProgress
                    key='progress'
                    mode='indeterminate'
                    className='log-in-progress'
                />
            );
        } else {
            actions.push(
                <FlatButton
                    key='close'
                    label='Close'
                    onTouchTap={this.handleClose}
                />
            );
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
                    <LogInForm />
                </Dialog>
            </div>
        );
    }
}

LogInDialog.propTypes = propTypes;

function mapStateToProps(state) {
    const { fetching } = state.user;

    return {
        fetching
    };
}

export default connect(mapStateToProps)(LogInDialog);
