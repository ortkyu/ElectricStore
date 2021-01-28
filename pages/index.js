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
} from "../store/products/action";
import { initializeStore } from "../store";


export default function Home() {
  const dispatch = useDispatch();

  const { minSearchPrice, maxSearchPrice, searchQuery } = useSelector(
    (state) => state.filter
  );

  const { pageSize, currentPage } = useSelector((state) => state.productsArray);

  let productsEvery = useSelector((state) => state.productsArray.products);
  let productsAll = productsEvery.filter(
    (p) =>
      p.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 &&
      (p.price >= minSearchPrice) & (p.price <= maxSearchPrice)
  );

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
