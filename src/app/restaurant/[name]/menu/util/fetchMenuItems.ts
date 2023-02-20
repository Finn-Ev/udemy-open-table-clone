import { Item } from "@prisma/client";
import { prisma } from "../../../../../../prisma/client";

export default async function fetchMenuItems(slug: string): Promise<Item[] | null> {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  return restaurant!.items;
}
