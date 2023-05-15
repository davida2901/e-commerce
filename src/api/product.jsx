import { useEffect, useState } from "react";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export function useProducts() {
  const [getProducts, setGetProducts] = useState("");

  useEffect(() => {
    fetch(PRODUCTS_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setGetProducts(products)
      });
  }, []);

  return getProducts
}
