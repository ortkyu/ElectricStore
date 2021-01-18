import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import s from "./../styles/productList.module.css";
import { useSelector, useDispatch  } from 'react-redux'
import {addToCart} from "../store/Action"
import MainLayout from "../Components/Layout";



export default function CartList() {
const { productsToCart } = useSelector(state => state.cart)
 const dispatch = useDispatch()


  debugger
  return (
    <MainLayout>
    <div>
      {productsToCart.map((d) => (
          <div  key= {d.id}className={s.wrapper}>
            <div className={s.products}>
              <div>
                <img src={d.image} />
              </div>
              <div className={s.discription}>
                <small>{d.price}</small>
                <span>{d.title}</span>
              </div>
              </div>
          </div>
      ))}
    </div>
    </MainLayout>
  )
}
