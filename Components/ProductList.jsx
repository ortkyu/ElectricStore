import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import s from "./../styles/productList.module.css";
import { useSelector, useDispatch  } from 'react-redux'
import {addToCart} from "../store/Action"



export default function ProductList({ products }) {
 const { productsToCart } = useSelector(state => state.cart)

 const dispatch = useDispatch()

  return (
    <div>
      {products.map((d) => (
          <div  key= {d.id} className={s.wrapper}>
            <div className={s.products}>
            <Link
            href={{
            pathname: "/catalog/[id]",
            query: { id: d.id },
          }}>
            <div className={s.productsInfo}>
              <div>
                <img src={d.image} />
              </div>
              <div className={s.discription}>
                <small>{d.price}руб</small>
                <span>{d.title}</span>
              </div>
              </div>
              </Link>
              <div className={s.toCard}>
                { productsToCart.filter(p=> p.id===d.id).length > 0 ? 
                <Link href={"/cart"}>
                <b style={{color:"green"}}>товар в корзине</b>
                </Link> 
                :
                <div onClick={()=>dispatch(addToCart(d))}>в корзину</div>
                }
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}
