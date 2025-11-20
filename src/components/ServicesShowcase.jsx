import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function ServicesShowcase() {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 flex flex-col items-center overflow-x-hidden overflow-y-visible">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-500">
          Our Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Bridging creativity and technology through software innovation and hardware excellence.
        </p>
      </motion.div>

      {/* Two Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-col-2 gap-12 max-w-6xl mx-auto ">
        
        {/* SOFTWARE SERVICES */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="bg-gray-950 rounded-2xl p-8 h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,255,150,0.5)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Software Services 💻
            </h3>
            <p className="text-gray-300 mb-6">
              We specialize in crafting scalable, user-friendly, and modern digital solutions tailored to your business goals.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>🌐 Website Development (React, Next.js, MERN)</li>
              <li>📱 Mobile App Development (Android / iOS)</li>
              <li>⚙️ Backend Development & APIs</li>
              <li>🧠 UI/UX Design & Branding</li>
              <li>☁️ Cloud Integration & Maintenance</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/services")}
              className="mt-12 px-8 py-3 bg-gradient-to-r from-green-500 to-purple-600 rounded-full text-white font-semibold shadow-lg"
            >
              Explore
            </motion.button>

          </div>
        </motion.div>

        {/* HARDWARE SERVICES */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-[2px] bg-gradient-to-br from-green-500 to-teal-500 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <div className="bg-gray-950 rounded-2xl p-8 h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,255,150,0.5)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
              Hardware Services 🔧
            </h3>
            <p className="text-gray-300 mb-6">
              We ensure your devices stay powerful and reliable with expert-level diagnostics, repair, and upgrades.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>🖥️ Laptop & Desktop Repair</li>
              <li>🔌 Hardware Diagnostics & Replacement</li>
              <li>💾 Data Recovery & Maintenance</li>
              <li>⚡ Power Supply & Battery Replacement</li>
              <li>🧰 Custom PC Build & Upgrade Support</li>
            </ul>
                        <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/hardwareservices")}
              className="mt-12 px-8 py-3 bg-gradient-to-r from-green-500 to-purple-600 rounded-full text-white font-semibold shadow-lg"
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
