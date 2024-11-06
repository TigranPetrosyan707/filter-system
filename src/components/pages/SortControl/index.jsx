import styles from "./sortControl.module.css";
import { useState, useRef, Fragment } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { SORT_OPTIONS } from "./constants";

const SortControl = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState("Sort by default");

  const listRef = useRef(null);
  const toggleList = () => {
    setExpanded((prev) => !prev);
  };
  const [expanded, setExpanded] = useState(false);
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = SORT_OPTIONS.find(
      (option) => option.value === selectedValue
    );
    setSelectedSort(selectedOption ? selectedOption.name : "Sort by default");
    onSortChange(selectedValue);
    setExpanded(false);
  };
  return (
    <div className={styles.product__header}>
      <h1>
        Product <span className={styles.product__span}>Catalog</span>
      </h1>
      <div className={styles.sortContainer}>
        <div className={styles.inputBox} onClick={toggleList}>
          {selectedSort}
          <FaAngleDown
            style={{
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <div
          className={styles.list}
          style={{
            maxHeight: expanded ? listRef.current.scrollHeight : 0,
            outline: expanded ? "1px solid rgba(0,0,0,0.15)" : "",
          }}
          ref={listRef}
        >
          {SORT_OPTIONS.map((option) => {
            return (
              <Fragment key={option.name}>
                <input
                  type="radio"
                  id={option.value}
                  name="sort"
                  value={option.value}
                  style={{ display: "none" }}
                  onChange={handleSortChange}
                />
                <label htmlFor={option.value} className={styles.label}>
                  {option.icon}
                  <span style={{ padding: "4px 0" }}>{option.name}</span>
                </label>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortControl;
