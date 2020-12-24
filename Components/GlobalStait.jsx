import React, {useContext, useReducer} from 'react'



const GlobalContext = React.createContext();

export const useProducts = () => {
    return useContext(GlobalContext)
}

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const PRODUCT_BY_ID = 'PRODUCT_BY_ID'
const SORT_BY_PRICE = 'SORT_BY_PRICE'

const reducer = (state, action) => {

    switch (action.type) {
        case ADD_PRODUCTS: return {...state, products: [ ...action.newProducts]}

        case PRODUCT_BY_ID: return {...state, products: state.products.filter(product => product.id == action.id)}

        case SORT_BY_PRICE: return {...state, products: state.products.sort(( a, b ) => a.price - b.price)}

        default: return state
    }
}

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        products: []
    })
console.log(state.products)
    const addProducts = (newProducts) => dispatch({type: ADD_PRODUCTS, newProducts})
    const addProductById = (id) => dispatch({type: PRODUCT_BY_ID, id})
    const sortProductByPrice = (price) => dispatch({type: SORT_BY_PRICE, price})

    return(
        <GlobalContext.Provider value ={{
            products: state.products,
            addProducts,
            addProductById,
            sortProductByPrice
        }} >
            {children}
        </GlobalContext.Provider>
    )
}