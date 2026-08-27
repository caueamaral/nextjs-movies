import Image from "next/image";

export default function Logo() {
  return (
    <h1>
      <Image
        src="/images/logo-movizone.svg"
        alt="MoviZone logo"
        width={154}
        height={22}
        priority
      />
    </h1>
  );
}
