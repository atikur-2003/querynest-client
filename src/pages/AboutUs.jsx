import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="py-28">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
        className="mb-16 px-6 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl dark:text-gray-300">
          Welcome to{" "}
          <span className="font-semibold text-orange-500">QueryNest</span>, your
          go-to platform for sharing and discovering the best product
          recommendations from real users like you. You can post your query here
          and can find your best solution.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
        className="mb-16 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl">
            Our mission is simple: to create a trustworthy space where people
            can share honest opinions and discover products that truly meet
            their needs. We believe that recommendations should come from real
            experiences, not just advertisements.
          </p>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="mb-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-orange-500 font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="p-8 bg-base-300 rounded-lg shadow-md"
          >
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Ask for Recommendations
            </h3>
            <p>
              Post your query and let our community suggest products based on
              their personal experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="p-8 bg-base-300 rounded-lg shadow-md"
          >
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Share Your Experience
            </h3>
            <p>
              Have a favorite product? Recommend it to others and help them make
              better choices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            className="p-8 bg-base-300 rounded-lg shadow-md"
          >
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Make Informed Decisions
            </h3>
            <p>
              Browse through recommendations, compare options, and pick what’s
              best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
        className="py-12 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
            Our Values
          </h2>
          <p className="text-lg mb-6">
            We stand by transparency, trust, and community. Our platform thrives
            on genuine connections and real product experiences.
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className=" px-4 py-2 bg-base-200 font-semibold text-orange-500 rounded-full shadow">
              Honesty
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-orange-500 rounded-full shadow">
              Community
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-orange-500 rounded-full shadow">
              Quality
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-orange-500 rounded-full shadow">
              Transparency
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
