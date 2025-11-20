import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div
      className="
        fixed 
        max-w-fit
        top-1/2 
        right-1

        transform 
        -translate-y-1/2 
        flex 
        flex-col 
        space-y-3 
        z-50
        sm:space-y-4
        sm:right-4
        md:right-8
        lg:right-12
        transition-all
        overflow-hidden
      "
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-blue-600 hover:text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
      >
        <FaFacebookF className="z-10 w-5 h-5 transition duration-300" />
        <span className="absolute inset-0 bg-[#0a66c2] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
        <FaFacebookF className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-pink-500 hover:text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
      >
        <FaInstagram className="z-10 w-5 h-5 transition duration-300" />
        <span className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-[#d62c74] group-hover:to-[#564de0] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
        <FaInstagram className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-black hover:text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
      >
        <FaTwitter className="z-10 w-5 h-5 transition duration-300" />
        <span className="absolute inset-0 bg-[#000000] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
        <FaTwitter className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-blue-600 hover:text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
      >
        <FaLinkedinIn className="z-10 w-5 h-5 transition duration-300" />
        <span className="absolute inset-0 bg-[#0a66c2] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
        <FaLinkedinIn className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noreferrer"
        className="group relative text-red-600 hover:text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
      >
        <FaYoutube className="z-10 w-5 h-5 transition duration-300" />
        <span className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
        <FaYoutube className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
