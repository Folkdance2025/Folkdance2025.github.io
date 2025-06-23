<<<<<<< HEAD
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
  IconButton
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
  { name: "kk", topicKey: "schedule.5", time: "10:10–10:40", bioKey: "bio.kk", image: kkImg },
  { name: "su", topicKey: "schedule.6", time: "10:50–11:20", bioKey: "bio.su", image: suImg },
  { name: "tsang", topicKey: "schedule.7", time: "11:30–12:00", bioKey: "bio.tsang", image: tsangImg },
  { name: "hsu", topicKey: "schedule.9", time: "13:10–13:30", bioKey: "bio.hsu", image: hsuImg },
  { name: "iliana", topicKey: "schedule.10", time: "13:30–13:50", bioKey: "bio.iliana", image: ilianaImg }
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ForumPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const handleClose = () => setOpen(false);

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
              <CardMedia component="img" image={s.image} alt={s.name} sx={{ height: 260, objectFit: "cover" }} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" fontSize="1.2rem">
                  {t(`name.${s.name}`)}
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
          <CardMedia component="img" image={activeSpeaker?.image} alt={activeSpeaker?.name} sx={{ mb: 2, borderRadius: 1 }} />
          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: "1.1rem" }}>
            {t(activeSpeaker?.topicKey)}（{activeSpeaker?.time}）
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, whiteSpace: "pre-line", fontSize: "1.1rem" }}>
            {t(activeSpeaker?.bioKey)}
          </Typography>
        </DialogContent>
      </Dialog>

      <Box sx={{ mt: 6 }}>
        <BackHomeButton />
      </Box>
    </Box>
  );
}
=======
import React from "react";
import BackHomeButton from "../components/BackHomeButton";
export default function ForumPage() {
  const tableStyle = {
    width: "100%",
    maxWidth: "900px",
    margin: "30px auto",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const thStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "center",
  };

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>一、世界民俗舞蹈國際論壇</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        <p>
          相較以往活動的不同處，本次活動增加以「世界民俗舞蹈在地傳承」為主題的國際論壇。
          有鑑於世界民俗舞蹈具有提升國際視野及促進世界民俗文化融合的重要意義，
          推廣在地民眾認識並且成為生活的一部分，有助於以上重要意義的提升。
        </p>
        <p>
          不過，以目前台灣的環境並不利於世界民俗舞蹈的推廣與傳承；
          因此，本次金門所主辦的活動規劃中特別加入「世界民俗舞蹈國際論壇」，期待透過全球華人及國際友人的寶貴見解及經驗，
          作為台灣改善推廣環境及傳承方式的重要參考，相關議程如表2。
        </p>

        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "40px" }}>
          表2、2025「世界民俗舞蹈國際論壇」議程表（2025/08/23）
        </p>
      </div>

      {/* 表格 */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>時間</th>
            <th style={thStyle}>議程</th>
            <th style={thStyle}>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>08:30~09:00</td>
            <td style={tdStyle}>報到</td>
            <td style={tdStyle}>主辦單位</td>
          </tr>
          <tr>
            <td style={tdStyle}>09:00~09:20</td>
            <td style={tdStyle}>致詞</td>
            <td style={tdStyle}>主辦與貴賓致詞</td>
          </tr>
          <tr>
            <td style={tdStyle}>09:30~10:00</td>
            <td style={tdStyle}>主題發表（台灣）</td>
            <td style={tdStyle}>黃文宏老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:00~10:10</td>
            <td style={tdStyle}>休息</td>
            <td style={tdStyle}>敬備餐點</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:10~10:40</td>
            <td style={tdStyle}>主題發表（新／馬）</td>
            <td style={tdStyle}>吳國基老師（KK老師）</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:50~11:20</td>
            <td style={tdStyle}>主題發表（台灣）</td>
            <td style={tdStyle}>彰化永靖國小 蘇月妙校長</td>
          </tr>
          <tr>
            <td style={tdStyle}>11:30~12:00</td>
            <td style={tdStyle}>主題發表（香港）</td>
            <td style={tdStyle}>預計邀請（劉定國老師）</td>
          </tr>
          <tr>
            <td style={tdStyle}>12:00~13:00</td>
            <td style={tdStyle}>午餐</td>
            <td style={tdStyle}>敬備便當</td>
          </tr>
          <tr>
            <td style={tdStyle}>13:00~14:00</td>
            <td style={tdStyle}>國際友人連線</td>
            <td style={tdStyle}>須文宏老師主持</td>
          </tr>
          <tr>
            <td style={tdStyle}>14:10~14:30</td>
            <td style={tdStyle}>論壇閉幕與宣言</td>
            <td style={tdStyle}>全體與會人士</td>
          </tr>
        </tbody>
      </table>

      {/* 結尾補充說明 */}
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto 0",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        <p>
          上表為國際論壇規劃議程，與會人士將邀請全球華人相關社團、
          政府相關機構人員、駐華代表處人員及關心世界民俗舞蹈推廣傳承的朋友等。
        </p>
      </div>
      <BackHomeButton />
    </div>
  );
}
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
