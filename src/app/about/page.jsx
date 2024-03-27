"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/owl";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  //console.log(scrollYProgress);

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-3/5">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              I’m Mobashira Mehajabin Nomrota, currently studying in Electrical
              and Electronic Engineering at BUET. I thrive on debating,
              anchoring events, and painting. I love literature which is my
              escape route into different worlds and perspectives. I have
              leadership and organizing quality with good communication skills.
              I’m trying to improve my skills constantly pushing my boundaries.
              I’m eager to engage myself with research work. I’m hard working
              and try to make a meaningful impact wherever I go. Let's see where
              this journey takes me next!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Mobashira Mehajabin Nomrota (Buet EEE’20)
            </span>
            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              {/* BIOGRAPHY SVG */}
              <svg
                width="183"
                height="49"
                viewBox="0 0 183 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 38C13.339 40.7117 17 38.2553 17 36C17 33.2156 16.4498 32 13.5 32C11.1667 32 8.83333 32 6.5 32C4.04635 32 5 36.1801 5 38C5 41.4355 9.34525 45.0272 12.5556 45.9444C17.3655 47.3187 20.2212 47.7871 23.5556 43.5C29.6715 35.6367 20.5459 27.9903 14.7778 22.2222C10.9856 18.43 7.39706 14.3971 3.5 10.5C-1.87397 5.12603 11.3615 12.4519 13 14.5C18.0424 20.8031 27.9734 23.2167 33 29.5C34.8616 31.827 38.4541 36.1866 41 37.7778C41.2677 37.9451 50.5556 46.9384 50.5556 46.5556C50.5556 45.4707 46.5392 42.2945 45.7778 41C44.5021 38.8313 41.5961 35.9326 41.0556 33.5C39.7664 27.699 36 22.6076 36 16.5C36 14.4166 35.4839 11.5565 36.0556 9.55556C36.7451 7.14231 39.4826 7.8139 40.7778 6.77778C43.0026 4.99792 51.0692 2 54 2"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M62 31C57.0335 31 57 33.3947 57 38C57 40.8799 63.4227 40.3382 65.7778 42.2222C70.0659 45.6527 70.1527 38.5965 70 36C69.8423 33.3195 65.1044 31 63 31"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M65 30C73.2002 30 77 31.9863 77 40.5C77 45.5689 78.6837 37.2117 79.2222 36C79.7002 34.9245 79.738 32.0742 81 32C82.1293 31.9336 84.9084 31.4424 85 33C85.1614 35.7437 85.3087 38.3859 87 40.5C88.2611 42.0764 87.6146 33.3244 88.5556 33.0556C100.972 29.508 91.8603 41.4301 97 44"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M96 46C96 42.795 99 40.8269 99 37C99 32.4861 102.196 32 106 32C112.263 32 112.517 32.5124 107.778 36.7778C104.808 39.4505 112.308 42 115 42"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M121 32C116.159 32 117 35.0247 117 39C117 43.3018 120.435 42 124 42C128.802 42 128 40.36 128 36C128 33.4867 123.308 33 121 33"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M133 16C133 20.0921 130.102 42.0508 136 45"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M124 32C126.96 32 130.614 32.5858 133.5 31.9444C134.317 31.7628 137.077 29.5992 137.778 30.2222C138.797 31.1279 138.457 32.2287 140 33"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M147.736 38.6832C147.152 35.9051 146 33.1949 146 35C146 36.6181 146.68 37.8094 147.736 38.6832Z"
                  fill="black"
                />
                <path
                  d="M145 33C143.061 33.2424 136.094 39.075 138.5 41C140.208 42.3662 146.58 47.2212 147.944 42.4444C148.66 39.9396 146 32.2572 146 35C146 40.2227 153.089 41 157 41"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M156 41C163.461 41 163.796 32.6691 169.5 29.5C179.071 24.1828 181 32.4394 181 40"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
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
                Matlab
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Word
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Excel
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Canva
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
                    Vice Precident
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Participated many debate tournaments, organized debates,
                    seminars and sessions.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2013 - 2019
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CPSCR Debating Club
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
                    Vice Precident
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Participated in math olympiads, organized quizzes and
                    seminars .{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2018{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CPSCR Math Club
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Teacher
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Solved academics problems and gave guidelines to students .{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Bondi Pathshala
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
              <div className="flex justify-between h-64">
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
                    Publication Secretary
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Participated many tournaments, organized debates , buetdc
                    national event 2023, many intra institute events, case
                    competitions and seminars .{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    BUETDC
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Executive Member
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Organized drawing and exhibition programs.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Charcoal - BUET Artista Society
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
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-2/3  sticky top-0 z-30 xl:w-2/5">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
