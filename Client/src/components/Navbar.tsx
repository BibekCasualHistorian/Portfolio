import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({
  theme,
  handleTheme,
}: {
  theme: string;
  handleTheme: () => void;
}) => {
  console.log("theme", theme);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about-me", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-me", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg  border-b  ">
      <div className="max-w-7xl mx-auto p-5 md:px-9 flex justify-between items-center relative">
        <h1 className="text-2xl font-medium text-primary-light dark:text-primary-dark ">
          Bibek Koirala
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm md:text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={handleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={handleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button
            className="relative z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        <div
          className={`fixed md:hidden top-0 right-0 h-screen w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "hidden translate-x-full"
          }`}
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col gap-6 pt-20 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div
            className="fixed md:hidden inset-0  transition-opacity duration-300"
            style={{ zIndex: 5 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
