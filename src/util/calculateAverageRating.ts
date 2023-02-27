import { Review } from "@prisma/client";

export default function calculateAverageRating(reviews: Review[]) {
  const ratings = reviews.map((review) => review.rating);

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);

  let average: string | number = sum / ratings.length;

  const wording = average > 4 ? "Excellent" : average > 3 ? "Very Good" : average > 2 ? "Good" : average > 1 ? "Fair" : "Poor";

  // workaround for tooFixed()
  if (average % 1 === 0) {
    average = `${average}.0`;
  }

  return { value: average, wording };
}
