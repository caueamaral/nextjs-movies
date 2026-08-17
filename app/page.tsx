import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/logo-movizone.svg"
        alt="MoviZone logo"
        width={154}
        height={22}
        priority
      />
      <main className=""></main>
    </>
  );
}
