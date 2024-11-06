import Filter from "../../../shared/Filter";
import { BRANDS } from "./constants";

const Brand = ({ onBrandChange, selectedBrands }) => {
  return (
    <Filter
      title="Brand"
      options={BRANDS}
      selectedOptions={selectedBrands}
      onChange={onBrandChange}
    />
  );
};

export default Brand;
