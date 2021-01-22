import Head from "next/head";
import ProductList from "../Components/ProductList";
import { useSelector, useDispatch  } from 'react-redux'
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import { useEffect } from "react";
import {addProducts, sortProductByPrice} from "../store/Action"
//import { initializeStore } from '../store'


export default function Home() {
  
  const dispatch = useDispatch()

  const { products } = useSelector(state => state.productsArray)
debugger
  useEffect(() => {
    dispatch(addProducts())
  }, [])

  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;

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
        <ProductList />
      </div>
    </MainLayout>
    </div>
  );
}


// export async function getServerSideProps() {
//   const reduxStore = initializeStore()
//   const { dispatch } = reduxStore
   
//     await dispatch(addProducts())
     
//   return { props: { initialReduxState: reduxStore.getState() } }
// }