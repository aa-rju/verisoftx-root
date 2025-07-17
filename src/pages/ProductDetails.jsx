// import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

// Dummy product data (replace with API or context later)
const dummyProducts = [
  {
    id: "1",
    name: "Premium Dog Food",
    price: "$29.99",
    description: "High-protein formula made with real chicken and vegetables.",
    image:
      "https://th.bing.com/th/id/OIP.6-bhbGKViWY5ncRyfd7bnAAAAA?w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "2",
    name: "Organic Dog Biscuits",
    price: "$14.99",
    description: "Made from 100% organic ingredients. Great for training.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
  {
    id: "3",
    name: "Chew Toy Set",
    price: "Rs. 450",
    image:
      "https://www.bing.com/th/id/OIP.Htu-ypAKxGPi4jAdZqj6pwHaE8?w=149&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "4",
    name: "Organic Biscuits",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
  {
    id: "5",
    name: "Organic Biscuits",
    price: "Rs. 800",
    image:
      "https://www.bing.com/th/id/OIP.jNKk8u5AeCxAslbh6gLgeQHaE8?w=144&h=103&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "6",
    name: "Organic Biscuits",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = dummyProducts.find((p) => p.id === id);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please log in to add items to cart.");
      return;
    }
    addToCart(product);
    toast.success("Item added to cart!");
  };

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl text-primary font-semibold mb-6">
            {product.price}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
