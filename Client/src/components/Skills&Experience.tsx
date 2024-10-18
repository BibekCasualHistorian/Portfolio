import React from "react";

import WithComponentHeader from "./WithComponentHeader";

interface Skill {
  name: string;
  color: string;
  imagePath?: string;
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
  // { name: "Flutter", color: "#54C5F8", imagePath: "/flutter.png" },
  { name: "HTML5", color: "#E34F26", imagePath: "/html5.png" },
  { name: "CSS3", color: "#1572B6", imagePath: "/css.png" },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    imagePath: "/javascript.png",
  },
  { name: "Node.js", color: "#339933", imagePath: "/node.png" },
  {
    name: "React JS",
    color: "#61DAFB",
    imagePath: "/react.png",
  },
  {
    name: "Redux",
    color: "#764ABC",
    imagePath: "/redux.png",
  },
  { name: "Vue", color: "#4FC08D", imagePath: "/vue.png" },
  {
    name: "TypeScript",
    color: "#3178C6",
    imagePath: "/typescript.png",
  },
  {
    name: "GraphQL",
    color: "#E10098",
    imagePath: "/graphql.png",
  },
  { name: "Git", color: "#F05032", imagePath: "/git.png" },
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
      <img
        src={`https://portfolio-frontend-pikm.onrender.com/${skill.imagePath}`}
        alt={skill.name}
        className=" object-contain h-12 w-12 hover:w-14 hover:h-14 transition-all delay-150 ease-in "
        color={skill.color}
      />
    </div>
    <span className="text-sm text-gray-600 text-center">{skill.name}</span>
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div
    className="grid  gap-5 cursor-pointer  p-3 px-3 bg-gray-50 rounded-lg"
    style={{ gridTemplateColumns: "100px 1fr" }}
  >
    <div className="text-center pt-0.5">
      <span
        className={`font-semibold text-primary-light dark:text-primary-dark `}
      >
        {experience.year}
      </span>
    </div>
    <div className="">
      <h3 className="font-semibold ">
        <span className="text-lg  text-primaryText-light dark:text-primaryText-dark">
          {experience.role}
        </span>{" "}
        -{" "}
        <span className="text-secondaryText-light dark:text-secondaryText-dark text-sm">
          {experience.company}
        </span>
      </h3>
      {experience.description && (
        <p className="text-tertiaryText-light dark:text-tertiaryText-dark text-sm 1">
          {experience.description}
        </p>
      )}
    </div>
  </div>
);

const SkillsExperiences: React.FC<SkillsExperiencesProps> = ({
  isColorMode = true,
}) => {
  return (
    <WithComponentHeader id="experience" header="Skills & Experience">
      <div className=" grid grid-cols-1 gap-8 md:gap-0 lg:grid-cols-2">
        <div className="md:pr-2">
          <h2 className="text-2xl text-primaryText-light dark:text-primaryText-dark font-semibold mb-4 text-center">
            Skills
          </h2>
          <div className="  px-3 md:py-7 grid grid-cols-2 md:grid-cols-3 gap-9">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} isColorMode={isColorMode} />
            ))}
          </div>
        </div>

        <div className="lg:border-l px-4">
          <h2 className="text-2xl text-primaryText-light dark:text-primaryText-dark font-semibold mb-10 text-center">
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
