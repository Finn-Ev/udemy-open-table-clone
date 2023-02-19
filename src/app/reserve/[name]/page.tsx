import NavBar from '../../(home)/components/NavBar';
import Form from './components/Form';
import Header from './components/Header';

function RestaurantReservePage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto flex flex-col items-center">
            <div>
              <Header />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RestaurantReservePage;
