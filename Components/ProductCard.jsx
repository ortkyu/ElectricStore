import styles from '../styles/Home.module.css'
import s from "./../styles/product.module.css"
import Head from 'next/head'





export default function ProductCard({product}) {

if(!product) return <div>No product</div>
return (
<div>
              <Head>
                <title>
                  {/* {post.title} | Next.js Blog Example with {CMS_NAME} */}
                </title>
              </Head>
    <div className={s.container}>
      <div className={s.content}>
        <img src ={product.image}/>
        {product.title}
        {product.vendor}
      </div>
    </div>
    </div>
  )
}