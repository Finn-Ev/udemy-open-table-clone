import SearchSideBar from "./components/SearchSideBar";
// @ts-ignore
import type { Metadata } from "next";
import SearchBar from "../(home)/components/SearchBar";
import RestaurantList from "./components/RestaurantList";
import fetchRestaurantsBySearchParams from "./util/fetchRestaurantsBySearchParams";
import { PRICE } from "@prisma/client";

export const metadata: Metadata = {
  title: "Search",
};

export interface ISearchPageProps {
  searchParams: { location?: string; cuisine?: string; price?: PRICE };
}

export default async function SearchPage({ searchParams }: ISearchPageProps) {
  if (!searchParams.location)
    // TODO redirect to home page
    return (
      <div>
        <h1 className="text-3xl">No location provided</h1>
      </div>
    );

  const restaurants = await fetchRestaurantsBySearchParams(searchParams);

  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 items-start">
        {/* @ts-ignore */}
        <SearchSideBar searchParams={searchParams} />
        <RestaurantList restaurants={restaurants} location={searchParams.location} />
      </div>
    </>
  );
}
