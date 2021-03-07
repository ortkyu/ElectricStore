import Link from "next/link";
import s from "./../styles/productList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  subQuantity,
  removeToCart,
} from "../store/cartProducts/action";
import MainLayout from "../Components/Layout";
import { useEffect } from "react";
import Head from "next/head";



export default function CartList() {
  const { productsToCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = productsToCart.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(productsToCart));
  });

  let remouveFromCard = (id) => {
    localStorage.clear();
    dispatch(removeToCart(id));
  };

  if (productsToCart.length < 1)
    return (
      <MainLayout>
        <div>в корзине нет товаров</div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className={s.totalPrice}>
      Общая сумма заказа: &nbsp;<b>{total}&nbsp;pублей</b>
      </div>
      <div>
        {productsToCart.map((d) => (
          <div key={d.id} className={s.wrapper}>
            <div className={s.products}>
              <Link
                href={{
                  pathname: "/catalog/[id]",
                  query: { id: d.id },
                }}
              >
                <div className={s.productsInfo}>
                  <div>
                    <img src={d.image} />
                  </div>
                  <div className={s.discription}>
                    <small>{d.price}</small>
                    <span>{d.title}</span>
                  </div>
                </div>
              </Link>
              <div className={s.toCard}>
                <b onClick={() => remouveFromCard(d.id)}>x</b>
                <div className={s.changeQuant}>
                  <div onClick={() => dispatch(addQuantity(d.id))}>+</div>
                  <div>{d.quantity}</div>
                  <div onClick={() => dispatch(subQuantity(d.id))}>-</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
