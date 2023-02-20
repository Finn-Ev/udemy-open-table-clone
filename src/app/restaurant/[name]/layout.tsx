import { PrismaClient } from '@prisma/client';
import Header from './components/Header';

export default function RestaurantPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { name: string };
}) {
  return (
    <>
      <Header title={params.name} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
