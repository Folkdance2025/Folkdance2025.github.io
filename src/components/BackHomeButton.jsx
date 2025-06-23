// src/components/BackHomeButton.jsx
import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

export default function BackHomeButton() {
  const { t } = useTranslation();

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
        {t("nav.home")}
      </Button>
    </Box>
  );
}
