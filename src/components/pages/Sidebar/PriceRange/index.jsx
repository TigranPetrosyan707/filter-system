import { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import styles from "./priceRange.module.css";
import Dropdown from "../../../shared/Dropdown";

const PriceRange = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [debouncedMinPrice, setDebouncedMinPrice] = useState(minPrice);
  const [debouncedMaxPrice, setDebouncedMaxPrice] = useState(maxPrice);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onPriceChange(debouncedMinPrice, debouncedMaxPrice);
    }, 500);

    return () => clearTimeout(timeout);
  }, [debouncedMinPrice, debouncedMaxPrice, onPriceChange]);

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= maxPrice - 100) {
      setMinPrice(newMin);
      setDebouncedMinPrice(newMin);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= minPrice + 100) {
      setMaxPrice(newMax);
      setDebouncedMaxPrice(newMax);
    }
  };

  const minPercentage = (minPrice / 1000) * 100;
  const maxPercentage = (maxPrice / 1000) * 100;

  return (
    <Dropdown title={"Price Range"}>
      <>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          <FaDollarSign color="#85BB65" />
          {minPrice} - <FaDollarSign color="#85BB65" />
          {maxPrice}
        </span>
        <div className={styles.slider}>
          <div
            className={styles.progress}
            style={{
              left: `${minPercentage}%`,
              right: `${100 - maxPercentage}%`,
            }}
          ></div>
        </div>
        <div className={styles.range__input}>
          <input
            type="range"
            min={0}
            max={1000}
            value={minPrice}
            onChange={handleMinChange}
          />
          <input
            type="range"
            min={0}
            max={1000}
            value={maxPrice}
            onChange={handleMaxChange}
          />
        </div>
      </>
    </Dropdown>
  );
};

export default PriceRange;
