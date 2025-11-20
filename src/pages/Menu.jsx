import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "Simple Project",
    price: "$199 – $299",
    description:
      "Ideal for personal portfolios, small businesses, or MVP concepts that need a clean, functional web presence.",
    features: [
      "1–3 Pages (Landing + About + Contact)",
      "Responsive Design",
      "Basic Animations & UI",
      "Hosting Setup & Domain Guidance",
      "Delivery in 5–7 Days",
    ],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 2,
    title: "Professional Project",
    price: "$499 – $699",
    description:
      "Perfect for startups or teams that need custom UI, dynamic content, and backend integration.",
    features: [
      "Up to 6–8 Pages or Components",
      "Custom Frontend (React/Vite/Tailwind)",
      "Dynamic Content (API Integration)",
      "Basic Authentication & Admin Panel",
      "Hosting + SEO Optimization",
      "Delivery in 10–14 Days",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Advanced / Enterprise Project",
    price: "$999+",
    description:
      "Best for advanced systems like dashboards, full-stack platforms, or IoT-integrated applications.",
    features: [
      "Full MERN Stack Development",
      "Real-time Data or IoT Integration",
      "Advanced UI/UX Animations",
      "Scalable Backend with Database",
      "Deployment & Maintenance Support",
      "Custom Features per Requirement",
    ],
    gradient: "from-amber-500 to-pink-500",
  },
];

export default function Menu() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-24 px-6 mb-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Work Packages
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Choose the plan that fits your vision and budget — from simple showcase
          websites to advanced, data-driven systems crafted with care.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative bg-gray-900/60 border border-gray-800 rounded-3xl p-8 
                          backdrop-blur-lg transition-all duration-500 cursor-pointer
                          hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.001, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.03,
              }}
              style={{
                willChange: "transform",       // ✅ improves animation stability
                transformOrigin: "center",     // ✅ prevents side expansion
              }}
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br ${plan.gradient} 
                            opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
              ></div>

              {/* Inner content */}
              <div className="relative z-10 bg-gray-900/90 rounded-3xl p-6">
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                <p className="text-pink-400 text-lg font-semibold mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <ul className="text-left space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-pink-500 mt-1 shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
