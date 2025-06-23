<<<<<<< HEAD
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
=======
// src/components/LanguageSwitcher.jsx
import { Button, Stack } from '@mui/material';


export default function LanguageSwitcher() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Button onClick={() => i18n.changeLanguage('zh')}>中文</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
    </Stack>
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
  );
}
