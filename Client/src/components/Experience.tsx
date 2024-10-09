import WithComponentHeader from "./WithComponentHeader";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Tech Company A",
    duration: "Jan 2020 - Present",
    description: [
      "Developed and maintained the frontend of the main web application using React and Tailwind CSS.",
      "Collaborated with cross-functional teams to define project requirements.",
      "Implemented responsive design practices for mobile and desktop.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Software Corp B",
    duration: "Aug 2018 - Dec 2019",
    description: [
      "Designed and built REST APIs using Node.js and Express.",
      "Worked on database design and implementation with MongoDB.",
      "Improved system performance by optimizing queries and reducing latency.",
    ],
  },
];

const Experience = () => {
  return (
    <WithComponentHeader id="experience" header="Experience">
      <div className="py-10">
        {experienceData.map((experience, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">
              {experience.role}{" "}
              <span className="text-gray-500">@ {experience.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">{experience.duration}</p>
            <ul className="list-disc pl-5">
              {experience.description.map((point, i) => (
                <li key={i} className="mb-1 text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WithComponentHeader>
  );
};

export default Experience;
