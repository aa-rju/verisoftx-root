import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "../components/Carousel";
function Home({ searchTerm }) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("Fetched data:", res.data); // <-- Confirm here
      setProducts(res.data);
    })
    .catch((err) => console.error("Failed to fetch products", err));
}, []);

const filteredProducts = Array.isArray(products)
  ? products.filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
    )
  : [];


  return (
    <div className="bg-secondary6">
      <Carousel className="mx-auto object-cover px-8 py-8"/>
      <div className=" md:mx-16 sm:mx-4 object-cover rounded-lg px-8 py-8 bg-secondary6/50">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Featured Products
        </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-secondary4 p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-500"
        >
          <div className="h-60  flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 duration-500"
            />
          </div>

          <h2 className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
            {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
          </h2>

          <p className="text-green-600 text-md font-bold mt-1">${product.price}</p>

          <Link
            to={`/product/${product.id}`}
            className="mt-3 inline-block text-sm font-medium hover:text-white border px-2 py-3 rounded-md bg-white hover:bg-pink-600 transition duration-500"
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
