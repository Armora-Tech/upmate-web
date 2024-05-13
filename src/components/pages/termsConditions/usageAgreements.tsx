import { useTranslation } from "react-i18next";

import { Headline1 } from "../../shared/headline1";
import { Paragraph } from "../../shared/paragraph";

export function UsageAgreements() {
  const { t } = useTranslation();
  const paragraph: string[] = [
    t("terms_conditions.usage_agreement.paragraph1"),
    t("terms_conditions.usage_agreement.paragraph2"),
    t("terms_conditions.usage_agreement.paragraph3"),
  ];
  return (
    <>
      <Headline1>{t("terms_conditions.usage_agreement.title")}</Headline1>
      {paragraph.map((data) => (
        <Paragraph key={data}>{data}</Paragraph>
      ))}
    </>
  );
}
