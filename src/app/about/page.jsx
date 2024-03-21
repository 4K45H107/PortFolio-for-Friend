"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  //console.log(scrollYProgress);

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              কিছু বিষাদ হোক পাখি নগরীর নোনা ধরা দেয়ালে কাঁচপোকা সারি সারি
              নির্বাণ-নির্বাণ ডেকে যায় কিছু ভুল রঙের ফুল ফুটে আছে রাজপথে কিছু
              মিথ্যে কথার রং আমাদের হৃদয়ে
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              ক্ষমাহীন প্রান্তর জুড়ে আমাদের বেঁচে থাকা
            </span>
            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              {/* BIOGRAPHY SVG */}
              <svg
                width="161"
                height="109"
                viewBox="0 0 161 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 87.9458C2 82.9663 3.50166 78.33 5.16667 73.668C9.53692 61.4313 14.5581 49.5143 20 37.7235C23.9347 29.1983 26.5296 20.344 30 11.668C31.2165 8.62679 33.2339 -0.529482 33.9444 2.66799C35.8864 11.407 33.4382 22.7261 33.2222 31.5013C32.7283 51.5685 32.7071 71.8018 34.2222 91.8347C34.5698 96.4298 35 100.845 35 105.446C35 112.646 38.8349 94.5079 39 93.2791C41.3576 75.7277 40.2147 57.1471 45 40.0569C46.1269 36.0322 47.5033 32.133 48.7778 28.168C49.3677 26.3328 49.495 26.332 48.7778 27.9458C45.6454 34.9937 46.3838 43.7891 45.5 51.3902C44.977 55.8883 45.4383 60.487 44.7778 64.9458C44.4793 66.9607 43.2376 70.1787 44.0556 72.2235C44.3086 72.8562 45.007 71.246 45.4444 70.7235C47.4624 68.3132 49.7966 66.1811 52 63.9458C55.0129 60.8892 57.6172 57.5681 60.7778 54.7235C67.4647 48.7053 50.4449 69.4863 44.6111 76.3347C37.8666 84.2522 44.9329 81.0689 51.7778 82.9458C56.1234 84.1373 61.1502 86.8835 64 90.4458C66.1513 93.1348 72.5503 79.2001 73 77.9458C73.6682 76.0817 77.4926 65.9458 73.5 65.9458C70.5059 65.9458 69.1218 66.758 69 70.168C68.9657 71.1297 67.2957 82.3984 68.2222 82.5013C72.0117 82.9224 72 75.1949 72 73.4458C72 70.2817 72.1618 67.2215 71.2222 64.168C70.7599 62.6654 73.9772 67.959 74.7778 68.9458C76.6214 71.2181 79.7559 78.7222 83.5 77.8902C87.0443 77.1026 85.0707 60.3514 85 57.168C84.9732 55.9619 83.6354 53.6522 85.5556 54.0013C88.3796 54.5148 90.8708 56.6012 92.4444 58.8902C97.0654 65.6116 95.1133 75.1564 92.7778 82.7235C92.4355 83.8325 90.1111 90.6846 90.1111 89.7235C90.1111 85.1113 93.0583 80.2858 94.4444 76.0013C98.615 63.1104 97.3187 49.314 95.0556 36.1124C94.8142 34.7048 91.6871 13.2864 92 23.6124C92.7392 48.0053 103.267 71.189 108.444 94.7235C109.089 97.6517 110.825 100.973 111 103.946C111.058 104.931 112.108 98.4295 112.222 97.5013C112.492 95.3148 118.738 66.4076 120.5 67.1124C123.278 68.2236 125.45 81.7926 126.778 84.9458C127.608 86.9181 127.188 86.4732 129.167 84.8902C133.868 81.129 139.547 78.3997 145 75.9458C147.79 74.6903 159 72.4563 159 68.9458"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                LeetCode
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CodeForces
              </div>
            </motion.div>
            {/* SKILL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-350px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 bg-red-400 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
