import {combineReducers} from 'redux'
import productReducer from './Product.js';


const rootReducer = combineReducers ({ productReducer})


export default rootReducer;