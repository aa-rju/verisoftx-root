
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-secondary5">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-secondary5"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              logo
              
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                DogFood
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-100">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-100">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-gray-100 hover:text-teal-accent-400"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-8 sm:mt-0">
            <a
            href="https://youtube.com/"
            className="group relative text-gray-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition"
            >
            <FaYoutube className="z-10 w-5 h-5 transition duration-300" />
            <span className="absolute inset-0 bg-red-500 hover:text-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
            <FaYoutube className="absolute w-5 h-5  opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
            </a>
            <a
            href="https://www.Instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition "
            >

            <FaInstagram className="z-10 w-5 h-5 transition duration-300" />
            <span className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-[#d62c74] group-hover:to-[#564de0] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
            <FaInstagram className="absolute w-5 h-5  opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
            </a>
            <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition "
            >

            <FaLinkedinIn className="z-10 w-5 h-5 transition duration-300" />
            <span className="absolute inset-0 bg-[#0a66c2] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
            <FaLinkedinIn className="absolute w-5 h-5  opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
            </a>
            <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-600 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden border bg-white transition "
            >
            <FaFacebookF className="z-10 w-5 h-5 transition duration-300" />
            <span className="absolute inset-0 bg-[#0a66c2] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
            <FaFacebookF className="absolute w-5 h-5  opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300" />
            </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer