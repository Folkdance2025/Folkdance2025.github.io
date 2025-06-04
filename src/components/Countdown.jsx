// src/components/Countdown.jsx
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";


export default function Countdown() {
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

      // 檢查變化後開啟 flip 動畫
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
    <Grid item xs={6} sm={3} key={label}>
      <Paper
        elevation={6}
        sx={{
          height: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
          p: 2,
          transition: "transform 0.3s",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          className={flip[flipKey] ? "flip" : ""}
          sx={{
            borderBottom: "2px solid rgba(255,255,255,0.3)",
            pb: 1,
            mb: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
          {value}
        </Typography>
        <Typography variant="body1">{label}</Typography>
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
      <Typography variant="h5" sx={{ mb: 4 }}>
        ⏳ 活動倒數
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        maxWidth="600px"
        margin="0 auto"
      >
        {renderBlock("天", time.days, "days")}
        {renderBlock("時", time.hours, "hours")}
        {renderBlock("分", time.minutes, "minutes")}
        {renderBlock("秒", time.seconds, "seconds")}
      </Grid>
    </Box>
  );
}
