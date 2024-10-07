import WithComponentHeader from "./WithComponentHeader";

const AboutPage = () => {
  return (
    <WithComponentHeader id="about-me" header="About Me">
      <div className="max-w-7xl mx-auto py-8 lg:p-8">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <img
                src="public/my-photo.jpg"
                alt="Professional headshot"
                className="rounded-2xl object-cover shadow-xl h-full"
              />
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-purple-100 rounded-2xl"></div>
              <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-blue-50 rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Full Stack Developer
              </h2>
              <p className="text-lg text-purple-600 font-medium">
                Turning ideas into reality through code
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm a passionate MERN (MongoDB, Express.js, React.js,
                Node.js) stack developer with a keen eye for creating seamless
                web applications. With expertise in both frontend and backend
                development, I specialize in building full-stack solutions that
                solve real-world problems.
              </p>

              <p>
                My journey in web development began with a fascination for
                creating interactive user experiences. Today, I leverage the
                power of the MERN stack to build scalable, efficient, and modern
                web applications.
              </p>

              <p>
                Beyond coding, I'm passionate about staying up-to-date with the
                latest web technologies and best practices. I believe in writing
                clean, maintainable code and creating user-friendly interfaces
                that provide exceptional user experiences.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default AboutPage;
