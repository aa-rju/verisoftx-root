import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

const MatrixRain = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full viewport size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const letters = 'ACCESS';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }).fill(canvas.height / fontSize);

    const draw = () => {
      // background fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        // Draw text upward
        const y = drops[i] * fontSize;
        ctx.fillText(text, i * fontSize, y);

        // Move drop upward
        drops[i] -= 1;

        // Reset to bottom when off top
        if (drops[i] * fontSize < 0 && Math.random() > 0.975) {
          drops[i] = canvas.height / fontSize;
        }
      }
    };

    const interval = setInterval(draw, 100);

  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      <canvas
      
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* <h1 className="text-green-400 text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          VerisoftX
        </h1> */}
                  {/* Logo */}
        <div className="flex flex-row justify-center items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-96 h-auto bg-transparent" />
            {/* <p className="text-[20px] text-pink-500 font-bold">VerisoftX</p> */}
            </Link>
        </div>
        <button
        onClick={() => navigate("/offers")}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-pink-200 transition"
        >
        Access System
        </button>
      </div>
    </div>
  );
};

export default MatrixRain;
