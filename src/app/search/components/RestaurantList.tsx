"use client";

import { IRestaurantSearchResultItem } from "../util/fetchRestaurantsBySearchParams";
import RestaurantCard from "./RestaurantItem";

export default function RestaurantList({ restaurants, location }: { restaurants: IRestaurantSearchResultItem[]; location: string }) {
  if (restaurants.length > 0) {
    return (
      <div className="w-5/6 pl-2">
        <h1 className="text-3xl text-center mb-5">
          Restaurants found in {location} ({restaurants.length})
        </h1>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl text-center">No restaurants found in {location}</h1>
      </div>
    );
  }
}
