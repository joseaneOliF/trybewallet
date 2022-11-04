import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, saveExpenses } from '../redux/actions';
import responseApi from '../services/responseApi';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  expensesBtn = async () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { dispatch } = this.props;
    const exchangeRates = await responseApi();
    const objStates = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch(saveExpenses(objStates));
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>

        <label htmlFor="value">
          Valor
          <input
            name="value"
            data-testid="value-input"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((element, index) => (
              <option key={ index }>
                { element }
              </option>
            ))}

          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }

          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            name="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.expensesBtn }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {

  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,

};

const mapStateToProps = ({ wallet }) => ({

  currencies: wallet.currencies,

});

export default connect(mapStateToProps)(WalletForm);

// Pair programming com os colegas do Onlinestore
