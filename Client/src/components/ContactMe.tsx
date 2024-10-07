import { FormEvent, useState } from "react";
import WithComponentHeader from "./WithComponentHeader";
import { AiFillEnvironment, AiFillMail, AiFillPhone } from "react-icons/ai";

interface ContactDetail {
  icon: JSX.Element;
  text: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: <AiFillMail size={30} className="text-gray-500" />,
    text: "email@example.com",
  },
  {
    icon: <AiFillPhone size={30} className="text-gray-500" />,
    text: "+1234567890",
  },
  {
    icon: <AiFillEnvironment size={30} className="text-gray-500" />,
    text: "123 Main St, City, Country",
  },
];

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { name, email, message }; // Prepare data to send to the backend
    console.log(formData); // Log or send to the backend
    // Clear form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <WithComponentHeader id="contact-me" header="Let's get in Touch">
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl ">Let's talk</h1>
          <p className=" text-xl">
            I'm currently available to take on new projects, so feel free to
            send me a meesage about anything that you want me to work on. Feel
            free to Contact me by submitting the form below and I will get back
            to you as soon as possible
          </p>
          <div className="text-xl ">
            {contactDetails.map((detail, index) => (
              <section key={index} className="flex items-center">
                {detail.icon}
                <h1 className="flex items-center p-2">: {detail.text}</h1>
              </section>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state for name
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state for email
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={9}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update state for message
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default ContactMe;
