/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case "ADD_WEB3_PROVIDER":
      const { provider, signer, accounts, Contract } = action.payload;
      return {
        ...state,
        provider,
        signer,
        accounts,
        Contract,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
