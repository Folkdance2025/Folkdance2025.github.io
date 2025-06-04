// src/components/LanguageSwitcher.jsx
import { Button, Stack } from '@mui/material';


export default function LanguageSwitcher() {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Button onClick={() => i18n.changeLanguage('zh')}>中文</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
    </Stack>
  );
}
