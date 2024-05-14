import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const loadHeaderVideo = async () => {
  const videoModule = await import("../../../assets/videos/header.mp4");
  return videoModule.default;
};

export function Header() {
  const { t } = useTranslation();

  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadVideo = async () => {
      const src = await loadHeaderVideo();
      setVideoSrc(src);
    };

    loadVideo();
  }, []);

  return (
    <>
      <video className="min-h-screen min-w-full object-cover" autoPlay loop muted style={{ filter: "brightness(40%)" }}>
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
        <track src="captions_es.vtt" kind="captions" srcLang="id" label="indonesia_captions" />
      </video>
      <div className="z-10 absolute top-1/2 lg:left-0 left-1/2 transform lg:translate-x-0 -translate-x-1/2 -translate-y-1/2 lg:ml-8 lg:text-7xl md:text-6xl text-4xl lg:items-start items-center font-bold lg:space-y-4 space-y-2 lg:text-start text-center">
        <h1 className="text-textWhite" data-aos="fade-up">
          {t("header.line1")}
        </h1>
        <h1 className="text-textWhite" data-aos="fade-up" data-aos-duration="2300">
          {t("header.line2")}
        </h1>
        <h1 className="text-textWhite" data-aos="fade-up" data-aos-duration="2500">
          {t("header.line3")}
        </h1>
      </div>
    </>
  );
}
