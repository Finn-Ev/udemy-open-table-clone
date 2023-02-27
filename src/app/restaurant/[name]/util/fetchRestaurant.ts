import { Review } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";

export interface IRestaurantDetail {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

export default async function fetchRestaurant(name: string): Promise<IRestaurantDetail | null> {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug: name },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  return restaurant;
}
