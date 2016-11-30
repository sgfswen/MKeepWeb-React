// React
import React, { Component, PropTypes } from 'react';
// UI components
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
// Icons
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';

const propTypes = {
    handleNavigationClick: PropTypes.func,
    handleLogInClick: PropTypes.func
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: false,
            open: false
        };
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
                    iconElementRight={this.state.logged ? {} :
                    <FlatButton
                        onTouchTap={this.props.handleLogInClick}
                        label='Log in'
                    />
                    }
                />
            </div>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
