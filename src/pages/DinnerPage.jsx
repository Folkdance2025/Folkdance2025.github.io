<<<<<<< HEAD
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";

export default function DinnerPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}>
        {t("dinner.title")}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" fontSize="1.6rem" fontWeight="bold" sx={{ mb: 1 }}>
          {t("venue_dinner.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.3rem">
          <a
            href={t("venue_dinner.name")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2', textDecoration: 'underline' }}
          >
            {t("venue_dinner.linkText")}
          </a>
        </Typography>
      </Box>

      <Box sx={{ mt: 6, fontSize: "1.2rem" }}>
        <Typography variant="body1" fontSize="1.3rem" sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
        {t("dinner.description")}
      </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
=======
import BackHomeButton from "../components/BackHomeButton";

export default function DinnerPage() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1>迎賓晚宴及舞會</h1>
      <p>這裡是迎賓晚宴的詳細內容...</p>
      <BackHomeButton />
    </div>
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
  );
}
