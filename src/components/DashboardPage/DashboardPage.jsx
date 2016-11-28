// React
import React, { Component } from 'react';
// UI components
import { Card, CardHeader, CardText } from 'material-ui/Card';

const propTypes = {};

class DashboardPage extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title='Dashboard'
                    subtitle='Dashboard page'
                />
                <CardText>
                    Dashboard page is temporarily unavailable
                </CardText>
            </Card>
        );
    }
}

DashboardPage.propTypes = propTypes;

export default DashboardPage;
