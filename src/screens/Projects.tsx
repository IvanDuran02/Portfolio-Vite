import greenBlob from "../assets/greenBlob.svg";

const Projects = () => {
  const projectData = [
    {
      name: "GymBros",
      desc: "Mobile app for tracking gym progress with friends!",
      image: "/gymbros.png",
      alt: "Gymbros Website Image",
      web: "https://getgymbros.com",
      color: "red",
    },
    {
      name: "EstateGuesser",
      desc: "Guessing game for housing prices inside of the US",
      image: "/estateguesser.png",
      alt: "EstateGuesser Website Image",
      web: "https://estate-guesser.vercel.app/",
      color: "green",
    },
    {
      name: "Bookmark",
      desc: "Static HTML/CSS Website",
      image: "/bookmark.png",
      alt: "Bookmark Website Image",
      web: "https://bookmark-azure.vercel.app/",
      color: "blue",
    },

    // Add more project data objects here
  ];

  return (
    <div className="flex flex-col justify-center items-start overflow-x-hidden">
      <h2 className="underline text-3xl font-bold h-auto text-center pl-8 z-10">
        My Projects
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
            color={project.color}
          />
        ))}
      </div>
      <img
        src={greenBlob}
        alt="blob"
        className="absolute h-[55vh] right-0 bottom-0 -translate-y-1/2 translate-x-1/2 -rotate-90 hidden md:flex"
      />
    </div>
  );
};

export default Projects;

const ProjectComponents = ({
  name,
  desc,
  image,
  alt,
  web,
  className,
  color,
}: {
  className: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
  web: string;
  color: string;
}) => {
  return (
    <a href={web} target="_blank">
      <div className={className}>
        <img className="shadow-xl" src={image} alt={alt} />
        <div className="-bottom-2 -right-2 bg-transparent text-black p-2">
          <span className="relative bg-transparent underline text-xl font-bold text-red-400">
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
