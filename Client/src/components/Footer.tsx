import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegNewspaper,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub size={28} />, url: "https://github.com", name: "GitHub" },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://linkedin.com",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter size={28} />,
    url: "https://twitter.com",
    name: "Twitter",
  },
  {
    icon: <FaRegNewspaper size={28} />,
    url: "https://news.ycombinator.com",
    name: "News",
  },
  {
    icon: <FaYoutube size={28} />,
    url: "https://youtube.com",
    name: "YouTube",
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900  text-white p-8 pt-14">
      <div className="flex flex-col justify-start md:flex-row gap-7    px-4">
        <div className="flex-1  space-y-3 order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Bibek Koirala</h2>
          <p className="text-sm">
            Passionate about creating beautiful and functional user experiences.
            Let's build something amazing together!
          </p>
        </div>
        <div className="flex-1  text-left md:text-right order-1 md:order-2">
          <h3 className="text-xl font-semibold">SOCIAL</h3>
          <div className="flex justify-start md:justify-end gap-5 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {currentYear}. Made by Bibek Koirala
      </div>
    </footer>
  );
};

export default Footer;
