import { useTranslation } from "react-i18next";

import LogoWText from "../shared/logo_w_text";
import googlePlayImg from "../../assets/images/google_play.png";
import instagramLogo from "../../assets/icon/ig.svg";

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className="lg:ps-20 px-8 lg:py-14 py-10 bg-[#0d1012] min-w-full text-2xl font-bold flex lg:flex-row flex-col items-start relative">
      <p className="text-textWhite absolute min-w-full text-center left-1/2 transform -translate-x-1/2 bottom-0 text-base font-medium mb-3">&copy; All rights reserved - {new Date().getFullYear()} | Armora Tech</p>
      <div className="lg:w-1/4 lg:mb-0 mb-8">
        <LogoWText textColor="text-textWhite" />
      </div>
      <div className="lg:w-1/4 lg:mb-0 mb-8">
        <h1 className="text-white mb-3">{t("footer.service.title")}</h1>
        <ul className="font-thin text-base space-y-3">
          <li>
            <a href="/privacy-policy" className="text-textWhite hover:text-white hover:font-semibold">
              {t("footer.service.list1")}
            </a>
          </li>
          <li>
            <a href="/terms-conditions" className="text-textWhite hover:text-white hover:font-semibold">
              {t("footer.service.list2")}
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/4 lg:mb-0 mb-8">
        <h1 className="text-white mb-3">{t("footer.others")}</h1>
        <ul className="font-thin text-base space-y-3">
          <li>
            <a target="blank" href="https://github.com/Armora-Tech" className="text-textWhite hover:text-white hover:font-semibold">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/4 lg:mb-0 mb-8">
        <h1 className="text-xl text-white mb-4">{t("footer.connect_with_us")}</h1>
        <ul className="flex">
          <li className="hover:bg-textBlack rounded-md mr-4">
            <a target="blank" href="https://www.instagram.com/upmate_apps/">
              <img className="text-white p-1" width={30} height={30} alt="ig" src={instagramLogo} />
            </a>
          </li>
        </ul>
        <div className="mb-8">
          <h1 className="text-xl text-white my-5">{t("footer.download")} UpMate</h1>
          <a target="blank" href="https://play.google.com/store/apps/details?id=com.armoratech.upmate&hl=id&gl=US">
            <img src={googlePlayImg} alt="google_play" width={120} />
          </a>
        </div>
      </div>
    </div>
  );
}
