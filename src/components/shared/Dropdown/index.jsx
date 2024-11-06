import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./dropdown.module.css";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.filter__dropdown} onClick={handleToggle}>
        <h3>{title}</h3>
        <FaAngleDown
          style={{
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      <div
        className={`${styles.filter__list} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
