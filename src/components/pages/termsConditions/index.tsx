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
      <div className="min-h-screen px-10 text-justify">
        <h1 className="mt-32 min-w-full text-4xl mb-5 font-bold">{t("footer.service.list2")}</h1>
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
