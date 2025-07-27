import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "https://static.vecteezy.com/system/resources/previews/045/125/824/non_2x/various-breeds-of-dogs-peek-out-from-behind-a-wooden-fence-concept-for-pets-veterinary-clinic-or-nutrition-food-for-dogs-banner-with-space-for-text-photo.jpg",
  "https://static.vecteezy.com/system/resources/previews/030/205/129/large_2x/dog-cute-pet-web-banner-with-copy-space-generative-ai-free-photo.jpg",
  "https://static.vecteezy.com/system/resources/previews/045/125/824/non_2x/various-breeds-of-dogs-peek-out-from-behind-a-wooden-fence-concept-for-pets-veterinary-clinic-or-nutrition-food-for-dogs-banner-with-space-for-text-photo.jpg",
  "https://static.vecteezy.com/system/resources/previews/030/205/129/large_2x/dog-cute-pet-web-banner-with-copy-space-generative-ai-free-photo.jpg"
];

const Carousel = () => {
  return (
    <div className="relative w-full">
      {/* Overlay Heading */}
      <div className="absolute top-4 left-1/4 -translate-x-1/2 z-10">
        <h1 className="text-white text-3xl font-bold bg-primary/50 px-4 py-2 rounded-lg shadow-lg">
          Grab Now!
        </h1>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={{ forceToAxis: true }}
        navigation
        pagination={{ clickable: true }}
        className="w-full rounded-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Dog Banner ${index + 1}`}
              className="w-full h-80 object-cover mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
