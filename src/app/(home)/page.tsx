import { Metadata } from 'next';
import Image from 'next/image';
import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';

export const metadata: Metadata = {
  title: 'OpenTable',
};

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </main>
  );
}