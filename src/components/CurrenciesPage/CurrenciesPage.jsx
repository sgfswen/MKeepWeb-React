// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    getGlobalCurrenciesList,
    updateProjectCurrencies,
    updateProjectMainCurrency
} from '../../redux/actions/currenciesActions';
// Libs
import { mergeCurrencies, sortArrayOfObjects } from './CurrenciesUtils';
// App components
// UI components
import { Card, CardHeader, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
// Styles
import './CurrenciesPage.scss';

const propTypes = {
    projectId: PropTypes.string,
    currencies: PropTypes.array,
    children: PropTypes.node,
    dispatch: PropTypes.func.isRequired
};

class CurrenciesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredRowNumber: null
        };

        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleRowHover = this.handleRowHover.bind(this);
        this.handleMakeDefaultButtonClick = this.handleMakeDefaultButtonClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getGlobalCurrenciesList());
    }

    handleRowSelect(selectedRows) {
        const selectedCurrencies = selectedRows.map((rowNumber) => this.props.currencies[rowNumber]._id);

        setTimeout(() => {
            this.props.dispatch(updateProjectCurrencies(this.props.projectId, selectedCurrencies));
        }, 300);
    }

    handleRowHover(hoveredRowNumber) {
        this.setState({
            hoveredRowNumber
        });
    }

    handleMakeDefaultButtonClick(event) {
        event.stopPropagation();

        const selectedCurrency = this.props.currencies[this.state.hoveredRowNumber];

        this.props.dispatch(updateProjectMainCurrency(this.props.projectId, selectedCurrency));
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title='Currencies'
                    subtitle='Currencies setting page for project'
                />
                <CardText>
                    <Table
                        multiSelectable={true}
                        onRowHover={this.handleRowHover}
                        onRowSelection={this.handleRowSelect}
                    >
                        <TableHeader
                            displaySelectAll={false}
                        >
                            <TableRow>
                                <TableHeaderColumn>
                                    Sign
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Currency
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Country
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    ISO
                                </TableHeaderColumn>
                                <TableHeaderColumn />
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            deselectOnClickaway={false}
                            showRowHover={true}
                        >
                            {this.props.currencies.map((currency, index) => (
                                <TableRow
                                    key={currency._id}
                                    hoverable={true}
                                    displayBorder={false}
                                    selected={currency.isSelected}
                                    selectable={!currency.isDefault}
                                >
                                    <TableRowColumn>
                                        {currency.sign}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {currency.name}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {currency.country}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {index}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {currency.isDefault && (
                                            <span>Default</span>
                                        )}
                                        {!currency.isDefault && currency.isSelected &&
                                            this.state.hoveredRowNumber === index && (
                                            <RaisedButton
                                                label='Make Default'
                                                onClick={this.handleMakeDefaultButtonClick}
                                            />
                                        )}
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
        );
    }
}

CurrenciesPage.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    return {
        projectId: ownProps.params.projectId,
        currencies: sortArrayOfObjects(mergeCurrencies(
            state.currencies.global.data,
            state.currencies.project.data,
            state.currencies.mainCurrency.id
        ), 'isSelected', true)
    };
}

export default connect(mapStateToProps)(CurrenciesPage);
