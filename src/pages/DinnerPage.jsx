import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";
import dinnerImage from "../assets/dinner.jpg";
import CloseIcon from "@mui/icons-material/Close";

export default function DinnerPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
          mx: "auto",
          my: 8,
          px: 2,
          textAlign: "left",
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

      {/* 活動地點 */}
      <Box sx={{ mt: 2, mb: 4 }}>
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

      {/* 圖片展示 */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          mt: 4,
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <img
          src={dinnerImage}
          alt="Dinner Event"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      {/* 彈窗放大圖片 */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xl">
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          <Box
            component="img"
            src={dinnerImage}
            alt="Dinner Fullscreen"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              maxHeight: "90vh",
            }}
          />
        </DialogContent>
      </Dialog>

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
  );
}
