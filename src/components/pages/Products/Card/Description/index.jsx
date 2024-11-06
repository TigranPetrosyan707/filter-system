const Description = ({ data }) => {
  return (
    <p>
      The {data.name} from {data.brand} offers exceptional performance and
      quality, making it a standout choice in the {data.category} category.
    </p>
  );
};

export default Description;
