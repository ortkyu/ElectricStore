import Head from "next/head";
import ProductList from "../Components/ProductList";
import Paginator from "../Components/Paginator";
import { Loader } from "../Components/Loader";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import { useState, useEffect } from "react";
import {
  addProducts,
  addCountProduct,
  sortProductByPrice,
  setCurrentPage,
  addQuery,
  sortProductByName,
} from "../store/Action";
import { initializeStore } from "../store";

export default function Home() {
  const dispatch = useDispatch();

  let minSearchPrice = 0;
  let maxSearchPrice = 1000000;
  const { pageSize, currentPage, searchQuery } = useSelector(
    (state) => state.productsArray
  );
  const productsAll = useSelector((state) =>
    state.productsArray.products.filter(
      (p) =>
        p.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 &&
        (p.price >= minSearchPrice) & (p.price <= maxSearchPrice)
    )
  );

  debugger;
  let sortUpPrice = (a, b) => b.price - a.price;
  let sortDownPrice = (a, b) => a.price - b.price;

  let startNum = (currentPage - 1) * pageSize;
  let endNum = startNum + pageSize;
  let totalProductCount = productsAll.length;
  let products = productsAll.slice(startNum, endNum);

  return (
    <div className={""}>
      <MainLayout>
        <div>
          <div className={s.home}>
            Сортировка по цене: &nbsp;
            <button onClick={() => dispatch(sortProductByPrice(sortUpPrice))}>
              по возрастанию
            </button>
            <button onClick={() => dispatch(sortProductByPrice(sortDownPrice))}>
              по убыванию
            </button>
          </div>
          {!productsAll || productsAll.length < 1 ? (
            <div>
              <Loader />
            </div>
          ) : (
            <span className={s.pagination}>
              <Paginator
                totalProductCount={totalProductCount}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                currentPage={currentPage}
                productsAll={productsAll}
              />
            </span>
          )}
          <ProductList products={products} />
        </div>
      </MainLayout>
    </div>
  );
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(addProducts());

  return { props: { initialReduxState: reduxStore.getState() } };
}
