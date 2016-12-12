// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logOut } from 'redux/actions/authActions';
// UI components
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// Icons
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import UserIcon from 'material-ui/svg-icons/social/person';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool,
    handleNavigationClick: PropTypes.func,
    handleLogInClick: PropTypes.func,
    handleLogOutClick: PropTypes.func
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.isAuthorized = this.isAuthorized.bind(this);
    }

    handleLogOutClick() {
        console.log('handleLogOutClick');
        this.props.dispatch(logOut());
    }

    getLogInButton() {
        return (
            <FlatButton
                onTouchTap={this.props.handleLogInClick}
                label='Log in'
            />
        );
    }

    getUserMenu() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton>
                        <UserIcon />
                    </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Divider />
                <MenuItem
                    primaryText='Log Out'
                    onTouchTap={this.handleLogOutClick}
                    leftIcon={<LogOutIcon />}
                />
            </IconMenu>
        );
    }

    isAuthorized() {
        return this.props.isAuthorized;
    }

    render() {
        return (
            <div>
                <AppBar
                    title='Money Keeper'
                    iconElementLeft={
                        <IconButton onTouchTap={this.props.handleNavigationClick}>
                            <NavigationMenuIcon />
                        </IconButton>
                    }
                    iconElementRight={this.isAuthorized() ?
                        this.getUserMenu() :
                        this.getLogInButton()
                    }
                />
            </div>
        );
    }
}

Header.propTypes = propTypes;

function mapStateToProps(state) {
    const { isAuthorized } = state.user;

    return {
        isAuthorized
    };
}

export default connect(mapStateToProps)(Header);
