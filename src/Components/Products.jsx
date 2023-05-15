import { useProducts } from "../api/product";

export function ProductsList({products}) {
  return (
    <main className="products">
      {products &&
        products.map((products) => {
          return (
            <article className="product-card" key={products.id}>
              <h2 className="product-title">{products.title}</h2>
              <img src={products.thumbnail} alt={products.title} />
              <ul className="product-details">
                <li className="product-price"> Price: US${products.price}</li>
                <li className="product-discount">
                  Discount Percentage: US${products.discountPercentage}
                </li>
                <li className="product-stock">
                  In stock: {products.stock} units
                </li>
              </ul>
            </article>
          );
        })}
    </main>
  );
}
