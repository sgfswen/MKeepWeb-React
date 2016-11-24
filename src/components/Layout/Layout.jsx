// React
import React, { Component, PropTypes } from 'react';
// Components
import Header from './Header';
import { LogInDialog } from '../Authorization';
import NavigationMenu from './NavigationMenu';
// Styles
import './Layout.css';

const propTypes = {
    children: PropTypes.node
};

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavigationMenuOpened: false,
            isLogInDialogOpened: false
        };
    }

    setNavigationMenuState = (state) => {
        this.setState({
            isNavigationMenuOpened: state
        });
    };

    toggleNavigationMenu = () => {
        this.setNavigationMenuState(!this.state.isNavigationMenuOpened);
    };

    toggleLogInDialog = () => {
        this.setState({
            isLogInDialogOpened: !this.state.isLogInDialogOpened
        });
    };

    render() {
        return (
            <div>
                <Header
                    handleNavigationClick={this.toggleNavigationMenu}
                    handleLogInClick={this.toggleLogInDialog}
                />
                <NavigationMenu
                    isOpened={this.state.isNavigationMenuOpened}
                    setState={this.setNavigationMenuState}
                />
                {this.props.children}
                <LogInDialog
                    isOpened={this.state.isLogInDialogOpened}
                    handleClose={this.toggleLogInDialog}
                />
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;
