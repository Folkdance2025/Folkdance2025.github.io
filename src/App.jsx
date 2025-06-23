import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./App.css";

import About from "./components/About";
import Objective from "./components/Objective";
=======
import Hero from "./components/Hero";
import About from "./components/About";
import Objective from "./components/Objective";
import Schedule from "./components/Schedule";
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import DinnerPage from "./pages/DinnerPage";
import ForumPage from "./pages/ForumPage";
import ShowPage from "./pages/ShowPage";
import PartyPage from "./pages/PartyPage";
<<<<<<< HEAD
import AppBarNav from "./components/AppBarNav";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
=======
import QuickNav from "./components/QuickNav"; // ✅ 加入 MUI 導覽
import LanguageSwitcher from "./components/LanguageSwitcher"; // ✅ 語言切換
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // 導入你剛剛的主題
import "./App.css";

>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464

function HomePage() {
  return (
    <>
      <Countdown />
<<<<<<< HEAD
      <div style={{ height: "60px" }} />
      <About />
      <Objective />
=======
      <div style={{ height: "80px" }} />
      <Hero />
      <QuickNav /> {/* ✅ 使用 MUI 設計的快速導覽按鈕 */}
      <About />
      <Objective />
      <Schedule />
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
      <Footer />
    </>
  );
}

function App() {
<<<<<<< HEAD
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = currentLang === "zh" ? "/logo_zh.png" : "/logo_en.png";
    }
    document.title = t("siteTitle");
  }, [i18n.language, t]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBarNav />
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dinner" element={<DinnerPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/show" element={<ShowPage />} />
            <Route path="/party" element={<PartyPage />} />
          </Routes>
        </div>
=======
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 套用全站背景與排版標準化 */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dinner" element={<DinnerPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/show" element={<ShowPage />} />
          <Route path="/party" element={<PartyPage />} />
        </Routes>
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
      </Router>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> f2accc473efe2efcea7ff95dae32345f8059d464
