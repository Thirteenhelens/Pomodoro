import { Box, Grid, Typography } from "@mui/material";

function MainPage() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid>
        <Grid item xs={12}>
          <Typography>Pomodoro title / name</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Timer (how?)</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Start / Stop Button</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
