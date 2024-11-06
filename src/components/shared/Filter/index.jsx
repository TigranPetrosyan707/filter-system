import Dropdown from "../Dropdown";

const Filter = ({ title, options, selectedOptions, onChange }) => {
  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    onChange(updatedOptions);
  };

  return (
    <Dropdown title={title}>
      {options.map((option) => (
        <div key={option.id}>
          <label>
            <input
              type="checkbox"
              value={option.name}
              checked={selectedOptions.includes(option.name)}
              onChange={() => handleOptionChange(option.name)}
            />
            {option.name}
          </label>
        </div>
      ))}
    </Dropdown>
  );
};

export default Filter;
