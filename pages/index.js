import Head from "next/head";
import ProductList from "../Components/ProductList";
import { useSelector, useDispatch  } from 'react-redux'
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import { useEffect } from "react";
import {addProducts, addCountProduct, sortProductByPrice, setCurrentPage} from "../store/Action"
import { initializeStore } from '../store'


export default function Home() {
  
  const dispatch = useDispatch()

  const { products, totalProductCount, pageSize, currentPage } = useSelector(state => state.productsArray)
  console.log(totalProductCount);
debugger
  useEffect(() => {
    dispatch(addCountProduct())
  }, [])

  useEffect(() => {
    dispatch(addProducts())
  }, [])

  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;



  let pagesCount = Math.ceil(totalProductCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  let startId = currentPage * pageSize +1

let onPageChanged = (p) => {
  dispatch(setCurrentPage(p)),
    dispatch(addProducts(startId))
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
        <div>
        {pages.map((p) => {
                return <span  className={currentPage === p && s.selectNumberPage}
                             key={p}
                             onClick={(e) => {
                              onPageChanged(p)
                             }}>{p}</span>
            })}
            </div>
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