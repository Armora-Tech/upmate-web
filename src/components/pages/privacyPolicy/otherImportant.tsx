import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";
import { Headline1 } from "../../shared/headline1";

interface OtherImportantData {
  headline: string;
  paragraph: string;
}

export function OtherImportant() {
  const { t } = useTranslation();
  const otherImportantData: OtherImportantData[] = [
    {
      headline: t("privacy_policy.other_important_information.headline1"),
      paragraph: t("privacy_policy.other_important_information.paragraph1"),
    },
    {
      headline: t("privacy_policy.other_important_information.headline2"),
      paragraph: t("privacy_policy.other_important_information.paragraph2"),
    },
  ];
  return (
    <>
      <Headline1>{t("privacy_policy.other_important_information.title")}</Headline1>
      {otherImportantData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          <Paragraph>{data.paragraph}</Paragraph>
        </div>
      ))}
    </>
  );
}
