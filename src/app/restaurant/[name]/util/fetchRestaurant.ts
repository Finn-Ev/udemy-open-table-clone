import { prisma } from '../../../../../prisma/client';

// custom type to retrieve only the data we need
export interface RestaurantDetailDataType {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

export default async function fetchRestaurant(
  name: string
): Promise<RestaurantDetailDataType | null> {
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
