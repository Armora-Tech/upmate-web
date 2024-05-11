import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import appLogo from "../../assets/images/app_logo.png";
import LangIcon from "../shared/lang_icon";
import DropDownButton from "../shared/drop_down_button";
import i18n from "../../translations/localization";

interface Languages {
  en: string;
  idn: string;
}

const languages: Languages = {
  en: "English",
  idn: "Bahasa Indonesia",
};

export function Navbar() {
  const { t } = useTranslation();
  const [navbarColor, setNavbarColor] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const transitionDurationClass = "transition duration-700";
  const textColorClass = navbarColor ? "text-textBlack" : `text-textWhite ${transitionDurationClass}`;
  const navbarBackgroundClass = navbarColor ? `bg-white shadow-lg ${transitionDurationClass}` : "";
  const iconColorClass = navbarColor ? "#242a2e" : "#e7e7e7";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 120) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownVisible(false);
  };
  return (
    <nav className={`md:px-10 px-5 py-5 flex flex-row justify-between items-center fixed top-0 w-full z-50 ${navbarBackgroundClass}`}>
      <div className="flex flex-row space-x-4 items-center">
        <img src={appLogo} alt="app-logo" width="53px" />
        <h1 className={`${textColorClass} text-textBlack text-3xl font-bold`}>UpMate</h1>
      </div>
      <ul className={`flex-row space-x-10 items-center text-xl`}>
        <li className="flex flex-row space-x-2 items-center hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mt-1">
            <LangIcon fillColor={iconColorClass} />
          </div>
          <h1 className=" flex flex-row items-center">
            <span className={`${textColorClass} md:block hidden`}>{t("selected_language")}</span>
            <span className={`${textColorClass} md:hidden block`}>{t("selected_lang")}</span>
            <DropDownButton fillColor={iconColorClass} />
          </h1>
          <div id="dropdownDelay" className={`z-10 ${dropdownVisible ? "block -translate-y-8" : "hidden"} absolute top-full right-0 bg-white  rounded-lg shadow w-44 `}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
              {Object.keys(languages).map((lang) => (
                <li key={lang}>
                  <a className="block px-4 py-2 hover:bg-gray-300" onClick={() => handleLanguageChange(lang)}>
                    {languages[lang as keyof Languages]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
