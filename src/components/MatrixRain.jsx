import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const MatrixRain = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const codeText = `
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world 👋');
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});

function greet(name) {
  return \`Welcome, \${name}\`;
}

console.log(greet('Aarju'));
`;

    let index = 0;
    const typingSpeed = 30;
    const lines = [];
    const maxLines = 15;

    function drawBackground() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "16px 'Fira Code', monospace";
      ctx.textBaseline = "top";

      let y = 100;
      for (let line of lines) {
        let x = 50;
        const words = line.split(/(\s+)/);
        for (let word of words) {
          ctx.fillStyle = getColorForWord(word);
          ctx.fillText(word, x, y);
          x += ctx.measureText(word).width;
        }
        y += 22;
      }
    }

    function getColorForWord(word) {
      if (["const", "let", "function", "return", "require"].includes(word))
        return "#00FF41";
      if (word.includes("'") || word.includes('"')) return "#FF79C6";
      if (word.includes("(") || word.includes(")")) return "#8BE9FD";
      if (word.includes("=>")) return "#FFB86C";
      if (word.includes("{") || word.includes("}")) return "#50FA7B";
      return "#F8F8F2";
    }

    function typeCode() {
      if (index < codeText.length) {
        const currentChar = codeText[index];
        if (currentChar === "\n") {
          lines.push("");
          if (lines.length > maxLines) lines.shift();
        } else {
          if (lines.length === 0) lines.push("");
          lines[lines.length - 1] += currentChar;
        }
        index++;
      } else {
        // Restart after typing completes
        index = 0;
        lines.length = 0;
      }

      drawBackground();
    }

    const interval = setInterval(typeCode, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-90"
      />
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-10">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-96 h-auto bg-transparent" />
          </Link>
          <button
            onClick={() => navigate("/services")}
            className="bottom-20 group relative overflow-hidden bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition"
          >
            <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-black">
              Access System
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatrixRain;
