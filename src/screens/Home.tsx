import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ParallaxText from "../components/ParalaxText";
import { Loading } from "./Loading";

const FirstComponent = () => {
  return (
    <div className="h-[90vh] w-screen flex flex-col justify-center items-center">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, delay: 1, type: "spring" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-20%" }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-extrabold"
        >
          <img
            src="https://media.istockphoto.com/id/1256493285/photo/smiling-young-businessman-using-video-chat-or-taking-selfie-at-city-center.jpg?s=612x612&w=0&k=20&c=HL6RtRuJ-OUVnScr2jV1MrL25a9BS8bkTDl0tl6zUo4="
            alt="Selfie"
            className="rounded-full w-[40vh] h-[40vh] object-cover"
          />
        </motion.div>
      </motion.div>
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
    </div>
  );
};

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Loading />
      <motion.div
        className="pt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      ></motion.div>
      <FirstComponent />

      <SecondComponent />

      <ThirdComponent />
    </div>
  );
};
