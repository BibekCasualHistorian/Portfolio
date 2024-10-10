import WithComponentHeader from "./WithComponentHeader";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl?: string;
  isLiveDemoDisabled?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Effix",
    imageUrl: "Effix-pictureone.jpg",
    githubUrl: "https://github.com/username/e-commerce",
    liveDemoUrl: "https://e-commerce-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 2,
    title: "Blog App",
    imageUrl: "Blog-pictureone.jpg",
    githubUrl: "https://github.com/username/weather-app",
    liveDemoUrl: "https://weather-dashboard-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 3,
    title: "Chat",
    imageUrl: "Chat-pictureone.jpg",
    githubUrl: "https://github.com/username/task-manager",
    isLiveDemoDisabled: true,
  },
  {
    id: 4,
    title: "Movie App",
    imageUrl: "Movie-With-Redux-pictureone.jpg",
    githubUrl: "https://github.com/username/social-dashboard",
    liveDemoUrl: "https://social-dashboard-demo.com",
    isLiveDemoDisabled: false,
  },
];

const Projects = () => {
  return (
    <WithComponentHeader id="projects" header="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((each: Project, index: number) => {
          return (
            <div
              key={index}
              className="boder-primary-borderLight dark:borer-primary-borderDark border-2 bg-gray-100  space-y-3 p-6 rounded-3xl "
            >
              <img
                src={`https://portfolio-frontend-pikm.onrender.com/${each.imageUrl}`}
                alt=""
                className="rounded-3xl min-h-[220px] object-cover"
              />
              <h1 className="text-center text-2xl font-semibold ">
                {each.title}
              </h1>
              <div className="flex justify-evenly">
                <button
                  disabled
                  className="p-2 px-6 text-sm border bg-theme-dark  text-primaryText-dark  border-none font-semibold  rounded-3xl"
                >
                  <a href={each.githubUrl} className="text-inherit">
                    {" "}
                    Github
                  </a>
                </button>
                <button
                  disabled
                  className="disabled:opacity-75 p-2 px-6 text-sm border border-black font-semibold rounded-3xl"
                >
                  Live Demo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </WithComponentHeader>
  );
};

export default Projects;
