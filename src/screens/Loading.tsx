import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaArrowDown, FaDownload, FaGithub } from "react-icons/fa";

export const Loading = () => {
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
        Ivan Duran
        <div className="animate-pulse text-red-400">.</div>
      </motion.div>
    );
  };
  return (
    <div className="w-screen h-screen max-w-[1440px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        animate={animation}
        className="text-3xl font-extrabold"
      >
        <img
          src="https://media.istockphoto.com/id/1256493285/photo/smiling-young-businessman-using-video-chat-or-taking-selfie-at-city-center.jpg?s=612x612&w=0&k=20&c=HL6RtRuJ-OUVnScr2jV1MrL25a9BS8bkTDl0tl6zUo4="
          alt="Selfie"
          className="rounded-full w-[20vh] h-[20vh] object-cover"
        />
      </motion.div>
      {title}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="flex w-full justify-center items-center space-x-2"
      >
        <div className="w-[15vh] p-1 rounded-xl bg-red-400 flex justify-center items-center gap-1 hover:cursor-pointer hover:-translate-y-1 transition-all text-cen">
          Resume <FaDownload className="w-[2vh] h-[2vh] bg-red-400 " />
        </div>
        <a target="_blank" href="https://github.com/IvanDuran02">
          <div className="w-[15vh] p-1 rounded-xl bg-red-400 flex justify-center items-center gap-1 hover:cursor-pointer hover:-translate-y-1 transition-all">
            GitHub <FaGithub className="w-[2.5vh] h-[2.5vh] bg-red-400" />
          </div>
        </a>
      </motion.div>
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <div className="flex flex-col justify-center items-center space-y-2 animate-bounce">
          <span className="underline italic opacity-70">Scroll Me!</span>
          <FaArrowDown className="opacity-70 w-[2.5vh] h-[2.5vh]" />
        </div>
      </motion.div>
    </div>
  );
};
