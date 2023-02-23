import { prisma } from "../../../../prisma/client";

export default async function fetchCuisines() {
  const cuisines = await prisma.cuisine.findMany({
    select: {
      name: true,
    },
  });

  return cuisines;
}
