import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center">
          <span> Powered by </span>
          <section className="flex ml-1">
            <Image
              src="/icons/logo.svg"
              alt="Meerako Logo"
              width={22}
              height={22}
              className="inline-block "
            />
          </section>
          <span className="inline-block font-bold text-orange-400">
            Meerako
          </span>
        </div>
      </a>
    </footer>
  );
}
