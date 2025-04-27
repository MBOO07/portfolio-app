import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Hide success message after 4 seconds
        setTimeout(() => setSuccess(null), 4000); // message disappears after 4 seconds
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#ffffff] min-h-screen flex items-center justify-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#87CEEB]">
            Get in touch
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[150px] justify-center">
          <div className="flex flex-col space-y-5 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#87CEEB]" size={20} />
              <span>Chennai</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#87CEEB]" size={20} />
              <span>9345855575</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#87CEEB]" size={20} />
              <span>maniboopathi0007@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold">Follow on</h2>
              <div className="flex gap-4">
                <a href="https://github.com/MBOO07" className="hover:text-[#87CEEB]">
                  <FaGithub size={29} />
                </a>
                <a href="https://www.linkedin.com/in/boopathi-m-7b89b92b0/" className="hover:text-[#87CEEB]">
                  <FaLinkedin size={29} />
                </a>
                <a href="https://www.instagram.com/mani__boopathi_07/" className="hover:text-[#87CEEB]">
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#87CEEB] text-center">Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-[#87CEEB] text-white py-3 rounded-md font-semibold hover:bg-[#d44810] disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center">
                Failed to send the message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
