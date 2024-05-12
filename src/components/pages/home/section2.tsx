import { useTranslation } from "react-i18next";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import recommendation from "../../../assets/images/upmateFeatures/recommendation.jpg";
import SlideNextButton from "../../shared/next_button_slider";
import SlidePrevButton from "../../shared/prev_button_slide";
import { badword, chat, explore, peci, post, spam } from "../../../assets/images/upmateFeatures";
import { useState } from "react";

interface UpMateFeatures {
  image: string;
  title: string;
  desc: string;
}
export function Section2() {
  const { t } = useTranslation();
  const [nextButtonHidden, setNextButtonHidden] = useState(false);
  const [prevButtonHidden, setPrevButtonHidden] = useState(false);
  const isNextButtonHidden = nextButtonHidden ? "hidden" : "block";
  const isPrevButtonHidden = prevButtonHidden ? "hidden" : "block";

  const upMateFeatures: UpMateFeatures[] = [
    {
      image: recommendation,
      title: `${t("section2.feature1.title")}`,
      desc: `${t("section2.feature1.desc")}`,
    },
    {
      image: peci,
      title: `${t("section2.feature2.title")}`,
      desc: `${t("section2.feature2.desc")}`,
    },
    {
      image: chat,
      title: `${t("section2.feature3.title")}`,
      desc: `${t("section2.feature3.desc")}`,
    },
    {
      image: post,
      title: `${t("section2.feature4.title")}`,
      desc: `${t("section2.feature4.desc")}`,
    },
    {
      image: badword,
      title: `${t("section2.feature5.title")}`,
      desc: `${t("section2.feature5.desc")}`,
    },
    {
      image: spam,
      title: `${t("section2.feature6.title")}`,
      desc: `${t("section2.feature6.desc")}`,
    },
    {
      image: explore,
      title: `${t("section2.feature7.title")}`,
      desc: `${t("section2.feature7.desc")}`,
    },
  ];

  return (
    <div className="pb-12 min-w-full flex flex-col bg-textBlack align-center items-center">
      <h1 data-aos="fade-up" className="min-w-full md:text-6xl text-4xl font-bold text-center md:my-12 my-10 text-textWhite">
        {t("section2.title")}
      </h1>
      <div data-aos="fade-up" className="w-full h-full flex flex-row md:px-10 px-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            728: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          onInit={() => {
            setPrevButtonHidden(true);
          }}
          onSlideChange={(swiper: SwiperClass) => {
            swiper.isEnd ? setNextButtonHidden(true) : setNextButtonHidden(false);
            swiper.isBeginning ? setPrevButtonHidden(true) : setPrevButtonHidden(false);
          }}
        >
          <div className="slider-controler">
            <div className={isNextButtonHidden}>
              <SlideNextButton />
            </div>
            <div className={isPrevButtonHidden}>
              <SlidePrevButton />
            </div>
            <div className="swiper-pagination"></div>
          </div>
          {upMateFeatures.map((feature: UpMateFeatures, index: number) => (
            <SwiperSlide key={index}>
              <div className="card overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="mx-10 absolute bottom-10">
                  <h1 className=" text-textWhite font-bold text-3xl">{feature.title}</h1>
                  <p className="text-base text-textWhite font-thin">{feature.desc}</p>
                </div>
                <img src={feature.image} className="w-full h-full object-cover" alt={feature.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
