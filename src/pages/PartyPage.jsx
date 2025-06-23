import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";

export default function PartyPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" fontSize="2.2rem" gutterBottom>
        {t("party.title")}
      </Typography>

      {/* 活動地點 */}
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography variant="h6" fontSize="1.8rem" fontWeight="bold">
          {t("venue_party.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.4rem">
          <a
            href={t("venue_party.name")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "underline" }}
          >
            {t("venue_party.linkText")}
          </a>
        </Typography>
      </Box>

      {/* 活動內容說明 */}
      <Typography variant="body1" fontSize="1.3rem" sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
        {t("party.description")}
      </Typography>

      <BackHomeButton />
    </Box>
  );
}
