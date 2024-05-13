import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";
import { Headline1 } from "../../shared/headline1";

interface HowWeShareData {
  headline: string;
  paragraph: string;
  content: Array<string>;
}

export function HowWeShare() {
  const { t } = useTranslation();
  const howWeShareData: HowWeShareData[] = [
    {
      headline: t("privacy_policy.how_we_share_info.content1.headline"),
      paragraph: t("privacy_policy.how_we_share_info.content1.paragraph"),
      content: [t("privacy_policy.how_we_share_info.content1.1"), t("privacy_policy.how_we_share_info.content1.2"), t("privacy_policy.how_we_share_info.content1.3"), t("privacy_policy.how_we_share_info.content1.4")],
    },
    {
      headline: t("privacy_policy.how_we_share_info.content2.headline"),
      paragraph: t("privacy_policy.how_we_share_info.content2.paragraph1"),
      content: [
        t("privacy_policy.how_we_share_info.content2.1"),
        t("privacy_policy.how_we_share_info.content2.2"),
        t("privacy_policy.how_we_share_info.content2.3"),
        t("privacy_policy.how_we_share_info.content2.4"),
        t("privacy_policy.how_we_share_info.content2.5"),
        t("privacy_policy.how_we_share_info.content2.6"),
      ],
    },
  ];
  return (
    <>
    <Headline1>{t("privacy_policy.how_we_share_info.title")}</Headline1>
      {howWeShareData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          <Paragraph>{data.paragraph}</Paragraph>
          {data.content.map((item, i) => (
            <div className="ms-10" key={i}>
              <Paragraph>{item}</Paragraph>
            </div>
          ))}
        </div>
      ))}
      <Paragraph>{t("privacy_policy.how_we_share_info.content2.paragraph2")}</Paragraph>
    </>
  );
}
