import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import fetchRestaurants from './util/fetchRestaurants';

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <>
      <Header />
      <div className="py-3 grid grid-cols-4 gap-5 px-36 mt-10">
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}
