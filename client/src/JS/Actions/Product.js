//importation
import axios from "axios"
import { FAIL_PRODUCT, LOAD_PRODUCT, SUCC_PRODUCT } from "../ActionTypes/Product"


// getALLProducts

export const  getAllProduct=()=> async (dispatch)=>{
    dispatch({type : LOAD_PRODUCT})
try {
    let result=await axios.get("/api/product/getAllp")
    dispatch({type: SUCC_PRODUCT,payload: result.data})
    
} catch (error) {
    dispatch({type: FAIL_PRODUCT,payload: error.response})
}
}
// ADD PRODUCT
export const addProduct = (newProduct) => async (dispatch) => {
    try {
      await axios.post('/api/product/addp', newProduct);
      dispatch(getProducts());
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response });
    }
  };
  
  // DELETE PRODUCT
  export const deleteProduct= (idP) => async (dispatch) => {
    try {
      await axios.delete(`/api/product/deletep/${idP}`);
      dispatch(getProducts());
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response });
    }
  };
  
  // EDIT PRODUCT
  export const updateProduct= (idP, newProduct) => async (dispatch) => {
    try {
      await axios.put(`/api/product/updatep/${idP}`, newProduct);
      dispatch(getProducts());
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response });
    }
  };
  
