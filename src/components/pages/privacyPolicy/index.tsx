import { useTranslation } from "react-i18next";

import MyApp from "../../layout/main";
import { Paragraph } from "../../shared/paragraph";
import { DataSet } from "./dataSet";
import { HowWeCollect } from "./howWeCollectData";
import { HowWeShare } from "./howWeShare";
import { RightObligations } from "./rightObligations";
import { OtherImportant } from "./otherImportant";

export function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <MyApp>
      <div className="min-h-screen md:px-10 px-5 text-justify">
        <h1 className="mt-32 min-w-full md:text-4xl text-3xl mb-5 font-bold text-start">{t("footer.service.list1")}</h1>
        <a className="font-semibold underline" href="/">{t("back_to_home")}</a>
        <hr />
        <Paragraph>{t("privacy_policy.opening_paragraph")}</Paragraph>
        <br />
        <DataSet />
        <br />
        <HowWeCollect />
        <br />
        <HowWeShare />
        <br />
        <RightObligations />
        <br />
        <OtherImportant />
        <br />
        <br />
      </div>
    </MyApp>
  );
}
