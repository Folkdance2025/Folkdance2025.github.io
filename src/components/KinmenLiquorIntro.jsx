// src/components/KinmenLiquorIntro.jsx
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function KinmenLiquorIntro() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* 區塊標題（若不需要可刪掉） */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "2.4rem" } }}
        >
          {t("kkl.title")}
        </Typography>

        {/* RWD：xs=直向堆疊；md=左右並排 */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: { xs: 1, md: 2 } }}>
          {/* 左：圖片 */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={new URL("../assets/kkl-poster.jpg", import.meta.url).href}
              alt={t("kkl.imageAlt")}
              loading="lazy"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: "80%",   // 縮小（約 0.5x）
                height: "auto",
                mx: "auto",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* 右：文字＋影片 */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.9, textAlign: "justify", mb: 2 }}
            >
              {t("kkl.body1")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.9, textAlign: "justify" }}
            >
              {t("kkl.body2")}
            </Typography>

            {/* 官網連結按鈕：靠左、字大、寬度符合文字 */}
            <Button
              href="https://www.kkl.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                mt: 3,
                fontSize: "1.125rem", // ✅ 字體加大 (18px)
                fontWeight: 600,
                px: 2,                // ✅ 適度左右 padding
                minWidth: "auto",     // ✅ 按鈕寬度依文字
                justifyContent: "flex-start"
              }}
            >
              {t("kkl.link")}
            </Button>

            {/* 影片 */}
            <Box
              sx={{
                mt: 4,
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", md: "90%" },
                mx: "auto",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                bgcolor: "#000",
              }}
            >
              <video
                autoPlay
                muted
                playsInline
                controls
                preload="metadata"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <source
                  src={new URL("../assets/kkl-video.mp4", import.meta.url).href}
                  type="video/mp4"
                />
                {t("kkl.videoNotSupported", { defaultValue: "Your browser does not support the video tag." })}
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
