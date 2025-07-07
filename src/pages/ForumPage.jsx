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

import logoZh from "../assets/logo_zh.png";
import logoEn from "../assets/logo_en.png";
import kkImg from "../assets/speakers/kk.jpg";
import suImg from "../assets/speakers/su.jpg";
import wuImg from "../assets/speakers/wu.jpg";
import ilianaImg from "../assets/speakers/iliana.jpg";
import hsuImg from "../assets/speakers/hsu.png";

const schedule = [
  ["08:30 - 09:00", "schedule.register", "schedule.register_note"],
  ["09:00 - 09:20", "schedule.openingDance", "schedule.openingDance_note"],
  ["09:20 - 09:35", "schedule.sharingExperience", "schedule.sharingExperience_note"],
  ["09:35 - 10:00", "schedule.bulgariaHeritage", "schedule.bulgariaHeritage_note"],
  ["10:00 - 10:25", "schedule.inheritance", "schedule.inheritance_note"],
  ["10:25 - 10:40", "schedule.break", "schedule.break_note"],
  ["10:45 - 11:10", "schedule.competitionFunction", "schedule.competitionFunction_note"],
  ["11:15 - 11:40", "schedule.courseDesign", "schedule.courseDesign_note"],
  ["11:45 - 12:00", "schedule.closing", "schedule.closing_note"],
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForumPage() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const currentLang = i18n.language;

  const getPlaceholderImage = () => (currentLang === "zh" ? logoZh : logoEn);

  const speakers = [
    {
      name: "hsu",
      topicKey: "schedule.sharingExperience",
      time: "09:20–09:35",
      bioKey: "bio.hsu",
      image: hsuImg,
    },
    {
      name: "iliana",
      topicKey: "schedule.bulgariaHeritage",
      time: "09:35–10:00",
      bioKey: "bio.iliana",
      image: ilianaImg,
    },
    {
      name: "kk",
      topicKey: "schedule.inheritance",
      time: "10:00–10:25",
      bioKey: "bio.kk",
      moreKey: "more.kk",
      image: kkImg,
    },
    {
      name: "wu",
      topicKey: "schedule.competitionFunction",
      time: "10:45–11:10",
      bioKey: "bio.wu",
      image: wuImg,
    },
    {
      name: "su",
      topicKey: "schedule.courseDesign",
      time: "11:15–11:40",
      bioKey: "bio.su",
      image: suImg,
    },
  ];

  const handleClose = () => {
    setOpen(false);
    setShowMore(false);
  };

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" fontSize="2.2rem" gutterBottom>
        {t("Title")}
      </Typography>

      <Box sx={{ mt: 4, maxWidth: "1000px", mx: "auto" }}>
        <Typography
          variant="body1"
          fontSize="1.2rem"
          sx={{ whiteSpace: "pre-line", textAlign: "justify", lineHeight: 1.8, letterSpacing: "0.03em" }}
        >
          {t("description")}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontSize="2rem" fontWeight="bold" sx={{ mb: 1 }}>
          {t("venue.title")}：
        </Typography>
        <Typography variant="body1" fontSize="1.5rem">
          <a href={t("venue.name")} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
            {t("venue.linkText")}
          </a>
        </Typography>
      </Box>

      <Typography variant="h6" fontSize="1.6rem" fontWeight="bold" sx={{ mt: 6, mb: 2 }}>
        {t("scheduleTitle")}
      </Typography>

      <Paper sx={{ width: "100%", maxWidth: "1000px", mx: "auto", mt: 0, mb: 6, overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.time")}</TableCell>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.topic")}</TableCell>
              <TableCell align="center" sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>{t("table.note")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map(([time, topicKey, noteKey], index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ fontSize: "1.15rem", py: 2, whiteSpace: "nowrap" }}>{time}</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.15rem", py: 2 }}>{t(topicKey)}</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.15rem", py: 2 }}>{t(noteKey)}</TableCell>
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
                image={s.image || getPlaceholderImage()}
                alt={s.name}
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  objectPosition: "top",
                  bgcolor: "#fff",
                  p: 1,
                  borderRadius: 2
                }}
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
                    mt: 1,
                    whiteSpace: "pre-line"
                  }}
                >
                  {`${t(s.topicKey)}\n${s.time}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontSize: "1.5rem" }}>
          {t(`name.${activeSpeaker?.name}`)}
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <CardMedia
            component="img"
            image={activeSpeaker?.image || getPlaceholderImage()}
            alt={activeSpeaker?.name}
            sx={{
              width: "100%",
              height: 280,
              objectFit: "cover",
              objectPosition: "top",
              bgcolor: "#fff",
              p: 1,
              mb: 2,
              borderRadius: 2
            }}
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
