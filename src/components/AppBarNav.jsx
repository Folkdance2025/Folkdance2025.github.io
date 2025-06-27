// src/components/AppBarNav.jsx
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  FaHome,
  FaGlassCheers,
  FaGlobeAsia,
  FaTheaterMasks,
  FaHandsHelping,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logoZh from "../assets/logo_zh.png";
import logoEn from "../assets/logo_en.png";
import bgImage from "../assets/hero.jpg";

export default function AppBarNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const logo = currentLang === "zh" ? logoZh : logoEn;

  const navItems = [
    { label: t("nav.home"), icon: <FaHome />, path: "/" },
    { label: t("nav.dinner"), icon: <FaGlassCheers />, path: "/dinner" },
    { label: t("nav.forum"), icon: <FaGlobeAsia />, path: "/forum" },
    { label: t("nav.show"), icon: <FaTheaterMasks />, path: "/show" },
    { label: t("nav.party"), icon: <FaHandsHelping />, path: "/party" },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const LangButtons = (
    <ButtonGroup
      variant="outlined"
      size="small"
      sx={{
        borderRadius: "6px",
        backgroundColor: "rgba(255,255,255,0.15)",
        "& button": {
          color: "#fff",
          borderColor: "#fff",
          fontWeight: "bold",
          fontSize: "0.8rem",
          px: 1.5,
          py: 0.5,
          borderRadius: "6px",
          textTransform: "uppercase",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.7)",
            color: "#000",
            borderColor: "#fff",
          },
        },
        "& button.Mui-disabled": {
          color: "#000",
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
      }}
    >
      <Button
        onClick={() => setLanguage("zh")}
        disabled={currentLang === "zh"}
      >
        中文
      </Button>
      <Button
        onClick={() => setLanguage("en")}
        disabled={currentLang === "en"}
      >
        ENGLISH
      </Button>
    </ButtonGroup>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#FFFDF7",
          minHeight: { xs: 400, sm: 700, md: 960 },
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {!isMobile && (
          <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              px: 2,
              zIndex: (theme) => theme.zIndex.drawer + 2,
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                  mr: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box component="img" src={logo} alt="logo" sx={{ height: 70, maxWidth: 200, mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1.4rem", sm: "1.8rem" },
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t("title")}
                </Typography>
              </Box>

              <Stack direction="row" spacing={3} alignItems="center">
                {currentLang === "zh" ? (
                  navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      startIcon={item.icon}
                      sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.15rem" }}
                    >
                      {item.label}
                    </Button>
                  ))
                ) : (
                  <>
                    <Button
                      color="inherit"
                      onClick={handleMenuClick}
                      sx={{ fontWeight: "bold", fontSize: "1.15rem", color: "#fff" }}
                    >
                      Menu
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={menuOpen}
                      onClose={handleMenuClose}
                      PaperProps={{ sx: { backgroundColor: "#333", color: "#fff" } }}
                    >
                      {navItems.map((item) => (
                        <MenuItem
                          key={item.path}
                          component={RouterLink}
                          to={item.path}
                          onClick={handleMenuClose}
                          sx={{ color: "#fff" }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}

                {LangButtons}
              </Stack>
            </Toolbar>
          </AppBar>
        )}

        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={() => setDrawerOpen(true)}
              sx={{ position: "absolute", top: 20, left: 20, zIndex: 3, color: "#fff" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Box sx={{ position: "absolute", top: 20, right: 20, zIndex: 3 }}>
              {LangButtons}
            </Box>

            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 260 }} role="presentation">
                <Box
                  component={RouterLink}
                  to="/"
                  sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: 2, textDecoration: "none" }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <Box component="img" src={logo} alt="logo" sx={{ height: 60 }} />
                </Box>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                      <ListItemButton
                        component={RouterLink}
                        to={item.path}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "medium" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}

        {/* Hero 區塊 */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            mt: { xs: 10, sm: 12, md: 14 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.6rem", sm: "4.2rem", md: "5rem" },
              fontWeight: 900,
              color: "#fff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
              maxWidth: "90vw",
              wordBreak: "break-word",
            }}
          >
            {t("title")}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mt: 4,
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            }}
          >
            {t("slogan")}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
              fontWeight: 600,
              color: "#fff",
              textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            {t("date")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
