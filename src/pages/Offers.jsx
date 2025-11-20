import React from "react";
import { Link } from "react-router-dom";
const offers = [
  {
    id: 1,
    title: "Web Development",
    offerPrice: 1499,
    originalPrice: 2999,
    image: "https://www.bing.com/th/id/OIP.26jfL6Q_LQGPeVWapx9rJwHaGu?w=198&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
  {
    id: 2,
    title: "Mobile App Development",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
    {
    id: 3,
    title: "CMS Development",
    offerPrice: 1499,
    originalPrice: 2999,
    image: "https://www.bing.com/th/id/OIP.26jfL6Q_LQGPeVWapx9rJwHaGu?w=198&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
    {
    id: 4,
    title: "Desktop App Development",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
      {
    id: 4,
    title: "Social Media Marketing",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
      {
    id: 4,
    title: "Graphics Design",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
      {
    id: 4,
    title: "Web Hosting",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
      {
    id: 4,
    title: "Domain Name Registration",
    offerPrice: 999,
    originalPrice: 1999,
    image: "https://www.bing.com/th/id/OIP.gghuQhPtmKmFFp6i1ETGBQHaLx?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
  },
  // Add more products as needed
];

const Offers = () => {
  return (
    // <div className="min-h-screen bg-gray-100 p-6">
    //   <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Our Services</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //     {offers.map((item) => (
    //       <div
    //         key={item.id}
    //         className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center"
    //       >
    //         <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
    //         <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //         <div className="mb-2">
    //           <span className="text-lg font-bold text-green-600">₹{item.offerPrice}</span>
    //           <span className="text-sm text-gray-500 line-through ml-2">₹{item.originalPrice}</span>
    //         </div>
    //         <button className="bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition">
    //           Buy Now
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="px-20 py-10 bg-black/50">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
      {offers.map((product) => (
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


          <h2 className="mt-2 text-30px font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
            {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
          </h2>

          <div className="mb-2 mt-4">
               <span className="text-lg font-bold text-green-600">${product.offerPrice}</span>
               <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            </div>
          <Link
            to={`/product/${product.id}`}
            className="mt-3 inline-block text-sm font-medium hover:text-white border px-2 py-3 rounded-md bg-white hover:bg-pink-600 transition duration-500"
          >
            Click To know More
          </Link>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Offers;
