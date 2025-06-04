// src/components/Objective.jsx
import { Box, Typography, Stack } from "@mui/material";

export default function Objective() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.paper",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        計畫目標
      </Typography>

      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          mt: 4,
          textAlign: "justify",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="body1">
            一、增進世界民俗文化之了解，提升國際視野及促進文化交流。
          </Typography>
          <Typography variant="body1">
            二、廣邀全球華人社團朋友參與，促使愛好世界民俗舞蹈之全球華人文化之融合。
          </Typography>
          <Typography variant="body1">
            三、透過世界民俗文化的交流、認識、推廣與傳承，達成「認同本土文化、融入世界文化」之目的。
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
