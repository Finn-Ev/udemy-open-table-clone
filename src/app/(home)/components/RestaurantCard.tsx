import { PRICE } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IRestaurantCardData } from "../util/fetchRestaurants";
import Price from "./Price";
import RatingText from "./RatingText";

interface Props {
  restaurant: IRestaurantCardData;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <div className="h-32 relative">
          <Image src={restaurant.main_image} alt={restaurant.name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">{restaurant.reviews.length} reviews</p>
            <RatingText reviews={restaurant.reviews} />
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">{restaurant.cuisine.name}</p>
            <p className="mr-3">
              <Price price={restaurant.price} />
            </p>
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
