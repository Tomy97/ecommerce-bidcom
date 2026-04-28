import Image from "next/image";
import Link from "next/link";

export default function ImageComponent() {
  return (
    <Link href="/">
      <Image
        src="https://static.bidcom.com.ar/images/vector/logo_bidcom.svg?v=0.1"
        alt="Logo Bidcom"
        width={150}
        height={150}
      />
    </Link>
  );
}
