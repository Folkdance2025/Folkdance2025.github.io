import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";

export default function DinnerPage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}
      >
        {t("dinner.title")}
      </Typography>

     <Box
      sx={{
        maxWidth: "1000px",
        mx: "auto",         // 區塊置中
        my: 8,
        px: 2,
        textAlign: "left", // 文字靠左對齊
      }}
    >
      <Typography
        variant="body1"
        fontSize={{ xs: "1.1rem", md: "1.25rem" }}
        lineHeight={1.8}
        letterSpacing="0.03em"
        whiteSpace="pre-line"
      >
        {t("dinner.description")}
      </Typography>
    </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          fontSize="1.6rem"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          {t("venue_dinner.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.3rem">
          <a
            href={t("venue_dinner.name")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "underline" }}
          >
            {t("venue_dinner.linkText")}
          </a>
        </Typography>
      </Box>

     

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
  );
}
