import React, { useState } from "react";

const ChewSelector = () => {
  const [formData, setFormData] = useState({
    size: "",
    flavor: "",
    type: "",
  });

  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this logic with real product suggestions
    setRecommendation(
      `Try our ${formData.size} ${formData.flavor} ${formData.type} Chews!`
    );
  };

  return (
    <div className="min-h-screen bg-[#fffdf6] flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">
        🦴 Chew Selector
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Dog Size
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Flavor Preference
          </label>
          <select
            name="flavor"
            value={formData.flavor}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select flavor</option>
            <option value="Chicken">Chicken</option>
            <option value="Beef">Beef</option>
            <option value="Peanut Butter">Peanut Butter</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Chew Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select type</option>
            <option value="Soft">Soft</option>
            <option value="Crunchy">Crunchy</option>
            <option value="Dental">Dental</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md"
        >
          Find My Chew!
        </button>
      </form>

      {recommendation && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md max-w-md text-center">
          <strong>Recommended:</strong> {recommendation}
        </div>
      )}
    </div>
  );
};

export default ChewSelector;
