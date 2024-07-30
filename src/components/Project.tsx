import React from 'react';
import { useNavigate } from 'react-router-dom';


const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  const projectImages = [
    "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", // Image 1
    "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg", // Image 2
    "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", // Image 1 repeated
    "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg", // Image 2 repeated
    "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"
  ];

  const projectNames = [
    "Edge-Reach-Hub Web",
    "My-Portfolio",
    "Guessing Game",
    "Papper And RockScissors",
    "Calculator",
    "Analytics Dashboard",
  ];

  const githubLinks =[
    "https://github.com/EdgeReachTech/edge-reach-web-fn",
    "https://github.com/Mucyo-Papy-Blaise/Portfolio",
    "https://github.com/Mucyo-Papy-Blaise/roll-game",
    "https://github.com/Mucyo-Papy-Blaise/demo-repo",
    "https://github.com/Mucyo-Papy-Blaise/calculator",
    "https://github.com/Mucyo-Papy-Blaise/JAVA-CSS-HTML"

  ]

  return (
    <div className="min-h-full relative bg-Color2 py-16">
      <div className="text-center max-w-2xl mx-auto font-alata">
        <h2 className="text-4xl font-bold mb-6 text-white">
          My <span className="text-green-500">Projects</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto max-w-6xl px-4">
        {projectImages.map((image, index) => (
          <div key={index} 
          
          className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
            <img
              src={image}
              alt={projectNames[index]} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <button
                className="text-xl font-semibold text-white"
                onClick={() => handleProjectClick(index + 1)}
              >
                {projectNames[index]} 
              </button>
              <div className="mt-2">
                <a
                  href={githubLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <button className="h-10 w-44 rounded-xl border-2 border-green-500 text-green-500 font-acme text-lg flex justify-center items-center hover:underline active:bg-slate-700">
          View More
        </button>
      </div>
    </div>
  );
};

export default Projects;
