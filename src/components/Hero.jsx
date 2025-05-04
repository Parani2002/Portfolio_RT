import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hello, I&apos;m <span className="text-primary">Paranitharan Suntharalingam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 "
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
            whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Parani CV
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Parani2002"
            whileHover={{ scale: 1.2, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Github
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
