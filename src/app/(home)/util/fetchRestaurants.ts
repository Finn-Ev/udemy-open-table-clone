import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

// custom type to retrieve only the data we need
export interface IRestaurantCardData {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

export default async function fetchRestaurants(): Promise<IRestaurantCardData[]> {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  return restaurants;
}
