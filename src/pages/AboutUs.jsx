import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-26 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-white mb-6">
          About Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          At <span className="font-semibold">QueryNest</span>, we help you find
          the best products through genuine user recommendations and expert
          insights.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our mission is simple — to make choosing the right product easy,
          transparent, and trustworthy.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Founded in 2025, we’ve grown into a community of product lovers who
          share experiences so you can shop smarter.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
