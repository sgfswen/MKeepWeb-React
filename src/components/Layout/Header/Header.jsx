// React
import React, { Component, PropTypes } from 'react';
// UI components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';

const propTypes = {
    toggleNavigationMenu: PropTypes.func
};

class Header extends Component {
    handleToggle = () => {
        console.info('Navigation button was clicked');

        this.props.toggleNavigationMenu();
    };

    render() {
        return (
            <AppBar
                title='Money Keeper'
                iconElementLeft={
                    <IconButton onTouchTap={this.handleToggle}>
                        <NavigationMenuIcon />
                    </IconButton>
                }
            />
        );
    }
}

Header.propTypes = propTypes;

export default Header;
