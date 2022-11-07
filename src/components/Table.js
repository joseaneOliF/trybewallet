import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpenses, editOn } from '../redux/actions';

class Table extends Component {
  funcEditBtn = (id) => {
    const { dispatch } = this.props;
    dispatch(editOn(id));
  };

  deleteBtn = (id) => {
    const { expenses, dispatch } = this.props;
    const filterExp = expenses.filter((element) => element.id !== id);
    dispatch(delExpenses(filterExp));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((element) => (
            <tr key={ element.id }>

              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{Number(element.value).toFixed(2)}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
              <td>
                {Number(element.value * element.exchangeRates[element.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.funcEditBtn(element.id) }
                >
                  Editar

                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteBtn(element.id) }
                >
                  Excluir

                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func,
  expenses: PropTypes.arrayOf,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
