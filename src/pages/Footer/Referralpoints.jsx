import React from "react";
import { Gift, Smile, Share2 } from "lucide-react";

const Referralpoints = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-pink-600 text-3xl font-bold">
            <Smile className="w-8 h-8" />
            <h1>Smile Referral Points</h1>
          </div>
          <p className="text-gray-600 mt-2">
            Invite your friends and earn exciting rewards every time they make a purchase!
          </p>
        </div>

        {/* Points Summary */}
        <div className="mt-8 flex flex-col sm:flex-row justify-around text-center">
          <div>
            <h2 className="text-xl font-semibold text-green-600">100 Points</h2>
            <p className="text-sm text-gray-500">for each friend that signs up</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-600">200 Points</h2>
            <p className="text-sm text-gray-500">when your friend makes a purchase</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-600">Redeem</h2>
            <p className="text-sm text-gray-500">Use points for discounts on future orders</p>
          </div>
        </div>

        {/* Referral Code Section */}
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-gray-700 mb-2">Your Referral Code</p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              value="SMILEFRIEND2025"
              readOnly
              className="bg-gray-100 px-4 py-2 rounded-lg text-gray-600 font-semibold text-center"
            />
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
              onClick={() => {
                navigator.clipboard.writeText("SMILEFRIEND2025");
                alert("Referral code copied!");
              }}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Share with friends</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Facebook</span>
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Twitter</span>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Rewards Example */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-2xl text-center">
          <Gift className="w-6 h-6 mx-auto text-yellow-500 mb-2" />
          <p className="text-gray-700 font-medium">
            Earned 1000+ Smile Points? Use them for discounts, free treats, or surprise gifts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referralpoints;
