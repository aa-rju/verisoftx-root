import React from "react";

const bundleDeals = [
  {
    id: 1,
    title: "Puppy Starter Bundle",
    image: "/assets/puppy-bundle.jpg", // replace with actual image path
    description: "Perfect for new puppy owners. Includes food, toy & treats.",
    price: "Rs. 1499",
    originalPrice: "Rs. 1899",
    remark: "Best Deal",
  },
  {
    id: 2,
    title: "Chewy Treat Combo",
    image: "/assets/chewy-combo.jpg",
    description: "Get 5 packs of our best-selling chewy sticks.",
    price: "Rs. 999",
    originalPrice: "Rs. 1299",
    remark: "Hot Pick",
  },
  {
    id: 3,
    title: "Mega Munch Pack",
    image: "/assets/mega-munch.jpg",
    description: "Great for medium to large dogs. Contains 10+ snack varieties.",
    price: "Rs. 2499",
    originalPrice: "Rs. 2999",
    remark: "Limited Stock",
  },
];

const BundleTreatDeal = () => {
  return (
    <div className="px-6 py-12 bg-gradient-to-br from-yellow-50 to-pink-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-pink-700">
        🐶 Bundle Treat Deals
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bundleDeals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {deal.remark}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {deal.title}
              </h3>
              <p className="text-gray-600 mb-4">{deal.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  {deal.price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  {deal.originalPrice}
                </span>
              </div>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundleTreatDeal;
