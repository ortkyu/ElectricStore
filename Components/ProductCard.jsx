import s from "./../styles/product.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../store/Action"
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";




export default function ProductCard({ product }) {
  const { productsToCart } = useSelector(state => state.cart)
  const router = useRouter();

  const dispatch = useDispatch()

  //  const handleSubmit = (event) => {
  //   alert(comment);
  //   addComment(comment)
  //   PostComment(comment)
  //   event.preventDefault();
  // }

  // let commentText = articles && articles.comments && Object.entries(articles.comments).map(c => c[1])

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => fetch(`https://electroproduct-f9df8-default-rtdb.firebaseio.com/${router.query.id}/comments.json`, {
    method: 'POST',
    body: JSON.stringify(data.exampleRequired),
  });
 

  if (!product) return <div>No product</div>;
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
          <input name="exampleRequired" ref={register({ minLength: 3 })} />
          <button type="submit" >send</button>
        </form>
      </div>
      <div className={s.comment}>{''}</div>
        {Object.values(product.comments).reverse().map(c => <div className={s.comment}>{c}</div>)}

    </div>
  )
}
