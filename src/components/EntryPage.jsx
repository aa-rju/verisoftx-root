import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const EntryPage = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");

  // The fake "code" content to type out in the background
  const fullText = `
const system = initialize("VerisoftX");
system.connect("Innovation", "Design", "Development");

if (system.ready()) {
    console.log("Welcome to VerisoftX 🚀");
    system.start();
}
  `;

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50); // realistic typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-mono text-green-400">
      {/* --- BACKGROUND TYPEWRITER --- */}
      <div className="absolute inset-0 overflow-hidden px-6 sm:px-12 md:px-20 py-16 opacity-30 select-none">
        <pre className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed whitespace-pre-wrap">
          {displayedText}
          <span className="animate-blink">|</span>
        </pre>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center z-10 text-center">
        <Link to="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-72 sm:w-80 md:w-96 h-auto bg-transparent"
          />
        </Link>

        <button
          onClick={() => navigate("/home")}
          className="group relative overflow-hidden bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
          <span className="relative z-10 group-hover:text-black">Access System</span>
        </button>
      </div>

      {/* --- CURSOR BLINK ANIMATION --- */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            display: inline-block;
            width: 8px;
            animation: blink 1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default EntryPage;
