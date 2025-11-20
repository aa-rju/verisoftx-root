import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 mb-20">
        {/* Left Info */}
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.08 }}
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            Get in Touch
          </h2>
          <p className="text-white">
            We’d love to hear from you! Whether it’s a project, a collaboration,
            or just a friendly hello, feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-pink-500" />
              <span>verisoftx@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-pink-500" />
              <span>+977 980123...7</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500" />
              <span>Ktm, Nepal</span>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-pink-500 transition">GitHub</a>
            <a href="#" className="hover:text-pink-500 transition">Twitter</a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4 bg-white-800/50 rounded-2xl p-8 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white-900/80 border border-white-700 focus:border-pink-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white-900/80 border border-white-700 focus:border-pink-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-lg bg-white-900/80 border border-gray-700 focus:border-pink-500 outline-none resize-none"
          />
          <button
            type="submit"
            className="bottom-20 group relative overflow-hidden bg-green-600 text-white px-6 py-2 mx-4 text-lg font-semibold transition group"
                >
                  <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
                  <span className="relative z-10 group-hover:text-black">Send Message</span>
          </button>
                      {/* <button
                onClick={() => navigate("/services")}
                className="bottom-20 group relative overflow-hidden bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition group"
                >
                  <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
                  <span className="relative z-10 group-hover:text-black">Access System</span>
            </button> */}
        </motion.form>
      </div>
    </section>
  );
}
