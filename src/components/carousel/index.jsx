// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

// Props
// numberOfSlides => định nghĩa số lượng slide của carousel

// carousel => numberOfSlides = 3 => carousel show 3 item 1 lúc
// carousel => numberOfSlides = 1 => carousel show 1 item 1 lúc

// default value props
// numberOfSlides = 1 => carousel show 1 item

export default function Carousel({
  // eslint-disable-next-line react/prop-types
  numberOfSlides = 1,
  // eslint-disable-next-line react/prop-types
  category = "Trending",
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        // Await: đợi response trả về
        "https://66c6a2a88b2c10445bc73c2d.mockapi.io/Movie"
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    /* toán tử 3 ngôi => [khu 1] ? [khu 2] : [khu 3]
      - [Khu 1]: điều kiện
      - [Khu 2]: nếu đúng => [khu 2]
      - [Khu 3]: nếu sai => [Khu 3]
      */
    <Swiper
      slidesPerView={numberOfSlides}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={
        autoplay ? [Autoplay, Pagination, Navigation] : [Pagination, Navigation]
      }
      className={`carousel ${numberOfSlides > 1 ? "multi-item" : ""}`}
    >
      {/* cứ mỗi một movie ở trong movies => SwipeSlide */}
      {/* movie => SwipeSlide */}
      {/* object => component */}
      {/* map */}
      {/* filter */}

      {/* Cứ mỗi movie ở trong movies => SwiperSlide */}
      {movies
        .filter((movie) => movie.category === category)
        .map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={movie.poster_path} alt={movie.name} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
