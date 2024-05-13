import { useTranslation } from "react-i18next";

import { Headline1 } from "../../shared/headline1";
import { Paragraph } from "../../shared/paragraph";

export function Introduction() {
  const { t } = useTranslation();
  const introductionData: string[] = [
    t("terms_conditions.introduction.1"),
    t("terms_conditions.introduction.2"),
    t("terms_conditions.introduction.3"),
    t("terms_conditions.introduction.4"),
    t("terms_conditions.introduction.5"),
  ];
  return (
    <>
      <Headline1>{t("terms_conditions.introduction.title")}</Headline1>
      <ul>
        {introductionData.map((data, index) => (
          <li className="mb-5" key={data}>
            <Paragraph>{data}</Paragraph>
          </li>
        ))}
      </ul>
    </>
  );
}
