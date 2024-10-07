const Main = () => {
  return (
    <main className="flex-1 flex gap-7 md:gap-7  md:flex-row flex-col">
      <div className="flex-1  flex justify-center md:justify-end items-center ">
        <img
          src="public/my-photo.jpg"
          className="rounded-full w-[200px] md:w-[300px] md:h-[300px] mt-auto md:mt-0  h-[200px] object-cover"
          alt="real"
        />
      </div>
      <div className="flex-1 flex flex-col md:justify-center  space-y-2 text-center">
        <div className="md:w-fit md:space-y-3 md:ml-6">
          <h1 className="text-xl" style={{ lineHeight: "1" }}>
            Hello, I'm
          </h1>
          <h2 className="text-4xl font-medium" style={{ letterSpacing: "2px" }}>
            Bibek Koirala
          </h2>
          <h3 className="text-3xl">Full-Stack Developer</h3>
          <div className="flex mt-3 md:pt-2 justify-center gap-4">
            <button className="text-black border-2 hover:bg-black hover:text-white font-medium border-black rounded-full p-3 px-7">
              Download CV
            </button>
            <button className="bg-black hover:bg-white hover:text-black border-black border-2 font-medium text-white rounded-full p-3 px-8">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
