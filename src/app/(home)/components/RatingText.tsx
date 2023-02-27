import { Review } from "@prisma/client";
import calculateAverageRating from "../../../util/calculateAverageRating";

export default function RatingText({ reviews }: { reviews: Review[] }) {
  const avgRating = calculateAverageRating(reviews);
  const ratingText = avgRating > 4 ? "Excellent" : avgRating > 3 ? "Very Good" : avgRating > 2 ? "Good" : avgRating > 1 ? "Fair" : "Poor";

  if (!reviews.length) return null;

  return <div className="ml-2">{ratingText}</div>;
}
