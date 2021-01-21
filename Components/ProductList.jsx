import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import s from "./../styles/productList.module.css";
import { useSelector, useDispatch  } from 'react-redux'
import {addToCart} from "../store/Action"



export default function ProductList() {
 const { products } = useSelector(state => state.productsArray)
 const { productsToCart } = useSelector(state => state.cart)

 const dispatch = useDispatch()

let toCard = (d) => {
  dispatch(addToCart(d))
} 

  debugger
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
              { productsToCart.includes(d) ? 
              <Link href={"/cart"}>
              <div style={{color:"green"}}>товар в корзине</div>
              </Link> 
              :
              <div onClick={()=>toCard(d)}>в корзину</div>
              }
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}
