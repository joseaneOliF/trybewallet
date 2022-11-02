import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>

        <label htmlFor="valor">
          Valor
          <input
            name="valor"
            data-testid="value-input"
            type="number"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            name="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="moeda">
          <select data-testid="currency-input" name="moeda">
            { currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {' '}
                { currency }
                {' '}
              </option>
            ))}

          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select
            name="pagamento"
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria
          <select
            name="categoria"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

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
