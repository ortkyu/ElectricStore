import s from "./../styles/product.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../store/Action"
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {  useState, useEffect } from "react";
import {Loader} from "../Components/Loader";




export default function ProductCard( ) {
  const { productsToCart } = useSelector(state => state.cart)
  const router = useRouter();

  const dispatch = useDispatch()
  const [comment, setComment] = useState()
  const [product, setProduct] = useState()

useEffect(()=>{
  fetch(`https://electroproduct-f9df8-default-rtdb.firebaseio.com/${router.query.id}.json`)
  .then(res => res.json())
  .then(data => setProduct(data))
},[router.query.id])
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = data => {
    let {exampleRequired} = data
    postComment(exampleRequired)
    setComment(exampleRequired)
    reset()
  }

 let postComment = (exampleRequired) => {
   fetch(`https://electroproduct-f9df8-default-rtdb.firebaseio.com/${router.query.id}/comments.json`, {
  method: 'POST',
  body: JSON.stringify(exampleRequired),
})}


  if (!product) return <Loader/>
  return (
    <div className={s.container}>
    <div className={s.discription}>
      <div>
        <img src={product.image} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <div>{product.pack}</div>
        <strong>Цена:  &nbsp;{product.price}</strong>
        <div className={s.inCard}>
        { productsToCart.filter(p => p.id === product.id).length > 0 ?
          <Link href={"/cart"}>
            <b style={{ color: "green" }}>товар в корзине</b>
          </Link>
          :
          <b onClick={() => dispatch(addToCart(product))}>в корзину</b>
        }
        </div>
      </div>
      </div>
      <div>
      {errors.exampleRequired && <p>минимум 3 символа</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="exampleRequired" ref={register({ required: true, minLength: 3 })} />
          <button type="submit" >send</button>
        </form>
      </div>
      {comment && <div className={s.comment}>{comment}</div>}
        {product.comments && Object.values(product.comments).reverse().map(c => <div className={s.comment}>{c}</div>)}
    </div>
  )
}
