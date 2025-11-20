import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ServicesShowcase() {
    // Scroll to top on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const services = [
    {
      title: "UI / UX Design",
      description:
        "Design that speaks. We craft clean, intuitive, and emotionally engaging user experiences that resonate with your brand and users.",
      icon: "🎨",
      direction: { x: -200, y: 100 },
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Frontend Development",
      description:
        "We build high-performance, responsive frontends using React, Next.js, and Tailwind — fast, modern, and accessible.",
      icon: "💻",
      direction: { x: 200, y: 100 },
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Backend Engineering",
      description:
        "Robust APIs, authentication systems, and database layers built for speed and scalability with Node.js and MongoDB.",
      icon: "⚙️",
      direction: { x: -150, y: -100 },
      color: "from-green-500 to-teal-500",
    },
    {
      title: "E-Commerce Development",
      description:
        "We deliver secure, customizable e-commerce platforms with seamless UX, optimized checkouts, and integrated analytics.",
      icon: "🛍️",
      direction: { x: 180, y: -120 },
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Product Strategy & Branding",
      description:
        "Beyond visuals — we help you define the story, tone, and digital experience that turns your product into a movement.",
      icon: "🚀",
      direction: { x: -250, y: 120 },
      color: "from-yellow-500 to-pink-500",
    },
    {
      title: "Support & Optimization",
      description:
        "Continuous improvement through monitoring, performance tuning, and updates to keep your platform at its best.",
      icon: "🔧",
      direction: { x: 220, y: 150 },
      color: "from-cyan-500 to-blue-500",
    },
  ];


  return (
    // Important: overflow-x-hidden prevents page horizontal scrollbar while allowing
    // children with overflow-visible to render outside their boxes during animation.
    // <div className="min-h-fit bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6  flex flex-col items-center overflow-x-hidden overflow-y-hidden">
    <div className="relative max-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-4 px-6 flex flex-col items-center overflow-x-hidden overflow-y-visible mb-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl mt-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
          What We Offer
        </h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          A blend of creativity and technology — crafted for brands that dare to
          innovate.
        </motion.p>
      </motion.div>
    <div className="">
      {/* Grid wrapper should ALLOW overflow */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto overflow-visible">

        {services.map((service, i) => (
          <AnimatedServiceCard key={i} {...service} delay={i * 0.0012} />
        ))}
      </div>
    </div>

    </div>
  );
}

/* AnimatedServiceCard: note the use of overflow-visible on the motion wrapper,
   clampX to keep entry offsets safe, transformOrigin center so hover scale doesn't push layout */
function AnimatedServiceCard({ title, description, icon, direction = { x: 0, y: 20 }, color, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Clamp X so initial offset can't be huge and push page width.
  const clampX = (x) => {
    if (!x && x !== 0) return 0;
    return Math.max(-140, Math.min(140, x)); // safe ±140px
  };

  const safeX = clampX(direction.x);

  return (
    // outer wrapper should NOT clip transforms (so set overflow-visible)
    // but the page root already has overflow-x-hidden to avoid horizontal scroll
    <div className="w-40% px-2 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: safeX, y: direction.y ?? 40, rotate: 8 }}
        animate={
          inView
            ? { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.9, delay } }
            : { opacity: 0, x: safeX, y: direction.y ?? 40, rotate: 8 }
        }
        whileHover={{
          scale: 1.07, // kept small to avoid pushing layout
          rotate: -1,
          zIndex: 40,
          transition: { duration: 0.35 },
        }}
        // allow this element to render outside its bounding box during animation
        style={{ transformOrigin: "center" }}
        className={`relative overflow-visible p-[2px] rounded-2xl shadow-xl cursor-pointer bg-gradient-to-br ${color}`}
      >
        {/* Inner content: no h-full; use min-h for consistent visual height */}
        <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-2 justify-start ">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
