import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

import SnapComponent from "../components/SnapComponent";
import { Loading } from "./Loading";
import Projects from "./Projects";

// declare module 'react' {
//     interface HTMLAtrributes<T> {
//         children?: ReactI18NextChild | Iterable<ReactI18NextChild>
//     }
// }

export const Home = () => {
  // Workaround for window snapping being kind of weird on mobile devices due to collapsible menu bars...
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <main className="flex flex-col justify-center items-center overflow-x-hidden">
        <Loading />
        <Projects />
        <ScrollProgress />
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden">
      <>
        {[<Loading key={0} />, <Projects key={1} />].map((component, index) => (
          <SnapComponent props={component} key={index} type={null} />
        ))}
      </>
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
