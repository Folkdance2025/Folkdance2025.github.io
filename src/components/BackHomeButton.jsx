<<<<<<< HEAD
=======
// src/components/BackHomeButton.jsx
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

export default function BackHomeButton() {
<<<<<<< HEAD
  const { t } = useTranslation();
=======
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        size="large"
        sx={{
          borderRadius: 2,
          px: 4,
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "1rem",
        }}
      >
<<<<<<< HEAD
        {t("nav.home")}
=======
        回首頁
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
      </Button>
    </Box>
  );
}
