import React from "react";
import appLogo from "../../assets/images/app_logo.png";

interface TextColor {
  textColor: string;
}

const LogoWText: React.FC<TextColor> = ({ textColor }) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <img src={appLogo} alt="app-logo" width="50px" />
      <h1 className={`${textColor} text-textBlack md:text-3xl text-2xl  font-bold`}>UpMate</h1>
    </div>
  );
};

export default LogoWText;
