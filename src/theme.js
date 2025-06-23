// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C1873F", // 金色
    },
    secondary: {
      main: "#BF3131", // 紅色
    },
    background: {
      default: "#FFFDF7", // ✅ 米白背景
      paper: "#FFFDF7",   // ✅ 卡片也跟著米白一致
    },
    text: {
      primary: "#3E2723", // 深棕
      secondary: "#6D4C41",
    },
    warning: {
      main: "#FF9800",
    },
    success: {
      main: "#4CAF50",
    },
  },
  typography: {
    fontFamily: "\"Noto Sans TC\", Roboto, sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.4rem", fontWeight: 600 },
    h3: { fontSize: "2rem", fontWeight: 500 },
    body1: { fontSize: "1.05rem", lineHeight: 1.8 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
