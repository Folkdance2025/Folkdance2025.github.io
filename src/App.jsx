import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Objective from "./components/Objective";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import DinnerPage from "./pages/DinnerPage";
import ForumPage from "./pages/ForumPage";
import ShowPage from "./pages/ShowPage";
import PartyPage from "./pages/PartyPage";
import QuickNav from "./components/QuickNav"; // ✅ 加入 MUI 導覽
import LanguageSwitcher from "./components/LanguageSwitcher"; // ✅ 語言切換
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // 導入你剛剛的主題
import "./App.css";


function HomePage() {
  return (
    <>
      <Countdown />
      <div style={{ height: "80px" }} />
      <Hero />
      <QuickNav /> {/* ✅ 使用 MUI 設計的快速導覽按鈕 */}
      <About />
      <Objective />
      <Schedule />
      <Footer />
    </>
  );
}

function App() {
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
      </Router>
    </ThemeProvider>
  );
}

export default App;