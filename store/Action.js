export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_PRODUCTS_COUNT = 'ADD_PRODUCTS_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

//  fetch(`https://newsarticles-1ce5d.firebaseio.com/articles.json?orderBy="$key"&limitToFirst=3`
// let startId = articles[articles.length - 1] && articles[articles.length - 1].id - 1
// let lastArticle = articles[articles.length - 1]

// let startId = articles[articles.length - 1] && articles[articles.length - 1].id + 1

// const [disableButton, setDisable] = useState(false)

// async function moreArticles() {
// let articleRef = await firebase.database().ref('articles').orderByChild('id').startAt(startId).limitToFirst(3)
// let articleRef = await firebase.database().ref('articles').orderByChild('id').endAt(startId).limitToLast(3)





let filFech = `https://electroproduct-f9df8-default-rtdb.firebaseio.com/.json?orderBy="$key"&startAt="4"&limitToFirst=3`

let baseUrl = "https://electroproduct-f9df8-default-rtdb.firebaseio.com/.json"
export const addProducts = (startId=0) => (dispatch) => (
    fetch(`https://electroproduct-f9df8-default-rtdb.firebaseio.com/.json?orderBy="$key"&startAt="${startId}"&limitToFirst=3`)
    .then( res => res.json())
    .then( data => dispatch({type: ADD_PRODUCTS, data: Object.values(data)}))
    )

    export const addCountProduct = () => (dispatch) => (
        fetch(`${baseUrl}?shallow=true`)
            .then( res => res.json())
            .then( data => dispatch({type: ADD_PRODUCTS_COUNT, data}))
    )

    export const changeProductById = (id) => ({ type: PRODUCT_BY_ID, id })
    
    export const sortProductByPrice = (sortSelect) => ({type: SORT_BY_PRICE, sortSelect}) 

    export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}) 

    export const addToCart = (pr) => ({type: ADD_TO_CART, pr})

    export const addQuantity = (id) => ({type: ADD_QUANTITY, id})

    export const subQuantity = (id) => ({type: SUB_QUANTITY, id})

    export const removeToCart = (id) => ({type: REMOVE_FROM_CART, id})

