<<<<<<< HEAD
import { Box, Typography, Link as MuiLink, Stack } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

=======
// src/components/Footer.jsx
import { Box, Typography, Link as MuiLink, Stack } from "@mui/material";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
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
<<<<<<< HEAD
          {t("footer.organizer")}
        </Typography>

        <Typography variant="body2">
          {t("footer.copyright")}
=======
          主辦單位：台灣世界民俗文化協會
        </Typography>

        <Typography variant="body2">
          © 2025 金門世界民俗舞蹈觀光藝術祭. 版權所有.
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
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
<<<<<<< HEAD
          <FaFacebook size={20} /> {t("footer.facebook")}
        </MuiLink>

        <Typography variant="body2">
          {t("footer.note")}
=======
          <FaFacebook size={20} /> Facebook 分享
        </MuiLink>

        <Typography variant="body2">
          🎉 期待您的熱情參與，讓我們共同舞動精彩世界！
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
        </Typography>
      </Stack>
    </Box>
  );
}
