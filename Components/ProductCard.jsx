import s from "./../styles/product.module.css";
import { useSelector, useDispatch  } from 'react-redux'
import {addToCart} from "../store/Action"
import Link from "next/link";




export default function ProductCard({ product }) {
  const { productsToCart } = useSelector(state => state.cart)

 const dispatch = useDispatch()
  
  if (!product) return <div>No product</div>;
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div>
          <img src={product.image} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <div>{product.vendor}</div>
          <div>{product.pack}</div>
          <strong>Цена: {product.price}</strong>
        </div>
      </div>
      <div className={s.toCard}>
              { productsToCart.filter(p=> p.id===product.id).length > 0 ? 
              <Link href={"/cart"}>
              <div style={{color:"green"}}>товар в корзине</div>
              </Link> 
              :
              <div onClick={()=> dispatch(addToCart(product))}>в корзину</div>
              }
              </div>
    </div>
  );
}
