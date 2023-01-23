import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const FirstComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, delay: 1, type: "spring" }}
      >
        <h1 className="text-4xl">Welcome to my Portfolio!</h1>
      </motion.div>
      <div className="absolute right-8 space-y-4">
        <div className=" rounded-full w-4 bg-gray-300 h-4" />
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
      </div>
    </div>
  );
};
const SecondComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, delay: 1, type: "spring" }}
      >
        <h1 className="text-4xl">Welcome to my Portfolio!</h1>
      </motion.div>
      <div className="absolute right-8 space-y-4">
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
        <div className=" rounded-full w-4 bg-gray-300 h-4" />
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
      </div>
    </div>
  );
};
const ThirdComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, delay: 1, type: "spring" }}
      >
        <h1 className="text-4xl">Welcome to my Portfolio!</h1>
      </motion.div>
      <div className="absolute right-8 space-y-4">
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
        <div className=" rounded-full w-4 bg-gray-600 h-4" />
        <div className=" rounded-full w-4 bg-gray-300 h-4" />
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
};
