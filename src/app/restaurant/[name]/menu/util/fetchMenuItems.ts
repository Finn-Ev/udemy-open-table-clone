import { Item } from '@prisma/client';
import { prisma } from '../../../../../../prisma/client';

// custom type to retrieve only the data we nee

export default async function fetchMenuItems(
  slug: string
): Promise<Item[] | null> {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  return restaurant!.items;
}
