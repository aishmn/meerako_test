import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <main>
          <div className="flex items-center justify-between px-16 py-2 ">
            <section className="flex">
              <Image
                src="/icons/logo.svg"
                alt="Meerako Logo"
                width={25}
                height={25}
                className="inline-block "
              />
              <span className="ml-0.5 font-bold uppercase underline underline-offset-4 text-orange-300">
                Meerako
              </span>
            </section>
            <section className="md:w-2/5">
              <ul className="flex justify-between font-serif font-medium tracking-wide cursor-pointer text-md text-slate-600 ">
                <li>Services</li>
                <li>About Us</li>
                <li>Career</li>
                <li>Blogs</li>
                <li>Tools</li>
                <li>Media</li>
              </ul>
            </section>
          </div>
        </main>
      </nav>
    </div>
  );
}
