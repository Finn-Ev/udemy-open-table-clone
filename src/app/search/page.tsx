import SearchSideBar from "./components/SearchSideBar";
import { Metadata } from "next";
import SearchBar from "../(home)/components/SearchBar";
import RestaurantList from "./components/RestaurantList";
import fetchRestaurantsByCity from "./util/fetchRestaurantsByLocation";

export const metadata: Metadata = {
  title: "Search",
};

interface Props {
  searchParams: { location?: string };
}

export default async function SearchPage({ searchParams }: Props) {
  if (!searchParams.location)
    // TODO redirect to home page
    return (
      <div>
        <h1 className="text-3xl">No location provided</h1>
      </div>
    );

  const restaurants = await fetchRestaurantsByCity(searchParams.location);

  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 items-start">
        <SearchSideBar />
        <RestaurantList restaurants={restaurants} location={searchParams.location} />
      </div>
    </>
  );
}
