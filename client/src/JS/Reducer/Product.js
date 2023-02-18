//importation

import { FAIL_PRODUCT, LOAD_PRODUCT, SUCC_PRODUCT } from "../ActionTypes/Product";


// INITIAL STATE
const initialState = {
    products: [],
    errors: null,
    load: false,
    // productToGet: {},
  };

  // PURE FUNCTION
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCT:
      return { ...state, load: true };
    case SUCC_PRODUCT:
      return { ...state, load: false, products: payload.products };
  
    case FAIL_PRODUCT:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
export default productReducer;