import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/images/logo-movizone.svg"
        alt="MoviZone logo"
        width={154}
        height={22}
        priority
      />
    </header>
  );
}
