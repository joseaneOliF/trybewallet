// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_WALLET, SAVE_EXPENSES, DEL_EXPENSES, EDIT_FORM, EDIT_OFF, EDIT_ON } from
  '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_WALLET:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((el) => el !== 'USDT'),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DEL_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case EDIT_FORM:
  {
    const expensesId = state.expenses.map((element) => element.id);
    const findIndex = expensesId.indexOf(action.payload.id);
    const expensesView = [...state.expenses];
    expensesView[findIndex] = action.payload;
    return {
      ...state,
      expenses: expensesView,
    };
  }
  case EDIT_ON:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDIT_OFF:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
    };
  default:
    return state;
  }
};
export default wallet;
