import React from "react";
import FAQWithQuery from "../../components/FAQqueries";
const FAQ = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-600 mb-10">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <details className="group border-l-4 border-teal-500 bg-gray-50 p-6 rounded-md">
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-800">
              What is your mission?
              <span className="ml-4 text-teal-500 group-open:rotate-180 transform transition-transform duration-200">⌄</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Our mission is to create simple, scalable, and impactful digital products that solve real-world problems.
            </p>
          </details>

          {/* FAQ Item 2 */}
          <details className="group border-l-4 border-teal-500 bg-gray-50 p-6 rounded-md">
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-800">
              How can I contact support?
              <span className="ml-4 text-teal-500 group-open:rotate-180 transform transition-transform duration-200">⌄</span>
            </summary>
            <p className="mt-3 text-gray-600">
              You can reach out to our support team via the Contact Us page or email us at support@example.com.
            </p>
          </details>

          {/* FAQ Item 3 */}
          <details className="group border-l-4 border-teal-500 bg-gray-50 p-6 rounded-md">
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-800">
              How is Blue Dog Chew made?
              <span className="ml-4 text-teal-500 group-open:rotate-180 transform transition-transform duration-200">⌄</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Tibetan Dog Chews are made from yak and cow milk sourced from remote villages in Nepal. It contains only four ingredients: yak milk, cow milk, salt, and lime. Read about the whole process in how dog chews are made.
            </p>
          </details>
          
            <details className="group border-l-4 border-teal-500 bg-gray-50 p-6 rounded-md">
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg text-gray-800">
              What is the nutritional composition of Tibetan Dog Chew?
              <span className="ml-4 text-teal-500 group-open:rotate-180 transform transition-transform duration-200">⌄</span>
            </summary>
            <p className="mt-3 text-gray-600">
                The guaranteed analysis of Tibetan Dog Chew is as follows:
            <p>
            Crude Protein (min): 56.2%, Crude Fat (min): 0.9%, Crude Fiber (max): 0.4%, Moisture (max): 14%
            </p>
            </p>
          </details>
          <FAQWithQuery/>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
