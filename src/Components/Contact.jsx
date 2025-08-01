import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully! thank you contacting");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
}
