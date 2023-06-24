import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import FirstComponent from "../components/FirstComponent";
import ParallaxText from "../components/ParalaxText";
import SecondComponent from "../components/SecondComponent";
import SnapComponent from "../components/SnapComponent";
import { Loading } from "./Loading";

// declare module 'react' {
//     interface HTMLAtrributes<T> {
//         children?: ReactI18NextChild | Iterable<ReactI18NextChild>
//     }
// }

export const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center overflow-clip">
      <Loading />
      {/* <> Snap scrolling implementation
        {[
          <Loading key={0} />,
          <FirstComponent key={1} />,
          <SecondComponent key={2} />,
        ].map((component, index) => (
          <SnapComponent props={component} key={index} type={null} />
        ))}
      </> */}
      <ScrollProgress />
    </main>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // brings window to top when reloaded
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 origin-left bg-red-400"
      style={{ scaleX }}
    />
  );
};
