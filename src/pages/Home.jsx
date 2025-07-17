import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: "Rs. 1,200",
    image:
      "https://th.bing.com/th/id/OIP.6-bhbGKViWY5ncRyfd7bnAAAAA?w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 2,
    name: "Organic Biscuits",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
  {
    id: 3,
    name: "Chew Toy Set",
    price: "Rs. 450",
    image:
      "https://www.bing.com/th/id/OIP.Htu-ypAKxGPi4jAdZqj6pwHaE8?w=149&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 4,
    name: "Organic Biscuits",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
  {
    id: 5,
    name: "Organic Biscuits",
    price: "Rs. 800",
    image:
      "https://www.bing.com/th/id/OIP.jNKk8u5AeCxAslbh6gLgeQHaE8?w=144&h=103&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 6,
    name: "Organic Biscuits",
    price: "Rs. 800",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  },
];

function Home() {
  return (
    <div className="bg-white">
      <div className=" mx-auto object-cover rounded-lg px-8 py-8 bg-secondary3">
        <h1 className="text-3xl font-bold mb-6 text-secondary2">
          Featured Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-secondary2 p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-500 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h2>
              <p className="text-primary font-medium">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="inline-block mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
