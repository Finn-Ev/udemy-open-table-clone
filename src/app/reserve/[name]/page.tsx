import Form from './components/Form';
import Header from './components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reserve',
};

export default function RestaurantReservePage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto flex flex-col items-center">
        <div>
          <Header />
          <Form />
        </div>
      </div>
    </div>
  );
}
