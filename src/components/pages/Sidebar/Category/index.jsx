import Filter from "../../../shared/Filter";
import { CATEGORIES } from "./constants";

const Category = ({ onCategoryChange, selectedCategories }) => {
  return (
    <Filter
      title="Categories"
      options={CATEGORIES}
      selectedOptions={selectedCategories}
      onChange={onCategoryChange}
    />
  );
};

export default Category;
