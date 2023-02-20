import { PRICE } from '@prisma/client';

export default function Price({ price }: { price: PRICE }) {
  if (price === PRICE.CHEAP) {
    return (
      <>
        <span className="text-black font-semibold">$$</span>
        <span className="text-gray-500">$$</span>
      </>
    );
  } else if (price === PRICE.REGULAR) {
    return (
      <>
        <span className="text-black font-semibold">$$$</span>
        <span className="text-gray-500">$</span>
      </>
    );
  } else {
    return (
      <>
        <span className="text-black font-semibold">$$$$</span>
      </>
    );
  }
}
