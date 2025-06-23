// src/components/Objective.jsx
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import posterZh from "../assets/poster_zh.png";
import posterEn from "../assets/poster_en.png";

export default function Objective() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const poster = currentLang === "zh" ? posterZh : posterEn;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.paper",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        {currentLang === "zh" ? "活動海報及活動內容" : "Event Poster and Event Details"}
      </Typography>

      <Box
        component="img"
        src={poster}
        alt={currentLang === "zh" ? "活動海報" : "Event Poster"}
        sx={{
          maxWidth: "100%",
          height: "auto",
          mx: "auto",
          borderRadius: 2,
          boxShadow: 3,
        }}
      />
    </Box>
  );
}
