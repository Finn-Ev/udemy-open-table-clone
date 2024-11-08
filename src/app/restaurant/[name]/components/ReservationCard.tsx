export default function ReservationCard() {
  return (
    <div className="w-[27%] relative text-reg">
      <div className="fixed w-[15%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg">Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party size</label>
          <select name="" className="py-3 border-b font-light" id="">
            <option value="">1 person</option>
            <option value="">2 people</option>
          </select>
        </div>
        <div className="flex flex-col 2xl:flex-row justify-between items-center">
          <div className="flex flex-col w-full 2xl:w-[48%] mb-3 2xl:mb-0">
            <label htmlFor="">Date</label>
            <input type="text" className="py-3 border-b font-light w-full" />
          </div>
          <div className="flex flex-col w-full 2xl:w-[48%] -mb-1">
            <label htmlFor="">Time</label>
            <select name="" id="" className="py-3 border-b font-light">
              <option value="">7:30 AM</option>
              <option value="">9:30 AM</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16 mb-10">Find a Time</button>
        </div>
      </div>
    </div>
  );
}
