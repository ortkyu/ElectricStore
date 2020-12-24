import Head from 'next/head'
import { useEffect, useState } from 'react'
import ProductList from "../Components/ProductList"
import {useProducts} from "../Components/GlobalStait"
import Button from '@material-ui/core/Button';
import MainLayout from "../Components/Layout"


export default function Home({data}) {


//let [arrayProduct, setArrayProduct] = useState([])
const {products, addProducts, sortProductByPrice} = useProducts()

// let loadData = () => {
//   fetch('https://electroproduct-f9df8-default-rtdb.firebaseio.com/.json')
//   .then((response) => response.json())
//    .then((data) => setArrayProduct(data))
// }




useEffect(()=>{
  addProducts(data)
},[])
debugger
  return (
    <MainLayout>
    <div >
      <Head>
        <title>Электротехника для вас</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={sortProductByPrice}>sort</button>
      <ProductList arrayProduct={products}/>
    </div>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/rows.json')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data}
  }
}


// export async function getServerSideProps() {
//   // get the content of the page from the cache or
//   // load it from the API if it doesn't exists in the cache yet.
//   const { hero } = await getOrFerchPageFromCms({ filter: { slug: 'home' } });

//   // fetch latest products from the API
//   const products = await fetchLatestProducts({ limit: 6 });

//   return {
//     props: { products, hero },
//   };
// }