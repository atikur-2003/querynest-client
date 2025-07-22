import React from "react";

const FAQSection = () => {
  return (
    <div className="py-16">
        <div className="text-center mb-7">
            <h1 className="text-2xl md:text-3xl text-orange-500 font-bold">Frequently Asked Section</h1>
        </div>
      <div className="join join-vertical w-full px-2 md:px-10 bg-base-100">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            1. What is this platform all about?
          </div>
          <div className="collapse-content text-sm">
            This platform helps users ask questions about specific products and receive better recommendations from others. It’s a community-powered system to discover smarter, alternative buying choices.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            2. Who can post a query?
          </div>
          <div className="collapse-content text-sm">
            Anyone with an account can post a query. Simply log in or sign up to start asking questions about products you’re unsure about.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            3. What kind of queries can I post?
          </div>
          <div className="collapse-content text-sm">
            You can post any product-related query, especially if you’re looking to replace a product, avoid a brand, or discover better alternatives for your needs.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            4. How do I recommend an alternative product?
          </div>
          <div className="collapse-content text-sm">
            Go to any query, scroll to the "Add Recommendation" section, and fill in your suggestion. Add details like the recommended product name, image, and your reason.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            5. How is my data protected?
          </div>
          <div className="collapse-content text-sm">
            Your personal data is securely stored using Firebase Authentication, and sensitive operations are protected with JWT-based authorization. We also use environment variables to protect keys and credentials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
