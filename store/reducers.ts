import { combineReducers } from 'redux'
import cartReducer from  './cartProducts/cartReducer'
import filterReducer from './filter/filter'
import productsReducer from  './products/productsReducer'
import productInfoReducer from "./productInfo/productInfoReducer"


 const rootReducer = combineReducers({
    cart: cartReducer,
    productsArray: productsReducer,
    filter: filterReducer,
    productInfo: productInfoReducer,
  })


  export type RootState = ReturnType<typeof rootReducer>

  export default rootReducer