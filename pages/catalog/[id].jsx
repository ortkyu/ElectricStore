import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductCard from "../../Components/ProductCard";
import { useSelector, useDispatch  } from 'react-redux'
import MainLayout from "../../Components/Layout";
import {changeProductById} from "../../store/Action"


export default function Product() {
  const router = useRouter();
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productsArray)

  useEffect(() => {
    dispatch(changeProductById(router.query.id))
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Электротехника </title>
      </Head>
      <div>
        <ProductCard product={products[0]} />
      </div>
    </MainLayout>
  );
}
