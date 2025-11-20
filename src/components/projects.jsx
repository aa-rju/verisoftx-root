import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Infant Health Monitoring System",
    subtitle: "Real-time NICU Biophysiological Data Tracking",
    description:
      "A web-based platform built for NICU environments that continuously monitors and visualizes infants’ physiological signals. Developed with React, Node.js, and MongoDB.",
    image:
      "https://img.freepik.com/foto-gratis/composicion-moderna-mecanico-automoviles_23-2147881304.jpg",
    tags: ["React", "Node.js", "IoT", "Healthcare"],
    link: "https://subcashh.com/",
  },
  {
    id: 2,
    title: "GIF Generator App",
    subtitle: "Fun with APIs and Custom Hooks",
    description:
      "An interactive GIF generator that fetches random or tag-based GIFs using Giphy API. Developed using React + Vite and Tailwind CSS.",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/194/282/large_2x/domain-name-system-concept-dns-website-domain-name-internet-or-cyberspace-domain-registration-web-page-choose-find-buy-register-website-domain-name-flat-illustration-vector.jpg",
    tags: ["React", "API", "Custom Hooks"],
    link: "http://ww25.trivenimargtlo.com/?subid1=20251025-0214-38fc-9aaf-892594ec53e8",
  },
  {
    id: 3,
    title: "Volunteer Connect Platform",
    subtitle: "Empathy-driven Mental Health Support",
    description:
      "A platform connecting volunteers and seekers for mental health support, built using MongoDB, Express, React, and Node.js.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.kuT61wHcfl3YYpey82W1HQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["MERN Stack", "Mental Health", "Community"],
    link: "https://learnologyempire.com/",
  },
  {
    id: 4,
    title: "Kanahaya Dairy",
    subtitle: "Empathy-driven Mental Health Support",
    description:
      "A platform connecting volunteers and seekers for mental health support, built using MongoDB, Express, React, and Node.js.",
    image:
      "https://cdn.firstcry.com/education/2022/11/07145239/Dairy-Product-List-For-Kids-with-their-Benefits-And-Facts.jpg",
    tags: ["MERN Stack", "Mental Health", "Community"],
    link: "https://verisoftx.com/",
  },
  {
    id: 5,
    title: "DogFood E-commerce",
    subtitle: "Empathy-driven Mental Health Support",
    description:
      "A platform connecting volunteers and seekers for mental health support, built using MongoDB, Express, React, and Node.js.",
    image:
      "https://cdn.dribbble.com/users/6579959/screenshots/20573771/media/ebe42fab6b2727763394715bdbeaec98.jpg?resize=400x0",
    tags: ["MERN Stack", "Mental Health", "Community"],
    link: "https://bluedogtreats.com/",
  },
];

export default function WorkSection() {
  const [selected, setSelected] = useState(null);

  return (
    // <section
    //   id="work"
    //   className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-x-hidden"
    // >
    //   <div className="max-w-6xl mx-auto px-6 text-center">
    //     <motion.h2
    //       className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
    //       initial={{ opacity: 0, y: 40 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //     >
    //       Checkout our Latest Projects
    //     </motion.h2>

    //     <motion.p
    //       className="text-gray-400 max-w-xl mx-auto mb-16"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.2 }}
    //     >
    //       Explore the innovations driving our clients and projects forward — crafted
    //       with creativity, collaboration, and care.
    //     </motion.p>

    //     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    //       {projects.map((proj, index) => (
    //         <motion.div
    //           key={proj.id}
    //           className="relative group rounded-2xl overflow-hidden bg-gray-800/50 hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-pink-500/30 cursor-pointer border border-gray-700 hover:border-pink-500/40"
    //           initial={{ opacity: 0, x: 60 }}
    //           whileInView={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 0.01, delay: index * 0.1 }}
    //           whileHover={{
    //             scale: 1.05,
    //             boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.3)",
    //           }}
    //           onClick={() => setSelected(proj)}
    //         >
    //           <img
    //             src={proj.image}
    //             alt={proj.title}
    //             className="w-full h-60% object-cover group-hover:opacity-80 transition"
    //           />
    //           <div className="p-5 text-left">
    //             <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
    //             <p className="text-pink-400 text-sm mb-2">{proj.subtitle}</p>
    //             <div className="flex flex-wrap gap-2">
    //               {proj.tags.map((tag) => (
    //                 <span
    //                   key={tag}
    //                   className="text-xs bg-pink-600/20 px-2 py-1 rounded-full text-pink-300"
    //                 >
    //                   {tag}
    //                 </span>
    //               ))}
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>

    //     {/* Case Study Modal */}
    //     <AnimatePresence>
    //       {selected && (
    //         <motion.div
    //           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //         >
    //           <motion.div
    //             className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 relative text-left"
    //             initial={{ y: 40, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             exit={{ y: 40, opacity: 0 }}
    //           >
    //             <button
    //               className="absolute top-4 right-4 text-gray-400 hover:text-white"
    //               onClick={() => setSelected(null)}
    //             >
    //               <X size={22} />
    //             </button>
    //             <img
    //               src={selected.image}
    //               alt={selected.title}
    //               className="w-full h-60 object-cover rounded-lg mb-4"
    //             />
    //             <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
    //             <p className="text-pink-400 mb-4">{selected.subtitle}</p>
    //             <p className="text-gray-300 mb-4">{selected.description}</p>
    //             <div className="flex flex-wrap gap-2 mb-6">
    //               {selected.tags.map((tag) => (
    //                 <span
    //                   key={tag}
    //                   className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-200"
    //                 >
    //                   {tag}
    //                 </span>
    //               ))}
    //             </div>
    //             {selected.link && (
    //               <a
    //                 href={selected.link}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
    //               >
    //                 <ExternalLink size={16} />
    //                 View Project
    //               </a>
    //             )}
    //           </motion.div>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </div>
    // </section>
        <section
      id="work"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center overflow-hidden">
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Checkout our Latest Projects
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore the innovations driving our clients and projects forward — crafted
          with creativity, collaboration, and care.
        </motion.p>

        {/* ✅ Overflow hidden wrapper to avoid x-scroll caused by animations */}
        <div className="overflow-hidden">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.id}
                className="relative group rounded-2xl overflow-hidden bg-gray-800/50 hover:bg-gray-800 transition-all duration-500 shadow-lg hover:shadow-pink-500/30 cursor-pointer border border-gray-700 hover:border-pink-500/40"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03, // reduced from 1.05 to avoid overflow
                  boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.3)",
                }}
                style={{ transformOrigin: "center" }}
                onClick={() => setSelected(proj)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-[60%] object-cover group-hover:opacity-80 transition"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
                  <p className="text-pink-400 text-sm mb-2">{proj.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-pink-600/20 px-2 py-1 rounded-full text-pink-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Case Study Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 relative text-left"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelected(null)}
                >
                  <X size={22} />
                </button>

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
                <p className="text-pink-400 mb-4">{selected.subtitle}</p>
                <p className="text-gray-300 mb-4">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
