import ChangeTimer from "./ChangeTimer";
import CountdownClock from "./CountdownClock";
import { Box, Grid, Typography } from "@mui/material";

function MainPage() {
  return (
    <Box
      sx={{
        p: 5,
        width: "fill",
        height: "fill",
        backgroundColor: "primary.light",
      }}
    >
      <Box
        sx={{ textAlign: "center", backgroundColor: "secondary.dark", p: 5 }}
      >
        <Grid>
          <Grid item xs={12}>
            <Typography variant="h2">Pomodoro timer</Typography>
          </Grid>
          <Grid item xs={12}>
            <ChangeTimer />
            <CountdownClock />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainPage;
