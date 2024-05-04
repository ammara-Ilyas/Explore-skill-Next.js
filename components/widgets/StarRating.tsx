import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import the necessary icons

const StarRating = () => {
  return (
    <div className="flex">
      {[...Array(4)].map((_, index) => (
        <FaStar key={index} className="text-customColor-primary text-xl" />
      ))}
      <FaStarHalfAlt className="text-customColor-primary text-xl" />{" "}
    </div>
  );
};

export default StarRating;
