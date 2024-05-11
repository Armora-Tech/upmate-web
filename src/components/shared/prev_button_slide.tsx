import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return <button className="swiper-button-prev slider-arrow" onClick={() => swiper.slidePrev()}></button>;
}
