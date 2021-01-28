import { combineReducers } from 'redux'
import cartReducer from  './cartProducts/cartReducer'
import filterReducer from './filter/filter'
import productsReducer from  './products/productsReducer'
import productInfoReducer from "./productInfo/productInfoReducer"


export default combineReducers({
    cart: cartReducer,
    productsArray: productsReducer,
    filter: filterReducer,
    productInfo: productInfoReducer,
  })

