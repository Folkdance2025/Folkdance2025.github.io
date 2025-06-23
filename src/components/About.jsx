import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "background.default",
        borderTop: "1px solid #e0d7c9",
        borderBottom: "1px solid #e0d7c9",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 4,
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
        }}
      >
        {t("about.title")}
      </Typography>

      <Container maxWidth="md">
        {Array.isArray(paragraphs) &&
          paragraphs.map((text, index) => (
            <Typography
              key={index}
              variant="body1"
              paragraph
              sx={{
                mb: 3,
                lineHeight: 2,
                textAlign: "justify",
                fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.3rem" },
              }}
            >
              {text}
            </Typography>
          ))}
      </Container>
    </Box>
  );
}
