import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
      // Scroll to top on mount
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className=" min-h-screen">
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 md:px-20 pb-36">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mb-6"
      >
        <h2 className=" mb-10 text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
          About Us
        </h2>
        </motion.div>

        {/* Who We Are */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-color2 mb-3">
            Who We Are
          </h3>
          <p className="text-white leading-relaxed mr-4">
            VerisoftX is a creative technology company built by passionate 
            engineers, designers, and problem-solvers. We turn ideas into 
            intuitive digital experiences that feel good to use and deliver 
            real results.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-color2 mb-3">
            What We Do
          </h3>
          <p className="text-white leading-relaxed">
            We specialize in crafting modern web applications, scalable backend 
            systems, sleek UI/UX, and complete tech solutions for startups and 
            businesses. Whether you’re building an MVP or upgrading an existing 
            platform, we make the process simple, smooth, and collaborative.
          </p>
        </div>

        {/* Our Belief */}
        <div>
          <h3 className="text-2xl font-semibold text-color2 mb-3">
            Our Belief
          </h3>
          <p className="text-white leading-relaxed">
            Great products are built when creativity meets engineering. That’s 
            the heart of VerisoftX — technology that works beautifully and grows 
            with you.
          </p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default AboutUs;
