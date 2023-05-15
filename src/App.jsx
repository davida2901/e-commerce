import { Header } from "./Components/Header";
import { ProductsList } from "./Components/Products";
import { useProducts } from "./api/product";
import { useFilters } from "./hooks/useFilter";

function App() {
  const products = useProducts();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <ProductsList products={filteredProducts} />
    </>
  );
}

export default App;
