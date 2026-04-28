import Image from "next/image";

export const ProductGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [main, ...rest] = images;
  return (
    <div className="space-y-4">
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={main}
          alt={title}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {rest.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {rest.slice(0, 4).map((src, i) => (
            <div
              key={src}
              className="aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={src}
                alt={`${title} ${i + 2}`}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
