
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../assets/bluedoglogo.png"
const Footer = () => {
  return (
    <div className="relative mt-16 bg-secondary2 ">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-secondary2"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className=" pt-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl  py-2">
        <div className="grid mb-2 lg:grid-cols-6">
          <div className="-mx-16 flex flex-col items-center justify-between md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className=" items-center gap-0"
            >
              <img src={logo} alt="Logo" className="w-32 h-auto bg-transparent" />
              <span className=" text-xl font-bold tracking-wide text-blue-500 uppercase">
                DogFood
              </span>
            </a>
            {/* <div className="mt-4 lg:max-w-sm">
              <p className="mt-4 text-sm text-black">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div> */}
            <div className="py-4 flex items-center mt-6 space-x-8 sm:mt-0">
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
          <div className="pr-6 grid grid-cols-2 py-8 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold tracking-wide text-black">
                Our Address
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                <p>(+977) 982607.....</p>                  
                </li>
                <li>
                    Bagmati, Nepal
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    bluedogtreats@gmail.com
                  </a>
                </li>
                <li>
                  
                  <Link
                    to="/contactus"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                     Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold tracking-wide text-black ">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/aboutus"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Breeds
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Give Away
                  </a>
                </li>
                <li>
                  <Link
                    to="/chewselector"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Chew Selector
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold tracking-wide text-black ">
                Get the Best of Savings
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/treatdeals"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Bundle Treat Deals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subscribeandsave"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Subscribe and Save 20%
                  </Link>
                </li>
                <li>
                  <Link
                    to="/referralpoints"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Smile Referral Points

                  </Link>
                </li>

              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="font-semibold tracking-wide text-black ">
                Our Policies
              </p>
              <ul className="mt-2 space-y-2">
                  <li>
                  <Link
                    to="/termsofservice"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    TermsofService
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacypolicy"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refundpolicy"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consumerprivacyact"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    California Consumer Privacy Act (CCPA)
                  </Link>
                </li>
                  <li>
                  <Link
                    to="/resources"
                    className="transition-colors duration-300 text-black hover:text-teal-accent-400 hover:underline"
                  >
                    RESOURCES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-5 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-black">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Footer