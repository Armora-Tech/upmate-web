import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return <button name="prev-button" aria-label="prev-button" className="swiper-button-prev slider-arrow" onClick={() => swiper.slidePrev()}></button>;
}
