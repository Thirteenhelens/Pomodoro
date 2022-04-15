import { useState } from "react";
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

function ChangeTimer() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Typography>navigation placeholder</Typography>
      {/* <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction>fuck</BottomNavigationAction>
      </BottomNavigation> */}
    </>
  );
}

export default ChangeTimer;
