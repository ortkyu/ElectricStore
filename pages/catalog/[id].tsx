import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductCard from "../../Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../../Components/Layout";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../api";
import { addProductInfo } from "../../store/productInfo/action";
import { initializeStore } from "../../store";
import s from "../../styles/product.module.css";
import { GetServerSideProps } from 'next'
import { RootState } from '../../store/reducers';



export default function Product() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.productInfo);
  const { productsToCart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (productsToCart.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(productsToCart));
    }
  });

  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data) => {
    let inputText: string  = data.commentText;
    postComment(inputText);
    dispatch(addProductInfo(router.query.id))
    reset();
  };

  let postComment = (inputText: string) => {
    fetch(`${baseUrl}/${router.query.id}/comments.json`, {
      method: "POST",
      body: JSON.stringify(inputText),
    });
  };

  return (
    <MainLayout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div>
        <ProductCard product={product} />
      </div>
      <div className={s.container}>
          {errors.commentText && <p>минимум 3 символа</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="commentText"
              ref={register({ required: true, minLength: 3 })}
            />
            <button type="submit">send</button>
          </form>
        {product.comments &&
          Object.values(product.comments)
            .reverse()
            .map((c) => <div  className={s.comment}>{c}</div>)}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(router) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  let id = router.query.id;

  await dispatch(addProductInfo(id));
  return { props: { initialReduxState: reduxStore.getState()}};
}
