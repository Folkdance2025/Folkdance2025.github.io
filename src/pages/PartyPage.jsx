import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";
import partyImage from "../assets/party.jpg";
import CloseIcon from "@mui/icons-material/Close";

export default function PartyPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          {t("party.description")}
        </Typography>
      </Box>

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

      {/* 可點擊放大圖片 */}
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
          src={partyImage}
          alt="Party"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      {/* 彈窗全螢幕顯示圖片 */}
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            p: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={partyImage}
            alt="Party Fullscreen"
            sx={{
              width: "auto",
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
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
