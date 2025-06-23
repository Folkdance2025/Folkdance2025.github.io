import { Box, Typography, Link as MuiLink, Stack } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        px: 2,
        py: 5,
        backgroundColor: "#f1f1f1",
        textAlign: "center",
      }}
    >
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: 960, mx: "auto" }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          {t("footer.organizer")}
        </Typography>

        <Typography variant="body2">
          {t("footer.copyright")}
        </Typography>

        <MuiLink
          href="https://www.facebook.com/people/%E5%8F%B0%E7%81%A3%E4%B8%96%E7%95%8C%E6%B0%91%E4%BF%97%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83/100066682143009/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            color: "#1877f2",
            fontWeight: "bold",
          }}
        >
          <FaFacebook size={20} /> {t("footer.facebook")}
        </MuiLink>

        <Typography variant="body2">
          {t("footer.note")}
        </Typography>
      </Stack>
    </Box>
  );
}
