// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_WALLET = 'ADD_WALLET';
// export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_CURRENCIE = 'REQUEST_CURRENCIE';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

function requestCurrencie() {
  return { type: REQUEST_CURRENCIE };
}

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const saveWalletData = (payload) => ({
  type: ADD_WALLET,
  payload,
});

// function failedRequest(error) {
//   return {
//     type: REQUEST_FAILED,
//     payload: error,
//   };
// }

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencie());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(saveWalletData(json)));
    // .catch((error) => dispatch(failedRequest(error)));
  };
}
