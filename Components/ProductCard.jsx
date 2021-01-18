import s from "./../styles/product.module.css";

export default function ProductCard({ product }) {
  debugger
  if (!product) return <div>No product</div>;
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div>
          <img src={product.image} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <div>{product.vendor}</div>
          <div>{product.pack}</div>
          <strong>Цена: {product.price}</strong>
        </div>
      </div>
    </div>
  );
}
