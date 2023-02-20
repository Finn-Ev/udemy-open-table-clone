import { Metadata } from 'next';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from './components/Menu';
import fetchMenuItems from './util/fetchMenuItems';

export const metadata: Metadata = {
  title: 'Menu',
};

interface Props {
  params: { name: string };
}

export default async function RestaurantMenuPage({ params }: Props) {
  const menuItems = await fetchMenuItems(params.name);

  if (menuItems === null) return <div>404</div>;

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.name} />
      <Menu menuItems={menuItems} />
    </div>
  );
}
