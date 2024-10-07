import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="p-5 md:px-9 flex justify-between items-center bg-slate-300 ">
      <h1 className=" text-2xl font-normal md:text-2xl">Bibek Koirala</h1>
      <div className="hidden md:flex gap-5 text-sm md:text-xl">
        <a href="#about-me">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact</a>
      </div>
      <div className="flex flex-col md:hidden gap-1 w-8 cursor-pointer">
        <span className="bg-slate-700 h-1 w-full rounded-full"></span>
        <span className="bg-slate-700 h-1 w-full rounded-full"></span>
        <span className="bg-slate-700 h-1 w-full rounded-full"></span>
      </div>
    </nav>
  );
};

export default Navbar;
