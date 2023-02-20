import Description from './components/Description';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';
import { Metadata } from 'next';
import fetchRestaurant from './util/fetchRestaurant';

export const metadata: Metadata = {
  title: 'Mc Donalds',
};

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
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <ReservationCard />
    </>
  );
}
