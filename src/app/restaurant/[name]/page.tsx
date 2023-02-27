// @ts-ignore
import type { Metadata } from "next";
import capitalize from "../../../util/capitalize";
import unslugifyRestaurantName from "../../../util/unslugifyRestaurantName";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/ReviewList";
import Title from "./components/Title";
import fetchRestaurant from "./util/fetchRestaurant";

export function generateMetadata({ params }: any): Metadata {
  return { title: `${capitalize(unslugifyRestaurantName(params.name))}` };
}

interface Props {
  params: { name: string };
}

export default async function RestaurantDetailsPage({ params }: Props) {
  const restaurant = await fetchRestaurant(params.name);

  if (restaurant === null) return <div>404</div>;

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <ReservationCard />
    </>
  );
}
