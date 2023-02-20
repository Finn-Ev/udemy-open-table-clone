'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RestaurantNavBar({ slug }: { slug: string }) {
  const isMenu = usePathname() === `/restaurant/${slug}/menu`;

  return (
    <nav className="flex text-reg border-b pb-2 space-x-2">
      <Link
        href={`/restaurant/${slug}`}
        className={`${!isMenu && 'underline'}`}
      >
        Overview
      </Link>
      <Link
        href={`/restaurant/${slug}/menu`}
        className={`${isMenu && 'underline'}`}
      >
        Menu
      </Link>
    </nav>
  );
}
