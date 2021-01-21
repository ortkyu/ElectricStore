import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import s from "./../styles/productList.module.css";
import { useSelector, useDispatch  } from 'react-redux'
import {addToCart, addQuantity, subQuantity, removeToCart} from "../store/Action"
import MainLayout from "../Components/Layout";



export default function CartList() {
const { productsToCart } = useSelector(state => state.cart)
 const dispatch = useDispatch()

if (productsToCart.length < 1) 
  return ( 
  <MainLayout>
    <div>в корзине нет товаров</div>
  </MainLayout>
)
  debugger
  return (
    <MainLayout>
    <div>
      {productsToCart.map((d) => (
          <div  key= {d.id}className={s.wrapper}>
            <div className={s.products}>
              <div className={s.productsInfo}>
                <div>
                  <img src={d.image} />
                </div>
                <div className={s.discription}>
                  <small>{d.price}</small>
                  <span>{d.title}</span>
                </div>
              </div>
              <div  className={s.toCard}> 
              <b onClick={()=>dispatch(removeToCart(d.id))}>x</b>
                <div className={s.changeQuant}>
                  <div onClick={()=>dispatch(addQuantity(d.id))}>+</div>
                  <div>{d.quantity}</div>
                  <div onClick={()=>dispatch(subQuantity(d.id))}>-</div>
                </div>
              </div>
              </div>
          </div>
      ))}
    </div>
    </MainLayout>
  )
}
