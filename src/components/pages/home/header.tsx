import { useTranslation } from "react-i18next";

import headerVideo from "../../../assets/videos/header.mp4";

export function Header() {
  const { t } = useTranslation();
  return (
    <>
      <video src={headerVideo} className="min-h-screen min-w-screen object-cover" autoPlay loop muted preload="auto" style={{filter: "brightness(40%)"}}></video>
      <div className="z-10 absolute top-1/2 lg:left-0 left-1/2 transform lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:ml-8 lg:text-7xl md:text-6xl text-4xl lg:items-start items-center font-bold lg:space-y-4 space-y-2 lg:text-start text-center">
        <p className="text-textWhite" data-aos="fade-up">
          {t("header.line1")}
        </p>
        <p className="text-textWhite" data-aos="fade-up" data-aos-duration="2300">
          {t("header.line2")}
        </p>
        <p className="text-textWhite" data-aos="fade-up" data-aos-duration="2500">
          {t("header.line3")}
        </p>
      </div>
    </>
  );
}
