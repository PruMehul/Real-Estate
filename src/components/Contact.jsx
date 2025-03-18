import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/mqaanjje", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setResult("");
      toast.success("Form Submitted!");
      event.target.reset();
    } else {
      toast.error("Submission failed, please try again.");
      setResult("Submission failed.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a new dream? Let's get in touch.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Email
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="message" placeholder="Message" required></textarea>
        </div>
        <button className="bg-orange-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "Send"}</button>
      </form>
    </motion.div>
  );
};

export default Contact;


