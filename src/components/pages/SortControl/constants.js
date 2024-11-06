import { RxCaretSort } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";
import { RiFireFill } from "react-icons/ri";

export const SORT_OPTIONS = [
  { name: "Sort by default", value: "none", icon: <RxCaretSort /> },
  { name: "Price Low to High", value: "price-asc", icon: <FaDollarSign /> },
  { name: "Price High to Low", value: "price-desc", icon: <FaDollarSign /> },
  {
    name: "Rating Low to High",
    value: "rating-asc",
    icon: <TiStarHalfOutline />,
  },
  {
    name: "Rating High to Low",
    value: "rating-desc",
    icon: <TiStarHalfOutline />,
  },
  {
    name: "Popularity Least to Most",
    value: "popularity-asc",
    icon: <RiFireFill />,
  },
  {
    name: "Popularity Most to Least",
    value: "popularity-desc",
    icon: <RiFireFill />,
  },
];
