import { useTranslation } from "react-i18next";

import splashScreenImg from "../../../assets/images/splash_screen.png";

export function Section1() {
  const { t } = useTranslation();
  return (
    <div className="h-2/3 w-full flex md:flex-row flex-col md:space-x-10 my-5 relative px-5 -z-20">
      <div data-aos="fade-up" className="md:w-1/2 bg-textBlack flex justify-center items-end overflow-hidden pt-5 custom-border">
        <img src={splashScreenImg} className="section1-img" alt="splash_screen" />
      </div>
      <div className="md:w-1/2 font-bold md:text-6xl text-4xl md:mt-5 mt-8  text-start">
        <h1 data-aos="fade-up">{t("section1.title")}</h1>
        <p data-aos="fade-up" className="text-base font-light text-justify mt-4">
          {t("section1.desc")}
        </p>
      </div>
    </div>
  );
}


