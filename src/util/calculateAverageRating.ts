import { Review } from "@prisma/client";

export default function calculateAverageRating(reviews: Review[]): string {
  const ratings = reviews.map((review) => review.rating);

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);

  const average = sum / ratings.length;

  // workaround for tooFixed()
  if (average % 1 === 0) {
    return `${average}.0`;
  }

  return average.toString();
}
