import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">What {reviews.length} people are saying</h1>

      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
