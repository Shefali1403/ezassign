import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      alert("Message sent successfully!");
      console.log("Response:", response.data);

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert(" Something went wrong. Please try again.");
      console.log("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between px-6 py-10  gap-1">
      <div className="md:w-1/2 text-gray-800 leading-7">
        <p>
          Whether you have an idea, a question, or simply want to explore how we
          can work together — we're just a message away. Let’s catch up over
          coffee. Great stories always begin with a good conversation.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Join the Story</h1>
        <p className="text-sm text-gray-700">
          Ready to bring your vision to life? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />

          <textarea
            rows="3"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-[#f15d2b]  text-white font-medium rounded-xl transition-all w-fit 
              ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="w-full flex justify-end mt-10 pr-3">
        <img src="/images/portbord.png" alt="not found" className="w-[100px]" />
      </div>
    </div>
  );
};

export default Contact;
