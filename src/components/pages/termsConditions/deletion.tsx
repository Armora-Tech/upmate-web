import { useTranslation } from "react-i18next";

import { Headline2 } from "../../shared/headline2";
import { Paragraph } from "../../shared/paragraph";

export function Deletion() {
  const { t } = useTranslation();
  return (
    <>
      <Headline2>{t("terms_conditions.deletion.headline")}</Headline2>
      <Paragraph>{t("terms_conditions.deletion.paragraph")}</Paragraph>
    </>
  );
}
