import React,{   } from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";

// import axios from "axios";
// import Carousel from "../components/Carousel";
// import ThreeDSection from '../components/ThreeDSection'
import Projects from "../components/projects";
import MatrixRainSection from '../components/MatrixRain'
import PartnersCarousel from "../components/Partners";
import Services from "../components/Services"
import ServicesShowcase from "../components/ServicesShowcase";

function Home({ searchTerm }) {
  // const [, setProducts] = useState([]);
    // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-black min-h-screen mb-20 ">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        {/* <MatrixRainSection className="mx-auto h-screen pb-16 py-8"/> */}
        <PartnersCarousel/>
        <Projects />
        {/* <Services/> */}
        <ServicesShowcase/>
        {/* </div> */}
    </div>
  );
}

export default Home;
