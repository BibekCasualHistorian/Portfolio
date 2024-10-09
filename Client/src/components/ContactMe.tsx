import { FormEvent, useState } from "react";
import WithComponentHeader from "./WithComponentHeader";
import { AiFillEnvironment, AiFillMail, AiFillPhone } from "react-icons/ai";
import Toast from "./Toast";

interface ContactDetail {
  icon: JSX.Element;
  text: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: <AiFillMail size={30} className="text-gray-500" />,
    text: "www.koiralabibek2058@gmail.com",
  },
  {
    icon: <AiFillPhone size={30} className="text-gray-500" />,
    text: "+9779841158113",
  },
  {
    icon: <AiFillEnvironment size={30} className="text-gray-500" />,
    text: "Begnastal, Kaski-31, Nepal",
  },
];

const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://portfolio-ubp6.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, username: name }),
    });
    const data = await response.json();
    console.log("data", data);
    if (response.ok) {
      setToastMessage(data.message || "Message sent successfully!"); // Set success toast message
    } else {
      setToastMessage(
        data.message || "Failed to send message. Please try again."
      ); // Set error toast message
    }
    setLoading(false);
    setToastVisible(true); // Show toast
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleToastClose = () => {
    setTimeout(() => {
      setToastVisible(false); // Hide toast
    }, 5000);
  };

  return (
    <WithComponentHeader id="contact-me" header="Let's get in Touch">
      {toastVisible &&
        toastMessage && ( // Conditionally render the Toast component
          <Toast message={toastMessage} onClose={handleToastClose} />
        )}
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-1 space-y-3">
          <h1 className="text-4xl text-primaryText-light dark:text-primaryText-dark ">
            Let's talk
          </h1>
          <p className=" text-xl text-secondaryText-light dark:text-secondaryText-dark">
            I'm currently available to take on new projects, so feel free to
            send me a meesage about anything that you want me to work on. Feel
            free to Contact me by submitting the form below and I will get back
            to you as soon as possible
          </p>
          <div className="text-xl text-tertiaryText-light dark:text-tertiaryText-dark ">
            {contactDetails.map((detail, index) => (
              <section
                key={index}
                className="flex items-center overflow-hidden whitespace-nowrap"
              >
                <span>{detail.icon}</span>
                <h1
                  className="flex items-center p-2"
                  title={index == 0 ? "Yes it has www" : ""}
                >
                  : {detail.text}
                </h1>
              </section>
            ))}
          </div>
        </div>
        <div className="flex-1 p-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primaryText-light dark:text-primaryText-dark"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primaryText-light dark:text-primaryText-dark"
              >
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-primaryText-light dark:text-primaryText-dark"
              >
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
                disabled={
                  loading || !message.length || !email.length || !name.length
                }
                className="disabled:opacity-75 w-full bg-primary-light dark:bg-primary-dark text-primary-textLight dark:text-primary-textDark font-semibold py-2 rounded-md  transition"
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default ContactMe;
