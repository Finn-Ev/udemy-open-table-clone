import Image from "next/image";
import Link from "next/link";
import Price from "../../(home)/components/Price";
import { IRestaurantSearchResultItem } from "../util/fetchRestaurantsByLocation";

export default function RestaurantCard({ restaurant }: { restaurant: IRestaurantSearchResultItem }) {
  return (
    <div className="border-b flex pb-5 my-5">
      <div className="relative h-44 w-44">
        <Image src={restaurant.main_image} alt={restaurant.name + "-image"} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg capitalize">
            <div className="mr-4">
              <Price price={restaurant.price} />
            </div>
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}
