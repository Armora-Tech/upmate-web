import { useTranslation } from "react-i18next";

import { UsageAgreements } from "./usageAgreements";
import { Conditions } from "./conditions";
import { Deletion } from "./deletion";
import { Introduction } from "./introduction";
import { AppAgreements } from "./appAgreement";
import { Privacy } from "./privacy";
import MyApp from "../../layout/main";

export function TermsConditions() {
  const { t } = useTranslation();
  return (
    <MyApp>
      <div className="min-h-screen md:px-10 px-5 text-justify">
        <h1 className="mt-32 min-w-full md:text-4xl text-3xl mb-5 font-bold text-start">{t("footer.service.list2")}</h1>
        <a className="font-semibold underline" href="/">{t("back_to_home")}</a>
        <hr />
        <UsageAgreements />
        <br />
        <Introduction />
        <br />
        <Conditions />
        <br />
        <Deletion />
        <br />
        <AppAgreements />
        <br />
        <Privacy />
        <br />
        <br />
      </div>
    </MyApp>
  );
}
