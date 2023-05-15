import { useId } from "react";
import { useFilters } from "../hooks/useFilter";
import { useProducts } from "../api/product";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const products = useProducts();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price range: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters && filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category: </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          {products &&
            [...new Set(products.map((product) => product.category))].map(
              (category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              }
            )}
        </select>
      </div>
    </section>
  );
}
