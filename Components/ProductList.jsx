import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import s from "./../styles/productList.module.css"








export default function ProductList({arrayProduct}) {



  return (
<div>
  {arrayProduct.map(d=>
  <Link href={{
    pathname: '/catalog/[id]',
    query: { id: d.id },
  }}
  >
    <div className={s.wrapper}>
                          <div className={s.articles}>
                                  <div>
                                      <img src={d.image}/>
                                      <dl className={s.dt}>
                                          <small>{d.price}</small>
                                          <span>{d.title}</span>
                                      </dl>
                                  </div>
                          </div>
                      </div>
    </Link>
    )}
    </div>
  )
}