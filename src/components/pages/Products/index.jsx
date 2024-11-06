import Card from "./Card";

const Products = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <>
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

export default Products;
