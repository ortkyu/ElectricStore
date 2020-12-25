import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductCard from "../../Components/ProductCard";
import { useProducts } from "../../store/GlobalStait";
import MainLayout from "../../Components/Layout";

export default function Product() {
  const router = useRouter();
  const { products, addProductById } = useProducts();

  useEffect(() => {
    addProductById(router.query.id);
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
