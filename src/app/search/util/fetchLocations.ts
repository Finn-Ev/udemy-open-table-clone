import { prisma } from "../../../../prisma/client";

export default async function fetchLocations() {
  const locations = await prisma.location.findMany({
    select: {
      name: true,
      id: true,
    },
  });

  return locations;
}
