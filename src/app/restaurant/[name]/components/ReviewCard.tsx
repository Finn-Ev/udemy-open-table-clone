import { Review } from "@prisma/client";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl">MJ</h2>
          </div>
          <p className="text-center"></p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">*****</div>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">{review.text}</p>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light italic">
              {review.first_name} {review.last_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
