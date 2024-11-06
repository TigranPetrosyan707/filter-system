import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from ".";

describe("Dropdown component", () => {
  test("render correct props", () => {
    render(<Dropdown title={"dropdown title"}>Dropdown Content</Dropdown>);
    const dropdownTitle = screen.getByText("dropdown title");
    expect(dropdownTitle).toBeInTheDocument();
  });
});
