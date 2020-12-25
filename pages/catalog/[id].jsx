import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import ProductCard from "../../Components/ProductCard"
import Router from 'next/dist/next-server/server/router'
import {useProducts} from "../../Components/GlobalStait"
import MainLayout from "../../Components/Layout"




export default function Product() {



  //const [product, setProduct] = useState(null)
  const router = useRouter()


  const { products, addProductById} = useProducts()

  // let loadData = () => {
  //   fetch(`https://electroproduct-f9df8-default-rtdb.firebaseio.com/3.json`)
  //   .then((response) => response.json())
  //    .then((data) => setProduct(data))
  // }

  useEffect(()=>{
    addProductById(router.query.id)
  },[])
debugger



  return (
    <MainLayout>
<div>
<Head>
                <title>
                  {/* {post.title} | Next.js Blog Example with {CMS_NAME} */}
                </title>
              </Head>
    <div>
    <ProductCard product={products[0]}/>
    </div>
    </div>
    </MainLayout>
  )
}