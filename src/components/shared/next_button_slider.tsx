import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return <button name="next-button" aria-label="next-button" className="swiper-button-next slider-arrow" onClick={() => swiper.slideNext()}></button>;
}
