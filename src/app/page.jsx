"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.jpeg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="ml-4 h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold lg:w-full">
            Mobashira Mehajabin Nomrota
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl lg:w-full">
            চলেছে— চলেছে— <br />
            শিশির কুয়াশা বৃষ্টি ঝড়ের বিহ্বল আলোড়ন
          </p>
          <div className="ml-4 lg:w-full flex gap-4">
            {/* BUTTONS */}
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link className="py-4 px-2" href="/portFolio">
                View My Work
              </Link>
            </button>
            <button className="p-4 rounded-lg ring-2 ring-black">
              <Link className="py-4 px-2" href="/contact">
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
