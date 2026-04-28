import Image from "next/image";
import Link from "next/link";

export default function ImageComponent() {
  return (
    <Link
      href="/"
      aria-label="Ir al inicio"
      className="relative w-[150px] h-[40px] block"
    >
      <Image
        src="https://static.bidcom.com.ar/images/vector/logo_bidcom.svg?v=0.1"
        alt="Bidcom"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
