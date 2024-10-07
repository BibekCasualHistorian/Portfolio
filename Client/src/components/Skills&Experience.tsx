import React from "react";
import {
  Boxes,
  Box,
  Layout,
  Code2,
  Terminal,
  Database,
  Palette,
  FileJson,
  GitBranch,
  Component,
  Puzzle,
  CircuitBoard,
} from "lucide-react";
import WithComponentHeader from "./WithComponentHeader";

interface Skill {
  name: string;
  icon: React.ElementType; // The type for an icon component
  color: string;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  description?: string;
}

interface SkillCardProps {
  skill: Skill;
  isColorMode: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
  isColorMode: boolean;
}

interface SkillsExperiencesProps {
  isColorMode?: boolean;
}

const skillsData: Skill[] = [
  { name: "Flutter", icon: Boxes, color: "#54C5F8" },
  { name: "Material UI", icon: Palette, color: "#007FFF" },
  { name: "Redux", icon: CircuitBoard, color: "#764ABC" },
  { name: "HTML5", icon: Code2, color: "#E34F26" },
  { name: "Vue", icon: Component, color: "#4FC08D" },
  { name: "Python", icon: Terminal, color: "#3776AB" },
  { name: "Sass", icon: Palette, color: "#CC6699" },
  { name: "TypeScript", icon: FileJson, color: "#3178C6" },
  { name: "Node.js", icon: Box, color: "#339933" },
  { name: "React JS", icon: Component, color: "#61DAFB" },
  { name: "CSS3", icon: Layout, color: "#1572B6" },
  { name: "Figma", icon: Puzzle, color: "#F24E1E" },
  { name: "GraphQL", icon: Database, color: "#E10098" },
  { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
];

const experienceData: Experience[] = [
  {
    year: "2023-2024",
    role: "Junior Developer",
    company: "BrandBuilder",
    description: "I worked on the existing node api.",
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ skill, isColorMode }) => (
  <div className="flex flex-col gap-1  py-3 rounded-xl bg-gray-50 items-center">
    <div
      className={`w-16 h-16  rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg ${
        isColorMode ? "bg-gray-50" : "bg-gray-100"
      }`}
    >
      {React.createElement(skill.icon, {
        size: 24,
        color: isColorMode ? skill.color : "#4B5563",
        className: "transition-transform duration-300 group-hover:scale-110",
      })}
    </div>
    <span className="text-sm text-gray-600 text-center">{skill.name}</span>
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isColorMode,
}) => (
  <div
    className="grid gap-5 cursor-pointer hover:bg-gray-100 p-3 px-3 border-black border-2 rounded-xl"
    style={{ gridTemplateColumns: "100px 1fr" }}
  >
    <div className="text-center pt-0.5">
      <span
        className={`font-semibold ${
          isColorMode ? "text-purple-600" : "text-gray-600"
        }`}
      >
        {experience.year}
      </span>
    </div>
    <div className="">
      <h3 className="font-semibold ">
        <span className="text-lg">{experience.role}</span> -{" "}
        <span className="text-gray-600 text-sm">{experience.company}</span>
      </h3>
      {experience.description && (
        <p className="text-gray-500 text-sm 1">{experience.description}</p>
      )}
    </div>
  </div>
);

const SkillsExperiences: React.FC<SkillsExperiencesProps> = ({
  isColorMode = false,
}) => {
  return (
    <WithComponentHeader
      id="skills-and-experience"
      header="Skills & Experience"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className="md:pr-2">
          <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="  px-3 md:py-7 grid grid-cols-2 md:grid-cols-3 gap-9">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} isColorMode={isColorMode} />
            ))}
          </div>
        </div>

        <div className="lg:border-l p-5 ">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Experience
          </h2>
          <div className="">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isColorMode={isColorMode}
              />
            ))}
          </div>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default SkillsExperiences;
