import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductCard from "../../Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../../Components/Layout";

export default function Product() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <Head>
        <title>Электротехника </title>
      </Head>
      <div>
        <ProductCard />
      </div>
    </MainLayout>
  );
}
