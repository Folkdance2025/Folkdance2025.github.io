// src/pages/ForumPage.jsx
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  IconButton,
  useTheme,
  Button,
  Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BackHomeButton from "../components/BackHomeButton";
import React from "react";

import huangImg from "../assets/speakers/huang.jpg";
import kkImg from "../assets/speakers/kk.jpg";
import suImg from "../assets/speakers/su.jpg";
import tsangImg from "../assets/speakers/tseng.jpeg";
import hsuImg from "../assets/speakers/hsu.png";
import ilianaImg from "../assets/speakers/iliana.jpg";

const schedule = [
  ["08:30 - 09:00", "schedule.1", "schedule.1_note"],
  ["09:00 - 09:20", "schedule.2", "schedule.2_note"],
  ["09:30 - 10:00", "schedule.3", "schedule.3_note"],
  ["10:00 - 10:10", "schedule.4", "schedule.4_note"],
  ["10:10 - 10:40", "schedule.5", "schedule.5_note"],
  ["10:50 - 11:20", "schedule.6", "schedule.6_note"],
  ["11:30 - 12:00", "schedule.7", "schedule.7_note"],
  ["12:00 - 13:00", "schedule.8", "schedule.8_note"],
  ["13:10 - 13:30", "schedule.9", "schedule.9_note"],
  ["13:30 - 13:50", "schedule.10", "schedule.10_note"],
  ["13:50 - 14:00", "schedule.11", "schedule.11_note"]
];

const speakers = [
  { name: "huang", topicKey: "schedule.3", time: "09:30–10:00", bioKey: "bio.huang", image: huangImg },
  { name: "kk", topicKey: "schedule.5", time: "10:10–10:40", bioKey: "bio.kk", moreKey: "more.kk", image: kkImg },
  { name: "su", topicKey: "schedule.6", time: "10:50–11:20", bioKey: "bio.su", image: suImg },
  { name: "tsang", topicKey: "schedule.7", time: "11:30–12:00", bioKey: "bio.tsang", image: tsangImg },
  { name: "hsu", topicKey: "schedule.9", time: "13:10–13:30", bioKey: "bio.hsu", moreKey: "more.hsu", image: hsuImg },
  { name: "iliana", topicKey: "schedule.10", time: "13:30–13:50", bioKey: "bio.iliana", image: ilianaImg }
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForumPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setShowMore(false);
  };

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" fontSize="2.2rem" gutterBottom>
        {t("scheduleTitle")}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontSize="2rem" fontWeight="bold" sx={{ mb: 1 }}>
          {t("venue.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.5rem">
          <a
            href={t("venue.name")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2', textDecoration: 'underline' }}
          >
            {t("venue.linkText")}
          </a>
        </Typography>
      </Box>

      <Paper sx={{ width: "100%", maxWidth: "1000px", mx: "auto", mt: 6, mb: 6, overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.time")}</TableCell>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.topic")}</TableCell>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.note")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, i) => (
                  <TableCell key={i} align="center" sx={{ fontSize: "1.15rem", py: 2 }}>{t(cell)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Typography variant="h5" fontWeight="bold" fontSize="1.9rem" id="speakers" sx={{ mb: 3 }}>
        {t("speakerTitle")}
      </Typography>

      <Grid container spacing={4} maxWidth="lg" mx="auto" justifyContent="center">
        {speakers.map((s, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} display="flex" justifyContent="center">
            <Card onClick={() => { setActiveSpeaker(s); setOpen(true); }} sx={{ cursor: "pointer", width: 300 }}>
              <CardMedia
                component="img"
                image={s.image}
                alt={s.name}
                sx={{ height: 260, objectFit: "contain", objectPosition: "top" }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" fontSize="1.2rem">
                  {t(`name.${s.name}`)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    mt: 1
                  }}
                >
                  {t(s.topicKey)}（{s.time}）
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontSize: "1.5rem" }}>
          {t(`name.${activeSpeaker?.name}`)}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            image={activeSpeaker?.image}
            alt={activeSpeaker?.name}
            sx={{ mb: 2, borderRadius: 1, objectFit: "contain", objectPosition: "top" }}
          />
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            {t(activeSpeaker?.topicKey)}（{activeSpeaker?.time}）
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, whiteSpace: "pre-line", fontSize: "1.1rem" }}>
            {t(activeSpeaker?.bioKey)}
          </Typography>

          {activeSpeaker?.moreKey && (
            <>
              <Box textAlign="center" mt={2}>
                <Button variant="outlined" onClick={() => setShowMore(!showMore)}>
                  {showMore ? t("button.hide") : t("button.more")}
                </Button>
              </Box>
              <Collapse in={showMore}>
                <Typography variant="body2" sx={{ mt: 2, whiteSpace: "pre-line", fontSize: "1rem" }}>
                  {t(activeSpeaker.moreKey)}
                </Typography>
              </Collapse>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
  );
}
