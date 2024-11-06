import { useMemo } from "react";

export const useFilteredAndSortedProducts = (products, filter) => {
  return useMemo(() => {
    let filtered = products;

    if (filter.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filter.categories.includes(product.category)
      );
    }

    if (filter.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filter.brands.includes(product.brand)
      );
    }

    if (filter.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= filter.rating);
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filter.minPrice && product.price <= filter.maxPrice
    );

    switch (filter.sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating-asc":
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popularity-asc":
        filtered.sort((a, b) => a.popularity - b.popularity);
        break;
      case "popularity-desc":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, filter]);
};
