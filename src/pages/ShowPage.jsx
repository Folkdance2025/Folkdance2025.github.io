import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";

export default function ShowPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const groups = t("show.groups", { returnObjects: true });

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}
      >
        {t("show.title")}
      </Typography>
      
      <Typography
        variant="body1"
        fontSize="1.1rem"
        sx={{
          maxWidth: 960,
          mx: "auto",
          mt: 2,
          whiteSpace: "pre-line",
          textAlign: "justify",
          lineHeight: 1.8,
          letterSpacing: "0.02em",}}

>         {t("show.description")}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontSize="2rem" fontWeight="bold" sx={{ mb: 1 }}>
          {t("venue_show.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.5rem">
          <a
            href={t("venue_show.name")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2', textDecoration: 'underline' }}
          >
            {t("venue_show.linkText")}
          </a>
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ maxWidth: 960, mx: "auto", mt: 4, overflowX: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {t("show.group")}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {t("show.region")}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {t("show.note")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{item.name}</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{item.region}</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.1rem" }}>{item.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          mt: 4,
          fontSize: "1.2rem",
          lineHeight: 2,
          textAlign: "justify",
        }}
      >
        <p>{t("show.remark")}</p>
      </Box>

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
  );
}
