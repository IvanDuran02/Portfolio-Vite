import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import greenBlob from "../assets/greenBlob.svg";
import SnapComponent from "../components/SnapComponent";
import { Loading } from "./Loading";

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
      <main className="flex flex-col justify-center items-center overflow-clip">
        <Loading />
        <Projects />
        <ScrollProgress />
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center overflow-clip">
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

const Projects = () => {
  const projectData = [
    {
      name: "GymBros.",
      desc: "Mobile app for tracking gym progress with friends!",
      image: "./src/assets/gymbros.png",
      alt: "Gymbros Website Image",
      web: "https://getgymbros.com",
    },
    {
      name: "GymBros.",
      desc: "Mobile app for tracking gym progress with friends!",
      image: "./src/assets/gymbros.png",
      alt: "Gymbros Website Image",
      web: "https://getgymbros.com",
    },
    {
      name: "GymBros.",
      desc: "Mobile app for tracking gym progress with friends!",
      image: "./src/assets/gymbros.png",
      alt: "Gymbros Website Image",
      web: "https://getgymbros.com",
    },
    // Add more project data objects here
  ];

  return (
    <div className="flex flex-col justify-center items-start overflow-y-hidden">
      <h2 className="underline text-3xl font-bold h-auto text-center pl-8 z-10">
        My Projects.
      </h2>
      <div className="max-w-[1440px] p-4 md:flex md:justify-between z-10">
        {projectData.map((project) => (
          <ProjectComponents
            className="p-1 bg-white rounded-md mb-4 max-w-[640px] m-4 z-10"
            key={project.name}
            name={project.name}
            desc={project.desc}
            image={project.image}
            alt={project.alt}
            web={project.web}
          />
        ))}
      </div>
      <img
        src={greenBlob}
        alt="blob"
        className="absolute h-[55vh] -right-64 -bottom-32 rotate-90"
      />
    </div>
  );
};

const ProjectComponents = ({
  name,
  desc,
  image,
  alt,
  web,
  className,
}: {
  className: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
  web: string;
}) => {
  return (
    <a href={web} target="_blank">
      <div className={className}>
        <img className="shadow-xl" src={image} alt={alt} />
        <div className="-bottom-2 -right-2 bg-transparent text-black p-2">
          <span className="relative bg-transparent text-black underline text-xl font-bold">
            {name}
          </span>
          <p className="bg-transparent text-black opacity-60 text-sm pl-1">
            {desc}
          </p>
        </div>
      </div>
    </a>
  );
};
