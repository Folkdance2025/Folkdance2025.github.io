// src/components/QuickNav.jsx
import { Stack, Button, Box } from "@mui/material";
import { FaGlassCheers, FaGlobeAsia, FaTheaterMasks, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function QuickNav() {
  return (
    <Box sx={{ backgroundColor: "#FFFDF7", py: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ px: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FaGlassCheers size={22} />}
          component={Link}
          to="/dinner"
          sx={{
            px: 4,
            py: 2,
            fontSize: "1.2rem",
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" }
          }}
        >
          迎賓晚宴及舞會
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FaGlobeAsia size={22} />}
          component={Link}
          to="/forum"
          sx={{
            px: 4,
            py: 2,
            fontSize: "1.2rem",
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" }
          }}
        >
          民俗舞蹈國際論壇
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FaTheaterMasks size={22} />}
          component={Link}
          to="/show"
          sx={{
            px: 4,
            py: 2,
            fontSize: "1.2rem",
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" }
          }}
        >
          民俗舞蹈匯演
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FaHandsHelping size={22} />}
          component={Link}
          to="/party"
          sx={{
            px: 4,
            py: 2,
            fontSize: "1.2rem",
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" }
          }}
        >
          聯歡交流
        </Button>
      </Stack>
    </Box>
  );
}
