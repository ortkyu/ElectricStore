import { useEffect, useState } from "react";
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






export default function Product() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productInfo);
  const { productsToCart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productsToCart.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(productsToCart));
    }
  });

  const [comment, setComment] = useState();

  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data) => {
    let { exampleRequired } = data;
    postComment(exampleRequired);
    setComment(exampleRequired);
    reset();
  };

  let postComment = (exampleRequired) => {
    fetch(`${baseUrl}/${router.query.id}/comments.json`, {
      method: "POST",
      body: JSON.stringify(exampleRequired),
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
          {errors.exampleRequired && <p>минимум 3 символа</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="exampleRequired"
              ref={register({ required: true, minLength: 3 })}
            />
            <button type="submit">send</button>
          </form>
        {comment && <div className={s.comment}>{comment}</div>}
        {product.comments &&
          Object.values(product.comments)
            .reverse()
            .map((c) => <div className={s.comment}>{c}</div>)}
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
