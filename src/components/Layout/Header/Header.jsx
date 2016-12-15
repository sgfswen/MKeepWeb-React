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
    userName: PropTypes.string,
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
        const userName = `Hello, ${this.props.userName}`;

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
                <MenuItem
                    primaryText={userName}
                />
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
        const isAuthorized = this.isAuthorized();
        const elementLeft = isAuthorized ?
            (
                <IconButton onTouchTap={this.props.handleNavigationClick}>
                    <NavigationMenuIcon />
                </IconButton>
            ) : null;
        const elementRight = isAuthorized ?
            this.getUserMenu() :
            this.getLogInButton();

        return (
            <div>
                <AppBar
                    title='Money Keeper'
                    showMenuIconButton={isAuthorized}
                    iconElementLeft={elementLeft}
                    iconElementRight={elementRight}
                />
            </div>
        );
    }
}

Header.propTypes = propTypes;

function mapStateToProps(state) {
    const { isAuthorized } = state.user;
    const userName = isAuthorized ? state.user.data.name : '';

    return {
        isAuthorized,
        userName
    };
}

export default connect(mapStateToProps)(Header);
