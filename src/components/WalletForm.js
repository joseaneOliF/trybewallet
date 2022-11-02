import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <form>

        <label htmlFor="valor">
          Valor
          <input
            name="valor"
            data-test-id="value-input"
            type="number"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            name="description"
            data-test-id="description-input"
          />
        </label>
        {/*
          <label>
         <select data-testid="currency-input">
          <option></option>
         </select>
        </label> */}

        <label htmlFor="pagamento">
          Método de pagamento
          <select
            name="pagamento"
            data-test-id="method-input"
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
            data-test-id="tag-input"
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

export default WalletForm;
