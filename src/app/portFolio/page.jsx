"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    key: 1,
    color: "from-red-300 to-blue-300",
    title: ["BJT Circuit Navigator", "Numerical Solution"],
    desc: "This project aims at solving some BJT oriented circuits. It will take some inputs from the user as netlist, then the data will be processed using numerical methods in MATLAB and the output will be showed in schematic. It will use the mostly used circuits in our analysis. Here this will do AC and DC analysis of  BJT",
    img: "/1.png",
    link: "",
    software: "Software: Matlab",
  },
  {
    id: 2,
    key: 2,
    color: "from-blue-300 to-violet-300",
    title: ["PID Controller", "Using OP-AMP"],
    desc: "This project's goal is to materialize this purpose using Op-Amp based PID controllers. It calculates an error value, e(t) as the difference between a desired set point (SP) and a measured process variable (PV) and applies a correction for that. PID is a method used in control systems and if tuned properly, can be incredibly effective and accurate. PID stands for Proportional, Integral and Derivative, three separate parts joined together. Based on the use case, we could have just P control, PI control or PD control. There are three PID Controller parameters in total. Each of them has their respective Op-Amp based implementation.",
    img: "/2.png",
    link: "",
    software: "Software: Pspice",
  },
  {
    id: 3,
    key: 3,
    color: "from-violet-300 to-purple-300",
    title: ["Autotransformer"],
    desc: "The project aims to design, build, and test a 240V/260V step-up autotransformer with four tapping. It is designed to convert a primary voltage of 240V to secondary voltages of 260V, 220V, 180V, and 110V. The autotransformer was developed to meet essential electrical engineering standards for reliability, and safety. The implementation phase involved real construction, testing, and data collection, followed by an in-depth evaluation of the design's efficacy. The autotransformer met all design criteria, with output voltages deviating from expected values by no more than 1%. This project serves as a good reference for building similar step-up autotransformers, shining light on crucial design issues, material selection, and assembly processes.",
    img: "/3.png",
    link: "",
    software: "Hardware Project",
  },
  {
    id: 4,
    key: 4,
    color: "from-purple-300 to-red-300",
    title: ["Reactive Power Compensation", "In Grid Connected PV Cell"],
    desc: "This project investigates the application of reactive power compensation techniques in grid connected photovoltaic (PV) systems using Static Synchronous Compensators (STATCOMs) and fixed capacitor banks to reduce active and reactive power demand from the grid by supplying variable reactive power from an alternative source, thereby decreasing reliance on utility power and facilitating renewable energy integration. System modeling and analysis are conducted. The system integrates various load dynamics and changing solar irradiance conditions are simulated to assess the system's performance and response to disturbances. This project proposes a design methodology for reactive compensation in PV-integrated grid systems employing both STATCOMs and fixed capacitor banks.",
    img: "/4.png",
    link: "",
    software: "Matlab, Simulink",
  },
  {
    id: 5,
    key: 5,
    color: "from-red-300 to-blue-300",
    title: [
      "Boimetric Authentication System",
      "For Classroom Management",
      "Through Voice Recognition",
    ],
    desc: "This project aims to develop a biometric authentication system for classroom management through voice recognition technology. The proposed system utilizes advanced signal processing techniques, including Mel-Frequency Cepstral Coefficients (MFCC) for efficient feature extraction from voice samples. Machine learning algorithms, such as k-Nearest Neighbors (KNN) is employed for speaker modeling and classification. The system is designed to accommodate text-dependent speaker recognition. Robust audio preprocessing methods, including noise reduction and voice activity detection, are incorporated to improve the system's performance in real-world classroom environments.",
    img: "/5.png",
    link: "",
    software: "Matlab",
  },
  {
    id: 6,
    key: 6,
    color: "from-blue-300 to-violet-300",
    title: [
      " EcoWatch: Smart Greenhouse",
      "Environment Management",
      "with Fire Safety",
    ],
    desc: "TThe emergence of the Internet of Things (IoT) has paved the way for remote monitoring and visualization of environmental parameters through wireless sensors, facilitating real-time data transmission and analysis. Our project, EcoWatch: Smart Greenhouse Environment Management with Fire Safety, leverages IoT principles to enhance the functionality and efficiency of traditional home appliances, focusing on greenhouse environment management and fire safety. Using an Arduino UNO board and an ESP8266 Wi-Fi Module, we establish a network for processing and transferring data from sensors to the Thingspeak Cloud, a versatile open API service.",
    img: "/6.png",
    link: "",
    software: "Matlab, Simulink",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.7%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                key={item.key}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title.map((title, index) => (
                      <div key={index}>
                        {title} <br />
                      </div>
                    ))}
                  </h1>
                  <div className="relative h-60 md:w-96 md:h-50 lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[350px]">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="w-80 md:w-140 lg:w-[700px] lg:text-lg xl:w-[900px]">
                    {item.desc}
                  </p>
                  <button className=" w-auto p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                    {item.software}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
