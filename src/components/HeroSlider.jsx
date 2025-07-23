// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img:'https://i.postimg.cc/qq073qM6/banner1.avif',
    heading: "Find Better Alternatives",
    subheading: "Discover community-recommended products tailored to your needs.",
  },
  {
    img: 'https://i.postimg.cc/9MtvMt8T/banner2.jpg',
    heading: "Ask Before You Buy",
    subheading: "Post your product concerns & get real responses from real users.",
  },
  {
    img: "https://i.postimg.cc/c1kFcbnC/banner3.jpg",
    heading: "Community Recommendations",
    subheading: "Browse others’ queries and contribute with better suggestions.",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[350px] md:h-[450px] lg:h-[550px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
              <div className="relative z-10 text-center px-4 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h2>
                <p className="text-md md:text-xl font-medium">{slide.subheading}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
