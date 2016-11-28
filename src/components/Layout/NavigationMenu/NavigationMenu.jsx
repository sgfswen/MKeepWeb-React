// React
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
// UI components
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// Icons
import AccountsIcon from 'material-ui/svg-icons/action/account-balance-wallet';
import CategoriesIcon from 'material-ui/svg-icons/action/list';
import CurrenciesIcon from 'material-ui/svg-icons/action/euro-symbol';
import HomeIcon from 'material-ui/svg-icons/action/home';
// Styles
import './NavigationMenu.css';

const propTypes = {
    isOpened: PropTypes.bool,
    setState: PropTypes.func
};

let menuItemsCounter = 0;

class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.isOpened
        };
    }

    handleClose = () => {
        this.props.setState(false);
    };

    handleState = (state) => {
        this.props.setState(state);
    };

    getMenuItemElement = (menuItemData) =>
        <MenuItem
            key={menuItemsCounter++}
            primaryText={menuItemData.text}
            onTouchTap={() => {
                this.handleClose();
                browserHistory.push(menuItemData.link);
            }}
            leftIcon={menuItemData.icon}
        />;

    render() {
        const homeMenuItem = this.getMenuItemElement({
            link: '/',
            text: 'Home',
            icon: <HomeIcon />
        });
        const settingsMenuItems = [
            {
                link: '/settings/currencies',
                text: 'Currencies',
                icon: <CurrenciesIcon />
            },
            {
                link: '/settings/accounts',
                text: 'Accounts',
                icon: <AccountsIcon />
            },
            {
                link: '/settings/categories',
                text: 'Categories',
                icon: <CategoriesIcon />
            }
        ].map(this.getMenuItemElement);

        return (
            <Drawer
                open={this.props.isOpened}
                docked={false}
                onRequestChange={this.handleState}
                className='navigation_menu'
            >
                <Menu>
                    {homeMenuItem}
                    <Divider />
                    {settingsMenuItems}
                </Menu>
            </Drawer>
        );
    }
}

NavigationMenu.propTypes = propTypes;

export default NavigationMenu;
