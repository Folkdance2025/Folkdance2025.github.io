// src/components/KinmenLiquorIntro.jsx
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function KinmenLiquorIntro() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* 標題 */}
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
          {/* 左：圖片（md 以上佔 1/2 寬） */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={new URL("../assets/kkl-poster.jpg", import.meta.url).href}
              alt={t("kkl.imageAlt")}
              loading="lazy"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: "80%",   // 圖片縮小（約 0.5x）
                height: "auto",
                mx: "auto",        // 置中
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* 右：文字（md 以上佔 1/2 寬） */}
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

            <Button
              href="https://www.kkl.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{ mt: 3 }}
            >
              {t("kkl.link")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
