import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

import { Metadata } from 'next';
import SearchBar from '../(home)/components/SearchBar';

export const metadata: Metadata = {
  title: 'Search',
};

function SearchPage() {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
