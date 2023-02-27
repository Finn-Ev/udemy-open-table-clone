import { PRICE } from "@prisma/client";
import Link from "next/link";
import { ISearchPageProps } from "../page";
import fetchCuisines from "../util/fetchCuisines";
import fetchLocations from "../util/fetchLocations";

export default async function SearchSideBar({ searchParams }: ISearchPageProps) {
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  const prices = [
    {
      label: "$",
      value: PRICE.CHEAP,
    },
    {
      label: "$$",
      value: PRICE.REGULAR,
    },
    {
      label: "$$$",
      value: PRICE.EXPENSIVE,
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{ pathname: "/search", query: { ...searchParams, location: location.name } }}
            key={location.name}
            className="font-light text-reg capitalize block"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{ pathname: "/search", query: { ...searchParams, cuisine: cuisine.name } }}
            key={cuisine.id}
            className="font-light text-reg capitalize block"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{ pathname: "/search", query: { ...searchParams, price: price.value } }}
              key={price.value}
              className="border w-full text-reg font-light rounded-md text-center p-2 block"
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
