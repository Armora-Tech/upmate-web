import { useTranslation } from "react-i18next";

import { Headline1 } from "../../shared/headline1";
import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";

interface ConditionsData {
  headline: string;
  paragraph: string;
}

export function Conditions() {
  const { t } = useTranslation();
  const conditionsData: ConditionsData[] = [
    {
      headline: t("terms_conditions.conditions.headline3"),
      paragraph: t("terms_conditions.conditions.paragraph3"),
    },
    {
      headline: t("terms_conditions.conditions.headline4"),
      paragraph: t("terms_conditions.conditions.paragraph4"),
    },
    {
      headline: t("terms_conditions.conditions.headline5"),
      paragraph: t("terms_conditions.conditions.paragraph5"),
    },
    {
      headline: t("terms_conditions.conditions.headline6"),
      paragraph: t("terms_conditions.conditions.paragraph6"),
    },
    {
      headline: t("terms_conditions.conditions.headline7"),
      paragraph: t("terms_conditions.conditions.paragraph7"),
    },
  ];
  return (
    <>
      <Headline1>{t("terms_conditions.conditions.title")}</Headline1>
      <Headline2>{t("terms_conditions.conditions.headline1")}</Headline2>
      <br />
      <Paragraph>{t("terms_conditions.conditions.paragraph1")}</Paragraph>
      <br />
      <Headline2>{t("terms_conditions.conditions.headline2")}</Headline2>
      <br />
      <Paragraph>{t("terms_conditions.conditions.paragraph2")}</Paragraph>
      {conditionsData.map((data, index) => (
        <div className="ms-10">
          <li key={index}>
            <Headline2>{data.headline}</Headline2>
            <Paragraph>{data.paragraph}</Paragraph>
          </li>
        </div>
      ))}
    </>
  );
}
