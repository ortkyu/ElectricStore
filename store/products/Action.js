export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const ADD_QUARY = 'ADD_QUARY';


let baseUrl = "https://electroproduct-f9df8-default-rtdb.firebaseio.com/.json"

   export const addProducts = (startId=0) => (dispatch) => (
        fetch(`${baseUrl}`)
        .then( res => res.json())
        .then( data => dispatch({type: ADD_PRODUCTS, data: Object.values(data).filter(d=>d)}))
        )

    
    export const sortProductByPrice = (sortSelect) => ({type: SORT_BY_PRICE, sortSelect}) 

    export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
    
    export const addQuery = (e) => ({type: ADD_QUARY, e})



    
