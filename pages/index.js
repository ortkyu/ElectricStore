import Head from "next/head";
import ProductList from "../Components/ProductList";
import { useProducts } from "../store/GlobalStait";
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import { useEffect } from "react";

export default function Home({ data }) {
  const { products, addProducts, sortProductByPrice } = useProducts();

  useEffect(() => {
    addProducts(data);
  }, []);

  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;

  return (
    <MainLayout>
      <div>
        <Head>
          <title>Электротехника лучшая на рынке европы</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={s.home}>
          <button onClick={() => sortProductByPrice(sortUpPrice)}>
            sortUP
          </button>
          <button onClick={() => sortProductByPrice(sortDownPrice)}>
            sortDown
          </button>
        </div>
        <ProductList arrayProduct={products} />
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
