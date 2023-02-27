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

export default async function fetchRestaurantsBySearchParams(searchParams: {
  location?: string;
  cuisine?: string;
  price?: PRICE;
}): Promise<IRestaurantSearchResultItem[]> {
  const conditions = [];

  if (searchParams.location) {
    conditions.push({
      location: {
        name: searchParams.location.toLowerCase(),
      },
    });
  }

  if (searchParams.cuisine) {
    conditions.push({
      cuisine: {
        name: searchParams.cuisine.toLowerCase(),
      },
    });
  }

  if (searchParams.price) {
    conditions.push({
      price: searchParams.price,
    });
  }

  const restaurants = await prisma.restaurant.findMany({
    where: {
      AND: [...conditions],
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
