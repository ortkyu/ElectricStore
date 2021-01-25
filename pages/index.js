import Head from "next/head";
import ProductList from "../Components/ProductList";
import { useSelector, useDispatch  } from 'react-redux'
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import {  useState, useEffect } from "react";
import {addProducts, addCountProduct, sortProductByPrice, setCurrentPage} from "../store/Action"
import { initializeStore } from '../store'


export default function Home() {
  
  const dispatch = useDispatch()

  const { products, totalProductCount, pageSize, currentPage } = useSelector(state => state.productsArray)
  useEffect(() => {
    let initStartId = (currentPage-1) * 3

    dispatch(addProducts(initStartId)),
    dispatch(addCountProduct())
  }, [])

  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;

  let pagesCount = Math.ceil(totalProductCount / pageSize);
  let portionSize = 3
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }


   let onPageChanged = (p) => {
  
   let startId = (p-1) * 3
    dispatch(setCurrentPage(p)),
    dispatch(addProducts(startId))
    console.log(startId);

}
if (!products || products.length < 1) return (
<MainLayout>
  <div>loading...</div>
  </MainLayout>
  )
  return (
    <div className={''}>
    <MainLayout>
      <div>
        <Head>
          <title>Электротехника лучшая на рынке европы</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={s.home}>
          <button onClick={() => dispatch(sortProductByPrice(sortUpPrice))}>
            sortUP
          </button>
          <button onClick={() => dispatch(sortProductByPrice(sortDownPrice))}>
            sortDown
          </button>
        </div>
        <span className={s.pagination}>
          { portionNumber > 1 &&
        <div onClick={() => { setPortionNumber(portionNumber - 1) }}>пред</div> }
        <div>
        {pages
              .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
              .map((p) => {
                return <span  className={currentPage === p ? s.selectNumberPage : s.numberPage}
                             key={p}
                             onClick={(e) => {
                              onPageChanged(p)
                             }}>{p}</span>
            })}
          </div>
{ portionCount > portionNumber &&
            <div onClick={() => { setPortionNumber(portionNumber + 1) }}>след</div> }
            </span>
        <ProductList />
      </div>
    </MainLayout>
    </div>
  );
}


// export async function getServerSideProps() {
//   const reduxStore = initializeStore()
//   const { dispatch } = reduxStore
   
//   let startId = currentPage * pageSize

//     await dispatch(addProducts())
     
//   return { props: { initialReduxState: reduxStore.getState() } }
// }