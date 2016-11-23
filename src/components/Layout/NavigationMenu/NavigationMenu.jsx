// React
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// UI components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// Icons
import AccountsIcon from 'material-ui/svg-icons/action/account-balance-wallet';
import CategoriesIcon from 'material-ui/svg-icons/action/list';
import CurrenciesIcon from 'material-ui/svg-icons/action/euro-symbol';

const propTypes = {
    isOpened: PropTypes.bool,
    setState: PropTypes.func
};

class Header extends Component {
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

    render() {
        const menuItems = [
            {
                id: 1,
                link: '/currencies',
                text: 'Currencies',
                icon: <CurrenciesIcon />
            },
            {
                id: 2,
                link: '/accounts',
                text: 'Accounts',
                icon: <AccountsIcon />
            },
            {
                id: 3,
                link: '/categories',
                text: 'Categories',
                icon: <CategoriesIcon />
            }
        ].map(menuItem => <Link to={menuItem.link} key={menuItem.id}>
            <MenuItem
                primaryText={menuItem.text}
                leftIcon={menuItem.icon}
                onTouchTap={this.handleClose}
                key={menuItem.id}
            />
        </Link>);

        return (
            <Drawer
                open={this.props.isOpened}
                docked={false}
                onRequestChange={this.handleState}
            >
                {menuItems}
            </Drawer>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
