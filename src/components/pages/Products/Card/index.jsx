import { useState } from "react";
import styles from "./card.module.css";
import { FaDollarSign } from "react-icons/fa6";

import Description from "./Description";
import Photo from "./Photo";
import Reviews from "./Reviews";

const Card = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabsButtons = [
    { id: 1, name: "Description" },
    { id: 2, name: "Photo" },
    { id: 3, name: "Reviews" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return <Description data={data} />;
      case "Photo":
        return <Photo data={data} />;
      case "Reviews":
        return <Reviews data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.tabs}>
        {tabsButtons.map((tabButton) => (
          <button
            key={tabButton.id}
            className={`${styles.tabButton} ${
              activeTab === tabButton.name ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tabButton.name)}
          >
            {tabButton.name}
          </button>
        ))}
      </div>
      <div className={styles.product__details}>
        <FaDollarSign />
        <span className={styles.product__price}>{data.price}</span>
        <span>{data.name}</span>
      </div>
      <div className={styles.tab__content}>{renderTabContent()}</div>
    </div>
  );
};

export default Card;
