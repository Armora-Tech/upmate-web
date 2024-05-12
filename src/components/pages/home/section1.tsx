import { useTranslation } from "react-i18next";

import splashScreenImg from "../../../assets/images/splash_screen.png";

export function Section1() {
  const { t } = useTranslation();
  return (
    <div className="h-2/3 min-w-full flex lg:flex-row flex-col md:space-x-10 my-5 relative px-5 -z-20">
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div data-aos="fade-up" className="lg:w-full md:w-1/2 w-full bg-textBlack flex justify-center overflow-hidden pt-5 custom-border">
          <img src={splashScreenImg} className="section1-img" alt="splash_screen" />
        </div>
      </div>
      <div className="lg:w-1/2 font-bold lg:text-6xl text-4xl lg:mt-5 mt-8  text-start">
        <h1 data-aos="fade-up">{t("section1.title")}</h1>
        <p data-aos="fade-up" className="text-base font-light text-justify mt-4">
          {t("section1.desc")}
        </p>
      </div>
    </div>
  );
}
