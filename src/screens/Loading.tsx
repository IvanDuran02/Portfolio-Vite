import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaArrowDown, FaDownload, FaGithub } from "react-icons/fa";
import { useWindowSize } from "../components/WindowHook";
import Resume from "../assets/Resume.pdf";
import Selfie from "../assets/me.jpg";
import blob4 from "../assets/blueBlob.svg";

export const Loading = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);
  const animation = useAnimationControls();
  const [title, setTitle] = useState(<></>);
  useEffect(() => {
    // starts animation sequence

    sequence();
  }, []);
  const sequence = async () => {
    await animation.start({ scale: 1, opacity: 1 });
    await animation.start({ y: -125 });
    setTitle(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute text-4xl flex"
      >
        <h1>Ivan Duran</h1>
        <span className="animate-pulse text-red-400">.</span>
      </motion.div>
    );
  };
  return (
    <div className="w-screen h-screen max-w-[1440px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        animate={animation}
        className="text-3xl font-extrabold z-10"
      >
        <img
          src={`${Selfie}`}
          alt="Selfie"
          className="rounded-full w-[20vh] h-[20vh] object-cover z-10"
        />
      </motion.div>
      {title}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="flex w-full justify-center items-center space-x-2 z-10"
      >
        <a href={Resume} download="Ivan's Resume.pdf">
          <div className="w-[15vh] p-1 rounded-xl bg-red-400 flex justify-center items-center gap-1 hover:cursor-pointer hover:-translate-y-1 transition-all text-center z-10">
            Resume <FaDownload className="w-[2vh] h-[2vh] bg-red-400  z-10" />
          </div>
        </a>
        <a target="_blank" href="https://github.com/IvanDuran02">
          <div className="w-[15vh] p-1 rounded-xl bg-red-400 flex justify-center items-center gap-1 hover:cursor-pointer hover:-translate-y-1 transition-all z-10">
            GitHub <FaGithub className="w-[2.5vh] h-[2.5vh] bg-red-400 z-10" />
          </div>
        </a>
      </motion.div>
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <div className="flex flex-col justify-center items-center space-y-2 animate-bounce z-10">
          <span className="underline italic opacity-70">Scroll Me!</span>
          <FaArrowDown className="opacity-70 w-[2.5vh] h-[2.5vh]" />
        </div>
      </motion.div>
      <img
        src={blob4}
        alt="blob"
        className="absolute h-[55vh] -left-64 bottom-0"
      />
      <img
        src={blob4}
        alt="blob"
        className="absolute h-[55vh] -right-64 top-0 rotate-90"
      />
    </div>
  );
};
