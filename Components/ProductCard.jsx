import s from "./../styles/product.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartProducts/action1";
import Link from "next/link";
import { Loader } from "../Components/Loader";

export default function ProductCard({ product }) {
  const { productsToCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!product) return <Loader />;
  return (
    <div className={s.container}>
      <div className={s.discription}>
        <div>
          <img src={product.image} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <div>{product.pack}</div>
          <strong>Цена: &nbsp;{product.price}</strong>
          <div className={s.inCard}>
            {productsToCart.filter((p) => p.id === product.id).length > 0 ? (
              <Link href={"/cart"}>
                <b style={{ color: "green" }}>товар в корзине</b>
              </Link>
            ) : (
              <b onClick={() => dispatch(addToCart(product))}>в корзину</b>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
