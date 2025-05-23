import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
  FaCoffee,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-white min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400">
          About Me
        </h1>

        {/* About Me Text */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-blue-400">BOOPATHI</span>,
          an enthusiastic learner with a strong interest in
          <span className="font-bold text-blue-400"> frontend technologies</span> and
          <span className="font-bold text-blue-400"> cybersecurity</span>. I’m currently a
          <span className="font-bold text-blue-400"> sophomore</span> pursuing my B.E in Computer Science Engineering.
          Highly motivated with a passion for problem-solving and building innovative digital experiences.
          As a team player, I’ve taken leadership roles in collaborative projects, driving successful outcomes through clear communication and strategy.
          <span className="font-bold text-blue-400"> Proven leadership</span> in academic and technical settings.
          Committed to
          <span className="font-bold text-blue-400"> continuous learning</span> and applying modern solutions to real-world challenges,
          I aim to make a meaningful impact through technology and creativity.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-400 text-center">
            My Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
