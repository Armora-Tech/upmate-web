import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";
import { Headline1 } from "../../shared/headline1";

interface DataSetData {
  headline: string;
  paragraph: string;
}

export function DataSet() {
  const { t } = useTranslation();
  const dataSetData: DataSetData[] = [
    {
      headline: t("privacy_policy.data_set.headline1"),
      paragraph: t("privacy_policy.data_set.paragraph1"),
    },
    {
      headline: t("privacy_policy.data_set.headline2"),
      paragraph: t("privacy_policy.data_set.paragraph2"),
    },
    {
      headline: t("privacy_policy.data_set.headline3"),
      paragraph: t("privacy_policy.data_set.paragraph3"),
    },
  ];
  return (
    <>
      <Headline1>{t("privacy_policy.data_set.title")}</Headline1>
      {dataSetData.map((data, index) => (
        <div key={index}>
          <Headline2>{data.headline}</Headline2>
          <Paragraph>{data.paragraph}</Paragraph>
        </div>
      ))}
    </>
  );
}
