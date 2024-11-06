import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import Dropdown from "../../../shared/Dropdown";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <Dropdown title={"Rating"}>
      <div style={{ marginTop: "2px" }} onMouseLeave={handleMouseLeave}>
        {[...Array(totalStars)].map((_, index) => {
          const starRating = index + 1;
          const isSelected = rating >= starRating;
          const isHovered = hoveredRating >= starRating;

          return (
            <span
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(index)}
              style={{
                color: isSelected || isHovered ? "#A0D6B4" : "#ddd",
                cursor: "pointer",
              }}
            >
              <GoStarFill />
            </span>
          );
        })}
      </div>
    </Dropdown>
  );
};

export default StarRating;
