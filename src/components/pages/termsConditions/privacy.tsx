import { useTranslation } from "react-i18next";

import { Headline1 } from "../../shared/headline1";

export function Privacy() {
  const { t } = useTranslation();
  return (
    <>
      <Headline1>{t("terms_conditions.privacy.title")}</Headline1>
      <p>
        {t("terms_conditions.privacy.paragraph1")} <a href="">LINK</a> {t("terms_conditions.privacy.paragraph2")}
      </p>
    </>
  );
}
