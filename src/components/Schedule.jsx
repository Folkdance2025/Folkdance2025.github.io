// src/components/Schedule.jsx
import {
  Box,
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";

export default function Schedule() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: 2,
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        活動規劃內容
      </Typography>

      <Container maxWidth="md" sx={{ mt: 2, mb: 4 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", lineHeight: 2 }}
        >
          本計畫所規劃的主要活動期程為 2025 年 08 月 22 日至 24 日，共計三天
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mt: 2, mb: 1 }}
        >
          活動主要內容
        </Typography>
      </Container>

      <Container maxWidth="md">
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  日期
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  時間
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  活動內容
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  地點
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* 8/22 */}
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>8/22</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>18:00~21:00</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>迎賓晚宴及舞會</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>金城體育館</TableCell>
              </TableRow>

              {/* 8/23 */}
              <TableRow>
                <TableCell align="center" rowSpan={2} sx={{ fontSize: "1.05rem" }}>
                  8/23
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>08:30~14:30</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>世界民俗舞蹈國際論壇</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>金門大學國際會議廳</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>19:00~21:00</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>世界民俗舞蹈匯演</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>金門文化局演藝廳</TableCell>
              </TableRow>

              {/* 8/24 */}
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>8/24</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>09:00~15:00</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>聯歡交流</TableCell>
                <TableCell align="center" sx={{ fontSize: "1.05rem" }}>金城體育館</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
