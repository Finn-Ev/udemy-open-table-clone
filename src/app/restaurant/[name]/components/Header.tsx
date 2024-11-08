import unslugifyRestaurantName from "../../../../util/unslugifyRestaurantName";

export default function Header({ title }: { title: string }) {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">{unslugifyRestaurantName(title)}</h1>
      </div>
    </div>
  );
}
