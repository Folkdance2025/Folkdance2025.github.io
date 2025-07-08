// src/components/PromoVideos.jsx
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Paper, IconButton, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTranslation } from "react-i18next"; // ✅ 加入

const videoList = [
  { id: "mZoMWjd9N-g", duration: 90 },
  { id: "oe_b4YV3K6k", duration: 60 },
  { id: "aFVJY9D-V2Q", duration: 75 },
];

export default function PromoVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const { t } = useTranslation(); // ✅ 使用翻譯

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const duration = videoList[currentIndex].duration * 1000;
    timerRef.current = setTimeout(() => {
      nextVideo();
    }, duration);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);

  return (
    <Box sx={{ py: 12, px: 2, backgroundColor: "#fffdf7" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}
        >
          {t("promo.title")} {/* ✅ 使用多語言標題 */}
        </Typography>

        <Typography variant="subtitle1" align="center" sx={{ mt: 1, mb: 2 }}>
          {t("promo.progress", {
            current: currentIndex + 1,
            total: videoList.length,
          })} {/* ✅ 使用動態語言 */}
        </Typography>

        <Paper
          elevation={6}
          sx={{
            mt: 2,
            borderRadius: 3,
            overflow: "hidden",
            width: "100%",
            maxWidth: "1400px",
            mx: "auto",
            aspectRatio: "16 / 9",
            position: "relative",
            backgroundColor: "#000",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <iframe
              key={videoList[currentIndex].id}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoList[currentIndex].id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
              title={`Promo Video ${currentIndex + 1}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                border: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
        </Paper>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <IconButton onClick={prevVideo} size="large" aria-label="Previous video">
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={nextVideo} size="large" aria-label="Next video">
            <ArrowForwardIos />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
