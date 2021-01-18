import Head from "next/head";
import ProductList from "../Components/ProductList";
import { useSelector, useDispatch  } from 'react-redux'
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import { useEffect } from "react";
import {addProducts, sortProductByPrice} from "../store/Action"


export default function Home({ data }) {
  const dispatch = useDispatch()

  //const {  addProducts, sortProductByPrice } = useProducts();
  const { products } = useSelector(state => state.productsArray)

  useEffect(() => {
    dispatch(addProducts(data))
  }, [])

  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;

if (!products || products.length < 1) return (
<MainLayout>
  <div>loading...</div>
  </MainLayout>
  )
  return (
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
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/rows.json");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
