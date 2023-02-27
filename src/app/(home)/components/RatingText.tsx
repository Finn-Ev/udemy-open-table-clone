import { Review } from "@prisma/client";
import calculateAverageRating from "../../../util/calculateAverageRating";

export default function RatingText({ reviews }: { reviews: Review[] }) {
  const avgRating = calculateAverageRating(reviews);

  if (!reviews.length) return null;

  return <div className="ml-2">{avgRating.wording}</div>;
}
