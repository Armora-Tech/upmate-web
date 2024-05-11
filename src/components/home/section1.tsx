import { useTranslation } from "react-i18next";

import splashScreenImg from "../../assets/images/splash_screen.png";

export function Section1() {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" className="h-2/3 w-full flex md:flex-row flex-col-reverse md:space-x-10 my-5 relative px-5 -z-20">
      <div className="md:w-1/2 bg-textBlack flex justify-center items-end overflow-hidden pt-5 custom-border">
        <img src={splashScreenImg} className="section1-img" alt="splash_screen" />
      </div>
      <h1 className="md:w-1/2 font-bold md:text-6xl text-4xl md:mt-5 md:mb-0 mb-5 text-center md:text-start">{t("section1_desc")}</h1>
    </div>
  );
}

// import googlePlayImg from "../../assets/images/google_play.png";

/* <div className="h-1/3 space-y-10 flex flex-col items-center mt-5 mb-32">
        <h1 className="text-5xl text-center font-extrabold">Download UpMate</h1>
        <a href="">
          <img src={googlePlayImg} alt="google_play" width={150}/>
        </a>
      </div> */
