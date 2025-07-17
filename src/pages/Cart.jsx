import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react"; // Optional icon lib

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const increase = (id) => updateQuantity(id, 1);
  const decrease = (id) => updateQuantity(id, -1);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">
          Your cart is currently empty.
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-all rounded-xl p-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg border"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-pink-600 font-semibold mt-1">{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Minus size={16} />
                </button>

                <span className="text-md font-medium w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increase(item.id)}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Delete */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
