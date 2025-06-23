import { IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const toggleLang = () => {
    i18n.changeLanguage(lang === "zh" ? "en" : "zh");
  };

  return (
    <IconButton color="inherit" onClick={toggleLang}>
      <Typography fontSize="1.4rem">
        {lang === "zh" ? "🇺🇸" : "🇹🇼"}
      </Typography>
    </IconButton>
  );
}
