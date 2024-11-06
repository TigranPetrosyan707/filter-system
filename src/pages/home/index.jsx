import { useState, useEffect } from "react";
import SortControl from "../../components/pages/SortControl";
import Products from "../../components/pages/Products";
import Pagination from "../../components/pages/Pagination";
import Skeleton from "../../components/pages/Products/Skeleton";
import styles from "./home.module.css";
import {
  Category,
  Brand,
  StarRating,
  PriceRange,
} from "../../components/pages/Sidebar";
import {
  useProductFilters,
  useFilteredAndSortedProducts,
  usePagination,
} from "../../hooks";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({ isLoading: true, error: null });
  const [currentPage, setCurrentPage] = useState(1);
  const { filter, dispatch, FILTER_ACTIONS } = useProductFilters();
  const itemsPerPage = 3;

  const filteredAndSortedProducts = useFilteredAndSortedProducts(
    products,
    filter
  );

  const { currentProducts, totalPages } = usePagination(
    filteredAndSortedProducts,
    currentPage,
    itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus({ isLoading: true, error: null });
      try {
        const response = await fetch("/db/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setStatus({ isLoading: false, error: null });
      } catch (err) {
        setStatus({ isLoading: false, error: err.message });
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <SortControl
        onSortChange={(value) =>
          dispatch({ type: FILTER_ACTIONS.SET_SORT, payload: value })
        }
      />
      <section>
        <div className={styles.product__section}>
          <div className={styles.product__filters}>
            <Category
              selectedCategories={filter.categories}
              onCategoryChange={(categories) =>
                dispatch({
                  type: FILTER_ACTIONS.SET_CATEGORY,
                  payload: categories,
                })
              }
            />
            <Brand
              selectedBrands={filter.brands}
              onBrandChange={(brands) =>
                dispatch({ type: FILTER_ACTIONS.SET_BRAND, payload: brands })
              }
            />
            <StarRating
              ratingFilter={filter.rating}
              onRatingChange={(rating) =>
                dispatch({ type: FILTER_ACTIONS.SET_RATING, payload: rating })
              }
            />
            <PriceRange
              minPrice={filter.minPrice}
              maxPrice={filter.maxPrice}
              onPriceChange={(minPrice, maxPrice) =>
                dispatch({
                  type: FILTER_ACTIONS.SET_PRICE,
                  payload: { minPrice, maxPrice },
                })
              }
            />
          </div>
          <div>
            <ul className={styles.product__list}>
              {status.isLoading ? (
                new Array(3)
                  .fill(null)
                  .map((_, index) => <Skeleton key={index} />)
              ) : (
                <Products data={currentProducts} />
              )}
            </ul>
            {filteredAndSortedProducts.length > 3 && (
              <Pagination
                totalItems={filteredAndSortedProducts.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
