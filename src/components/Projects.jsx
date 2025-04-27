import { motion } from "framer-motion";
import projects from "../constants";

const Projects = () => {
  return (
    <div className="text-center bg-FEFAF6 flex flex-col w-full p-4">
      <h2 className="text-2xl mt-8 text-gray-600 mb-4">Browse My Recent</h2>
      <h2 className="text-5xl font-bold mb-8 tracking-wide">Projects</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full m-0">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border rounded-xl p-4 border-slate-500"
          >
            <h3 className="font-bold mb-4 text-2xl">{project.name}</h3>

            <div className="object-contain">
              <img
                src={project.image}
                alt="image"
                className="w-full object-contain rounded-lg mb-4 transform transition-transform duration-200 ease-in-out hover:scale-105"
              />
            </div>

            {project.technology.map((tech, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-md text-purple-800 mr-2"
              >
                {tech}
              </span>
            ))}

            <p className="mb-4 mt-4 text-left">{project.description}</p>

            <div className="flex flex-col space-y-2 md:flex-col md:space-y-2 sm:space-y-2">
              <a
                href={project.github}
                className="sm:mb-0 w-full text-center rounded-2xl border border-black px-8 py-2 hover:bg-black hover:text-white transform transition-transform duration-500 ease-in-out"
              >
                Github
              </a>
              <a
                href={project.live}
                className="w-full text-center rounded-2xl px-4 py-2 border border-black hover:bg-black hover:text-white transform transition-transform duration-500 ease-in-out"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
