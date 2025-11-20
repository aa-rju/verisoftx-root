import React from "react";

export default function PartnersCarousel({ partners = [], logoHeight = 40 }) {
  const safePartners = partners.length
    ? partners
    : [
        { name: "Partner A", logo: "https://cdn.pixabay.com/photo/2025/04/13/08/20/logo-9531343_1280.png", url: "#" },
        { name: "Partner B", logo: "https://cdn.pixabay.com/photo/2021/08/26/07/42/business-6575399_640.png", url: "#" },
        { name: "Partner C", logo: "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png", url: "#" },
        { name: "Partner D", logo: "https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png", url: "#" },
        { name: "Partner E", logo: "https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png", url: "#" },
      ];

  // Duplicate partners for seamless loop
  const loopItems = [...safePartners, ...safePartners];

  return (
    <section className="w-full max-w-full py-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-center text-2xl sm:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
          Our Valuable Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6 whitespace-nowrap">
            {loopItems.map((p, idx) => (
              <a
                key={`${p.name}-${idx}`}
                href={p.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center min-w-[120px] hover:scale-105 transition-transform"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ height: `${logoHeight}px`, width: "auto" }}
                  className="object-contain"
                />
                <span className="text-sm text-gray-200 mt-1">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          gap: 2rem;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
