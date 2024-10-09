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
    title: "E-Commerce Platform",
    imageUrl: "/projects/e-commerce.jpg",
    githubUrl: "https://github.com/username/e-commerce",
    liveDemoUrl: "https://e-commerce-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    imageUrl: "/projects/weather-app.jpg",
    githubUrl: "https://github.com/username/weather-app",
    liveDemoUrl: "https://weather-dashboard-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 3,
    title: "Task Management App",
    imageUrl: "/projects/task-manager.jpg",
    githubUrl: "https://github.com/username/task-manager",
    isLiveDemoDisabled: true,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    imageUrl: "/projects/social-dashboard.jpg",
    githubUrl: "https://github.com/username/social-dashboard",
    liveDemoUrl: "https://social-dashboard-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    imageUrl: "/projects/portfolio.jpg",
    githubUrl: "https://github.com/username/portfolio",
    liveDemoUrl: "https://portfolio-demo.com",
    isLiveDemoDisabled: false,
  },
  {
    id: 6,
    title: "Chat Application",
    imageUrl: "/projects/chat-app.jpg",
    githubUrl: "https://github.com/username/chat-app",
    isLiveDemoDisabled: true,
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
                src="https://portfolio-frontend-pikm.onrender.com/public/my-photo.jpg"
                alt=""
                className="rounded-3xl"
              />
              <h1 className="text-center text-2xl font-semibold ">
                Project One
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
