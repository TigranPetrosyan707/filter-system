import { render, screen } from "@testing-library/react";
import Filter from ".";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];
const selectedOptions = ["Option 1", "Option 3"];

describe("Filter Component", () => {
  test("should display the correct title", () => {
    render(
      <Filter
        title="Test Dropdown"
        options={options}
        selectedOptions={selectedOptions}
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText("Test Dropdown")).toBeInTheDocument();
  });

  test("should correctly show checkboxes with selected options", () => {
    render(
      <Filter
        title="Test Dropdown"
        options={options}
        selectedOptions={selectedOptions}
        onChange={jest.fn()}
      />
    );

    const option1 = screen.getByLabelText("Option 1");
    const option2 = screen.getByLabelText("Option 2");
    const option3 = screen.getByLabelText("Option 3");

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();
    expect(option3).toBeChecked();
  });
});
