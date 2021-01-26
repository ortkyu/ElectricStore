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
          <div>
              <h1>{product.title}</h1>
              <div>{product.vendor}</div>
              <div>{product.pack}</div>
              <strong>Цена:  &nbsp;{product.price}</strong>
          </div>
        </div>
      </div>
      <span className={''}>
              { productsToCart.filter(p=> p.id===product.id).length > 0 ? 
              <Link href={"/cart"}>
              <b style={{color:"green"}}>товар в корзине</b>
              </Link> 
              :
              <b onClick={()=> dispatch(addToCart(product))}>в корзину</b>
              }
          </span>
    </div>
  );
}
