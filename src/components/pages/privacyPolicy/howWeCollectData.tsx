import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";
import { Headline1 } from "../../shared/headline1";

interface HowWeCollectData {
  headline: string;
  paragraph: string;
}

export function HowWeCollect() {
  const { t } = useTranslation();
  const howWeCollectData: HowWeCollectData[] = [
    {
      headline: t("privacy_policy.how_we_collect_data.headline1"),
      paragraph: t("privacy_policy.how_we_collect_data.paragraph1"),
    },
    {
      headline: t("privacy_policy.how_we_collect_data.headline2"),
      paragraph: t("privacy_policy.how_we_collect_data.paragraph2"),
    },
    {
      headline: t("privacy_policy.how_we_collect_data.headline3"),
      paragraph: t("privacy_policy.how_we_collect_data.paragraph3"),
    },
    {
      headline: t("privacy_policy.how_we_collect_data.headline4"),
      paragraph: t("privacy_policy.how_we_collect_data.paragraph4"),
    },
  ];
  return (
    <>
      <Headline1>{t("privacy_policy.how_we_collect_data.title")}</Headline1>
      {howWeCollectData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          <Paragraph>{data.paragraph}</Paragraph>
        </div>
      ))}
    </>
  );
}
