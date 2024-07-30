import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-[568px] mx-auto font-alata mt-12">
        <h2 className="text-2xl sm:text-[28px] font-bold mb-6">
          <span className="text-white">My Skills</span>
          <span className="text-green-500"> & Experience</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Aspiring web developer skilled in HTML, CSS, and JavaScript.
          Experienced in making responsive web pages and basic back-end work
          with Node.js. Familiar with Git and Bootstrap. Passionate about
          learning and building web projects.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-28">
        {[
          { icon: faJs, title: "JavaScript", description: "Basic understanding of JavaScript for adding interactivity to web pages." },
          { icon: faHtml5, title: "HTML & CSS", description: "Proficient in creating structured web pages using HTML and styling them with CSS." },
          { icon: faPhp, title: "DB & PHP", description: "Basic knowledge of PHP and SQL for server-side scripting and database management. Experienced in creating dynamic web pages and managing data storage." },
          { icon: faNodeJs, title: "NodeJs", description: "Basic experience with Node.js for building server-side applications. Created simple servers to handle HTTP requests and serve static files." },
        ].map((skill, index) => (
          <div key={index} className="relative bg-Color2 rounded-xl p-6 w-full sm:w-[calc(50%-1rem)] lg:w-[287px] h-[315px] flex flex-col items-center">
            <div className="bg-green-500 rounded-full h-20 w-20 absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <FontAwesomeIcon icon={skill.icon} className="text-white text-4xl" />
            </div>
            <h3 className="text-white mt-10 font-roboto font-bold text-center">{skill.title}</h3>
            <div className="h-1 w-10 bg-green-500 mt-2 mb-4 rounded-full"></div>
            <p className="text-gray-300 mt-4 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mt-16">
        <button className="h-10 w-44 rounded-xl border-2 border-Color3 text-Color3 font-acme text-[18px] flex justify-center items-center hover:underline active:bg-slate-700">
          Hire Me
        </button>
      </div> */}
    </div>
  );
};

export default Skills;