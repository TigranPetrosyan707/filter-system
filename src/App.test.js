import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders all components", () => {
  test("render SortControl component", () => {
    render(<App />);
    const sortControlElement = screen.getByText(/Product/i);
    expect(sortControlElement).toBeInTheDocument();
  });

  test("render Category component", () => {
    render(<App />);
    const categoryElement = screen.getByText(/Categories/i);
    expect(categoryElement).toBeInTheDocument();
  });

  test("render Brand component", () => {
    render(<App />);
    const brandlElement = screen.getByText(/Brand/i);
    expect(brandlElement).toBeInTheDocument();
  });

  test("render StarRating component", () => {
    render(<App />);
    const starRatingElement = screen.getByText("Rating");
    expect(starRatingElement).toBeInTheDocument();
  });

  test("render PriceRange component", () => {
    render(<App />);
    const priceRangeElement = screen.getByText("Price Range");
    expect(priceRangeElement).toBeInTheDocument();
  });
});
