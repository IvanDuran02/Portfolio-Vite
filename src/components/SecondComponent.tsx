import { motion } from "framer-motion";
const SecondComponent = () => {
  return (
    <div className="h-screen w-screen bg-slate-800 flex justify-center items-center overflow-hidden">
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ from: 0, delay: 1, type: "spring" }}
      >
        <h1 className="text-4xl">Welcome to my Portfolio!</h1>
      </motion.div>
    </div>
  );
};

export default SecondComponent;
