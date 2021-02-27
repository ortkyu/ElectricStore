import { useSelector } from "react-redux";
import MainLayout from "../Components/Layout";
import ProductList from "../Components/ProductList";
import { useRouter } from "next/router";
import Head from "next/head";


export default function CategoryProduct() {
  const router = useRouter();

  const productsAll = useSelector((state) => state.productsArray.products);

  const productsSortCategory = useSelector((state) =>
    productsAll.filter((p) => p.vendor == router.query.category)
  );

  return (
    <>
      <MainLayout>
      <Head>
        <title>jjj</title>
      </Head>
        <ProductList products={productsSortCategory} />
      </MainLayout>
    </>
  );
}
