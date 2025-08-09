import React from "react";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-28">
      {/* Hero Section */}
      <section className="mb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Welcome to <span className="font-semibold text-orange-500">QueryNest</span>, your
          go-to platform for sharing and discovering the best product
          recommendations from real users like you. You can post your query here
          and can find your best solution.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16 px-6 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Our mission is simple: to create a trustworthy space where people
            can share honest opinions and discover products that truly meet
            their needs. We believe that recommendations should come from real
            experiences, not just advertisements.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-orange-500 font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Ask for Recommendations
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Post your query and let our community suggest products based on
              their personal experience.
            </p>
          </div>
          <div className="p-8 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Share Your Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a favorite product? Recommend it to others and help them make
              better choices.
            </p>
          </div>
          <div className="p-8 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl text-orange-500 font-semibold mb-3">
              Make Informed Decisions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through recommendations, compare options, and pick what’s
              best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-6 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We stand by transparency, trust, and community. Our platform thrives
            on genuine connections and real product experiences.
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="dark:bg-gray-700 px-4 py-2 font-semibold text-orange-500 rounded-full shadow">
              Honesty
            </li>
            <li className="dark:bg-gray-700 px-4 py-2 font-semibold text-orange-500 rounded-full shadow">
              Community
            </li>
            <li className="dark:bg-gray-700 px-4 py-2 font-semibold text-orange-500 rounded-full shadow">
              Quality
            </li>
            <li className="dark:bg-gray-700 px-4 py-2 font-semibold text-orange-500 rounded-full shadow">
              Transparency
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
