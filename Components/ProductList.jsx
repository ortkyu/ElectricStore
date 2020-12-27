import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import s from "./../styles/productList.module.css";

export default function ProductList({ arrayProduct }) {
  return (
    <div>
      {arrayProduct.map((d) => (
          <div key= {d.id}className={s.wrapper}>
        <Link
          href={{
            pathname: "/catalog/[id]",
            query: { id: d.id },
          }}
        >
            <div className={s.products}>
              <div>
                <img src={d.image} />
              </div>
              <div className={s.discription}>
                <small>{d.price}</small>
                <span>{d.title}</span>
              </div>
            </div>
            </Link>
          </div>
      ))}
    </div>
  );
}
