import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Fahad Ahmed Akash</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl lg:w-full">
          বুক ভরা আবেগটুকু ঢেকে, হঠাৎ করে হয়ে গেলাম বড়!
        </p>
        <div className="lg:w-full flex gap-4">
          {/* BUTTONS */}
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-2 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
