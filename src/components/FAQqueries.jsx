import React, { useState } from "react";

const FAQWithQuery = () => {
  const [query, setQuery] = useState("");
  const [submittedQueries, setSubmittedQueries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    const newQuery = {
      id: Date.now(),
      question: query,
      answer: null, // to be filled by admin
    };
    setSubmittedQueries([newQuery, ...submittedQueries]);
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">FAQ + Ask a Question</h1>

        {/* User query form */}
        <form onSubmit={handleSubmit} className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Ask your question..."
            className="flex-1 border border-teal-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Display submitted queries */}
        <div className="space-y-4">
          {submittedQueries.length === 0 ? (
            <p className="text-gray-500">No queries submitted yet.</p>
          ) : (
            submittedQueries.map((q) => (
              <div key={q.id} className="border border-gray-200 p-4 rounded-md">
                <p className="font-medium text-gray-800">Q: {q.question}</p>
                {q.answer ? (
                  <p className="mt-2 text-teal-700">A: {q.answer}</p>
                ) : (
                  <p className="mt-2 text-gray-400 italic">Waiting for admin response...</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQWithQuery;
