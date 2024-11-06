const Reviews = ({ data }) => {
  return (
    <p>
      On average, customers have rated the {data.name} {data.rating} stars out
      of 5, based on over 1000 reviews.
    </p>
  );
};

export default Reviews;
