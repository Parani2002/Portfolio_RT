
import technologies from "../constants/technologies";
import studies from "../constants/study";
import myimage from "../../public/images/myimage.png";
import experience from "../../public/images/experience.png";
import education from "../../public/images/education.png";

const AboutMe = () => {
  return (
    <div className="text-center bg-FEFAF6 flex flex-col w-full p-4 items-center">
      <h2 className="text-2xl mt-8 text-gray-600 mb-4">Get To Know More</h2>
      <h2 className="text-5xl font-bold mb-8 tracking-wide">About Me</h2>
      <img
        src={myimage}
        alt="my-image"
        width={200}
        height={200}
        className="border rounded-xl mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border rounded-xl border-gray-500 px-16 py-8 flex flex-col items-center">
          <img
            src={experience}
            alt="experience"
            height={30}
            width={30}
          />
          <h2 className="font-bold">Experience</h2>
          <p className="text-gray-500">1 year</p>
          <p className="text-gray-600 hover:text-blue-500 transition duration-300">
            <a
              href="https://mydynamica.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-semibold"
            >
              MyDynamica (Pvt) Ltd
            </a>
          </p>
          <div>
            <p className="font-semibold">Technologies</p>
            <span className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              {technologies.map((tech) => (
                <p
                  className="sm:text-center md:text-left text-gray-500"
                  key={tech.id}
                >
                  {" "}
                  • {tech.name}
                </p>
              ))}
            </span>
          </div>
        </div>
        <div className="border rounded-xl border-gray-500 px-16 py-8 flex flex-col items-center">
          <img
            src={education}
            alt="education"
            height={30}
            width={30}
          />
          <h2 className="font-bold">Education</h2>
          <p className="text-gray-500">
            BEng (Hons) Software Engineering(Reading)
          </p>
          <p className="text-gray-600 hover:text-blue-500 transition duration-300">
            <a
              href="https://www.iit.ac.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-semibold"
            >
              Informatics Institute of Technology
            </a>
          </p>
          <div>
            <p className="font-semibold">Technologies</p>
            <span className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              {studies.map((tech) => (
                <p
                  className="sm:text-center md:text-left text-gray-500"
                  key={tech.id}
                >
                  {" "}
                  • {tech.name}
                </p>
              ))}
            </span>
          </div>
        </div>
      </div>
      <h2 className="text-gray-500">
        I am a dedicated and passionate undergraduate student pursuing a
        Bachelor&apos;s degree in Software Engineering at University of
        Westminster,UK. With a keen interest in technology and a drive to
        innovate, I am committed to honing my skills in software development and
        contributing to the advancement of the industry.
      </h2>
    </div>
  );
};

export default AboutMe;
