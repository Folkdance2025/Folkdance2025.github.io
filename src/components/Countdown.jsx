import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Countdown() {
  const { t } = useTranslation();

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const padZero = (value) => String(value).padStart(2, "0");

  useEffect(() => {
    const targetDate = new Date("2025-08-22T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
        return;
      }

      const newTime = {
        days: padZero(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((diff / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((diff / 1000) % 60)),
      };

      setFlip({
        days: newTime.days !== time.days,
        hours: newTime.hours !== time.hours,
        minutes: newTime.minutes !== time.minutes,
        seconds: newTime.seconds !== time.seconds,
      });

      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const renderBlock = (label, value, flipKey) => (
    <Grid item xs={12} sm={6} md={3} key={label}>
      <Paper
        elevation={6}
        sx={{
          minHeight: { xs: 100, sm: 120, md: 140 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
          p: { xs: 2, sm: 3 },
          transition: "transform 0.3s",
        }}
      >
        <Typography
          fontWeight="bold"
          className={flip[flipKey] ? "flip" : ""}
          sx={{
            fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" },
            borderBottom: "2px solid rgba(255,255,255,0.3)",
            pb: 1,
            mb: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
      </Paper>
    </Grid>
  );

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "background.default",
        textAlign: "center",
        color: "text.primary",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontSize: { xs: "1.4rem", sm: "1.8rem" },
          fontWeight: "bold",
        }}
      >
        ⏳ {t("countdown.title")}
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        maxWidth="600px"
        margin="0 auto"
      >
        {renderBlock(t("countdown.days"), time.days, "days")}
        {renderBlock(t("countdown.hours"), time.hours, "hours")}
        {renderBlock(t("countdown.minutes"), time.minutes, "minutes")}
        {renderBlock(t("countdown.seconds"), time.seconds, "seconds")}
      </Grid>
    </Box>
  );
}
