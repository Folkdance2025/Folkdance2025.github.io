import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";

export default function PartyPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        fontSize="2.2rem"
        gutterBottom
      >
        {t("party.title")}
      </Typography>

    {/* 活動內容說明 */}
      <Box
      sx={{
        maxWidth: "1000px",
        mx: "auto", // 區塊水平置中
        my: 8,
        px: 2,
        textAlign: "left", // 文字本身靠左對齊
      }}
    >
      {/* 內文段落 */}
      <Typography
        variant="body1"
        fontSize={{ xs: "1.1rem", md: "1.25rem" }}
        lineHeight={1.8}
        letterSpacing="0.03em"
        whiteSpace="pre-line"
      >
        {t("party.description")}
      </Typography>
    </Box>

      {/* 活動地點 */}
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography
          variant="h6"
          fontSize="1.8rem"
          fontWeight="bold"
        >
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

      <BackHomeButton />
    </Box>
  );
}
