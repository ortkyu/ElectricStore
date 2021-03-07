import React from 'react';
import ProductList from "../Components/ProductList";
import Paginator from "../Components/Paginator";
import { Loader } from "../Components/Loader";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Components/Layout";
import s from "../styles/main.module.css";
import {
  addProducts,
  sortProductByPrice,
  setCurrentPage,
} from "../store/products/action4";
import { initializeStore } from "../store";
import { GetServerSideProps } from 'next'
import { RootState } from '../store/reducers';
import Head from "next/head";
import {Product} from "../store/products/types"


export default function Home () {
  const dispatch = useDispatch();

  const { minSearchPrice, maxSearchPrice, searchQuery } = useSelector(
    (state: RootState) => state.filter
  );

  const { pageSize, currentPage } = useSelector((state: RootState) => state.productsArray);

  const prod = useSelector((state: RootState) => state.productsArray.products);

  let productsEvery = useSelector((state: RootState) => state.productsArray.products);
  let productsAll: Product[] = productsEvery.filter(
    (p: Product) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (p.price >= minSearchPrice) && (p.price <= maxSearchPrice)
  );

  let sortUpPrice: number = (a, b) => b.price - a.price;
  let sortDownPrice: number = (a, b) => a.price - b.price;

  let startNum: number = (currentPage - 1) * pageSize;
  let endNum: number = startNum + pageSize;
  let totalProductCount: number = productsAll.length;
  let products: Product[] = productsAll.slice(startNum, endNum);

  
  return (
    <div>
      <MainLayout>
        <div>
          <div className={s.home}>
            <span>Сортировка по цене: &nbsp;</span>
            <button onClick={() => dispatch(sortProductByPrice(sortUpPrice))}>
            &uarr;
            </button>
            <button onClick={() => dispatch(sortProductByPrice(sortDownPrice))}>
            &darr;
            </button>
          </div>
          {!productsEvery ?? <Loader />}
          {!productsAll || productsAll.length < 1 ? (
            <div>товаров не найдено</div>
          ) : (
            <span className={s.pagination}>
              <Paginator
                totalProductCount={totalProductCount}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                currentPage={currentPage}
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
