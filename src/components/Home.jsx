import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#87CEEB]">BOOPATHI</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#87CEEB]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Cyber-security Analyst.",
                  "Web Designer.",
                  "Cloud Engineer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate MERN stack developer with 2 year of experience,
            dedicated to building user-friendly web applications. I thrive on
            learning and sharing knowledge as a tutor and content creator.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#87CEEB]" size={20} />
              <span>Chennai</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#87CEEB]" size={20} />
              <span>9345855575</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#87CEEB]" size={20} />
              <span>maniboopathi0007@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#87CEEB] px-5 py-2 rounded-2xl font-bold ">
          <a 
            href="https://tinyurl.com/BoopathiCV?dl=1" 
            target="_blank" 
            rel="noopener noreferrer" 
           className="text-white">
          Download CV
          </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[350px] rounded-[350px]"
            src="/Boopathi image.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
