import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-20 pb-32"
        >
          <div className="max-w-3xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="src/assets/parani.jpeg"
              whileDrag={true}
              width={200}
              height={200}
              alt="Hero Image"
              className="w-64 h-64 mb-8 rounded-full shadow-lg"
            />
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hello, I&apos;m <span className="text-primary">Paranitharan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              A passionate developer building beautiful and functional web
              experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
              href="src/assets/my resume.pdf"
              download={true}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                {" "}
                Parani CV
              </motion.a>
              <motion.a
                target="_blank"
  rel="noopener noreferrer"
              href="https://github.com/Parani2002"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                {" "}
                Github
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hero;
