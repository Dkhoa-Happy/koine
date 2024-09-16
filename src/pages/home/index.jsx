import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      {/* carousel 1 items */}

      {/* autoplay = true */}
      <Carousel autoplay />

      {/* carousel 3 items */}
      <Carousel numberOfSlides={6} category="Action" />
    </div>
  );
}

export default HomePage;
