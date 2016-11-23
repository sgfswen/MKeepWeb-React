// React
import React, { Component, PropTypes } from 'react';
// UI components
import Header from './Header';
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
            navigationMenuIsOpened: false
        };
    }

    setNavigationMenuState = (state) => {
        this.setState({
            navigationMenuIsOpened: state
        });
    };

    toggleNavigationMenu = () => {
        this.setNavigationMenuState(!this.state.navigationMenuIsOpened);
    };

    render() {
        return (
            <div>
                <Header
                    toggleNavigationMenu={this.toggleNavigationMenu}
                />
                <NavigationMenu
                    isOpened={this.state.navigationMenuIsOpened}
                    setState={this.setNavigationMenuState}
                />
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;
