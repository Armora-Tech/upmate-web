import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return <button className="swiper-button-next slider-arrow" onClick={() => swiper.slideNext()}></button>;
}
