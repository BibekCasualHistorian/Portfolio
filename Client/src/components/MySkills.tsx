import React from "react";
import WithComponentHeader from "./WithComponentHeader";
import { FaCheck } from "react-icons/fa";

// Skills data categorized into Frontend, Backend, and Tools
const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "Tailwind CSS", level: "Experienced" },
      { skill: "SASS", level: "Basic" },
      { skill: "JavaScript", level: "Experienced" },
      { skill: "TypeScript", level: "Intermediate" },
      { skill: "ReactJS", level: "Experienced" },
      { skill: "VueJS", level: "Intermediate" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { skill: "PostgreSQL", level: "Intermediate" },
      { skill: "MongoDB", level: "Experienced" },
      { skill: "Node JS", level: "Experienced" },
      { skill: "Express JS", level: "Experienced" },
    ],
  },
];

const MySkills: React.FC = () => {
  return (
    <WithComponentHeader id="my-skills" header="MySkills">
      <div className="text-center flex items-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2  md:flex-row flex-wrap justify-center gap-8">
          {skillsData.map((categoryData, index) => (
            <div
              key={index}
              className={`w-full bg-white p-8 rounded-3xl border-2 border-black  ${
                index == 2 && "lg:col-span-2 lg:w-fit mx-auto "
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">
                {categoryData.category}
              </h3>
              <ul className="grid grid-cols-2 gap-9 ">
                {categoryData.skills.map((skillItem, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="grid grid-cols-2 items-center justify-center   text-center px-1"
                  >
                    <div
                      className=" grid w-fit min-w-[150px] items-center "
                      style={{ gridTemplateColumns: "30px 1fr" }}
                    >
                      <div className="w-fit h-fit bg-black p-1 flex justify-center items-center text-white rounded-full">
                        <FaCheck size={10} className="" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-semibold text-nowrap">
                          {skillItem.skill}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skillItem.level}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default MySkills;
