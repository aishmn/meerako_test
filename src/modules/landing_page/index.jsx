import Layout from "@/modules/layout";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function LandingPage() {
  gsap.registerPlugin(TextPlugin);
  const text1 = useRef([]);
  const textAnimData = [
    { value: "Web Developer" },
    { value: "Graphic Designer" },
    { value: "Mobile App Developer" },
    { value: "Digital Marketing Expert  " },
    { value: "SEO Expert" },
  ];
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: Infinity,
      defaults: { duration: 1.5, ease: "none" },
    });
    textAnimData?.map((val) => {
      tl.to(
        text1.current,
        {
          text: {
            value: val.value,
            newClass: "underline p-2 ",
            delimiter: "",
          },
        },
        ">"
      );
    });
  });

  return (
    <Layout>
      <div className="grid w-full grid-cols-2 ">
        <section className="flex items-center justify-start h-screen">
          <article className="-mt-28">
            <span className="flex text-5xl text-center">
              We are
              <h1 ref={text1} className="mx-1 font-bold text-orange-400">
                {" "}
              </h1>
            </span>
            <p className="max-w-lg p-1 px-1 py-4 mb-1 text-xs font-light leading-tight tracking-wider text-justify capitalize">
              We are Meerako Services Pvt Ltd, We deliver the best it solutions
              for your busines ideas and imagination, Grow your business and
              personal attire with us, we will digitally lead you toward your
              dream, we are Meerako Services, Creating Dreams Into Reality.
            </p>
            <div className="flex items-end justify-start max-w-lg">
              <div className="inline-flex items-center px-4 py-2 text-xl font-extrabold text-white uppercase bg-orange-400 border rounded-md shadow">
                <span className="w-9">
                  <motion.img
                    initial={{ rotate: -10 }}
                    animate={{
                      rotate: 10,
                      transformOrigin: "bottom center",
                    }}
                    transition={{
                      type: "intertia",
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="px-2"
                    src="/icons/telephone_icon.svg"
                  />
                </span>
                Call Us Now
              </div>
            </div>
          </article>
        </section>
        <section className="flex items-center justify-center ">
          <div className="">
            <Image
              height={800}
              width={800}
              src={"/icons/landingpage_graphics.svg"}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
