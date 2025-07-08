import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop"; // ✅ 新增這行
import About from "./components/About";
import Objective from "./components/Objective";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import DinnerPage from "./pages/DinnerPage";
import ForumPage from "./pages/ForumPage";
import ShowPage from "./pages/ShowPage";
import PartyPage from "./pages/PartyPage";
import AppBarNav from "./components/AppBarNav";
import PromoVideos from "./components/PromoVideos"; 

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function HomePage() {
  return (
    <>
      <Countdown />
      <div style={{ height: "60px" }} />
      <About />
      <Objective />
      <PromoVideos />
      <Footer />
    </>
  );
}

function App() {
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
        <ScrollToTop /> {/* ✅ 每次路由變化都自動捲到頂 */}
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
      </Router>

    </ThemeProvider>
  );
}

export default App;
