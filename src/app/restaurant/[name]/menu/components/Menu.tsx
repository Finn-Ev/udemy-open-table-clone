import { Item } from '@prisma/client';
import MenuItem from './MenuItem';

export default function Menu({ menuItems }: { menuItems: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menuItems.length === 0 ? (
            <p className="text-lg font-light">No menu items yet</p>
          ) : (
            menuItems.map(item => <MenuItem key={item.id} item={item} />)
          )}
        </div>
      </div>
    </main>
  );
}
