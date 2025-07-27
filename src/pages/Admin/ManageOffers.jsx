import React, { useState } from "react";

const ManageOffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: "New Year Discount", description: "20% off on all products" },
    { id: 2, title: "Flash Sale", description: "Buy 1 Get 1 Free" },
  ]);

  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setOffers((prev) =>
        prev.map((offer) =>
          offer.id === editingId ? { ...offer, ...formData } : offer
        )
      );
      setEditingId(null);
    } else {
      const newOffer = {
        id: Date.now(),
        ...formData,
      };
      setOffers([...offers, newOffer]);
    }
    setFormData({ title: "", description: "" });
  };

  const handleEdit = (offer) => {
    setFormData({ title: offer.title, description: offer.description });
    setEditingId(offer.id);
  };

  const handleDelete = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Manage Offers</h2>

      <form onSubmit={handleAddOrUpdate} className="mb-6 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Offer Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Offer Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          {editingId ? "Update Offer" : "Add Offer"}
        </button>
      </form>

      <ul className="space-y-4">
        {offers.map((offer) => (
          <li key={offer.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <p>{offer.description}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(offer)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(offer.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOffers;
