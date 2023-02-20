import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export interface IRestaurantSearchResultItem {
  id: number;
  name: string;
  price: PRICE;
  main_image: string;
  slug: string;
  location: { name: string };
  reviews: Review[];
  cuisine: { name: string };
}

export default async function getRestaurantsByLocation(city: string): Promise<IRestaurantSearchResultItem[]> {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          contains: city.toLowerCase(),
        },
      },
    },
    select: {
      id: true,
      price: true,
      name: true,
      main_image: true,
      slug: true,
      location: {
        select: {
          name: true,
        },
      },
      reviews: true,
      cuisine: {
        select: {
          name: true,
        },
      },
    },
  });

  return restaurants;
}
