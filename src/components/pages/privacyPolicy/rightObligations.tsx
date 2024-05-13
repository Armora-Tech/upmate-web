import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";
import { Headline1 } from "../../shared/headline1";

interface RightObligationsData {
  headline: string;
  paragraph: string;
  content: Array<string>;
}

export function RightObligations() {
  const { t } = useTranslation();
  const rightObligationsData: RightObligationsData[] = [
    {
      headline: t("privacy_policy.right_obligations.content1.headline"),
      paragraph: t("privacy_policy.right_obligations.content1.paragraph1"),
      content: [
        t("privacy_policy.right_obligations.content1.1"), 
        t("privacy_policy.right_obligations.content1.2"), 
        t("privacy_policy.right_obligations.content1.3"), 
        t("privacy_policy.right_obligations.content1.paragraph2")],
    },
    {
      headline: t("privacy_policy.right_obligations.content2.headline"),
      paragraph: t("privacy_policy.right_obligations.content2.paragraph"),
      content: [""],
    },
    {
      headline: t("privacy_policy.right_obligations.content3.headline"),
      paragraph: t("privacy_policy.right_obligations.content3.paragraph"),
      content: [
        t("privacy_policy.right_obligations.content3.1"), 
        t("privacy_policy.right_obligations.content3.2"), 
        t("privacy_policy.right_obligations.content3.3"), 
        t("privacy_policy.right_obligations.content3.4")],
    },
  ];
  return (
    <>
    <Headline1>{t("privacy_policy.right_obligations.title")}</Headline1>
      {rightObligationsData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          <Paragraph>{data.paragraph}</Paragraph>
          {data.content.map((item, i) => (
            <div className={index === 0 && i === data.content.length - 1 ? "" : "ms-10"} key={i}>
              <Paragraph>{item}</Paragraph>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
