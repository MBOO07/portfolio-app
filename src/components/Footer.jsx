import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} ManiBoopathi. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            ManiBoopathi
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/MBOO07"
            className="hover:text-[#87CEEB]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/boopathi-m-7b89b92b0/"
            className="hover:text-[#87CEEB]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/mani__boopathi_07/"
            className="hover:text-[#87CEEB]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
