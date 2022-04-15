import { useState } from "react";
import { Button, Typography } from "@mui/material";

function CountdownClock() {
  let [timer, setTimer] = useState("I AM A TIMER");
  let [startStop, setStartStop] = useState(true);

  const handleStartStop = () => {
    setTimer((timer += 1));
    setStartStop(!startStop);
  };

  return (
    <>
      <Typography variant="h4" sx={{ p: 5 }}>
        {timer}
      </Typography>
      {startStop ? (
        <Button onClick={handleStartStop} variant="contained" color="success">
          Start
        </Button>
      ) : (
        <Button onClick={handleStartStop} variant="contained" color="error">
          Stop
        </Button>
      )}
    </>
  );
}

export default CountdownClock;
