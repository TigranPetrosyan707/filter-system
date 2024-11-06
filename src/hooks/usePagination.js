import { useMemo } from "react";

export const usePagination = (products, currentPage, itemsPerPage) => {
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = useMemo(() => {
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [products, indexOfFirstProduct, indexOfLastProduct]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return {
    currentProducts,
    totalPages,
  };
};
