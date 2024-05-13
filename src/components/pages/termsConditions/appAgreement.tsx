import { useTranslation } from "react-i18next";

import { Headline1 } from "../../shared/headline1";
import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";

interface AppAgreementsData {
  headline: string;
  paragraph: Array<string>;
}

export function AppAgreements() {
  const { t } = useTranslation();
  const appAgreementsData: AppAgreementsData[] = [
    {
      headline: t("terms_conditions.app_agreements.headline1"),
      paragraph: [t("terms_conditions.app_agreements.paragraph1.1"), t("terms_conditions.app_agreements.paragraph1.2"), t("terms_conditions.app_agreements.paragraph1.3"), t("terms_conditions.app_agreements.paragraph1.4")],
    },
    {
      headline: t("terms_conditions.app_agreements.headline2"),
      paragraph: [t("terms_conditions.app_agreements.paragraph2.1"), t("terms_conditions.app_agreements.paragraph2.2"), t("terms_conditions.app_agreements.paragraph2.3")],
    },
    {
      headline: t("terms_conditions.app_agreements.headline3"),
      paragraph: [t("terms_conditions.app_agreements.paragraph3.1"), t("terms_conditions.app_agreements.paragraph3.2"), t("terms_conditions.app_agreements.paragraph3.3"), t("terms_conditions.app_agreements.paragraph3.4")],
    },
  ];
  return (
    <>
      <Headline1>{t("terms_conditions.app_agreements.title")}</Headline1>
      {appAgreementsData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          {data.paragraph.map((item) => (
            <div className="ms-10">
              <Paragraph>{item}</Paragraph>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
