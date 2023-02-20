import Image from 'next/image';

export default function Images({ images }: { images: string[] }) {
  return (
    <>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 && 's'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map(image => (
          <Image
            key={image}
            src={image}
            alt=""
            width={1000}
            height={1000}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
    </>
  );
}
