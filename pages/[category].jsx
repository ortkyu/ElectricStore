import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Components/Layout";
import ProductList from "../Components/ProductList";
import { useRouter } from "next/router";
import Head from "next/head";
import {addProducts} from "../store/products/action";
import { useEffect } from "react";

export default function CategoryProduct() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addProducts())
  },[router.query.category])

  const productsAll = useSelector((state) => state.productsArray.products);

  const productsSortCategory = useSelector((state) =>
    productsAll.filter((p) => p.vendor == router.query.category)
  );

  return (
    <>
      <MainLayout>
      <Head>
        <title></title>
      </Head>
        <ProductList products={productsSortCategory} />
      </MainLayout>
    </>
  );
}
