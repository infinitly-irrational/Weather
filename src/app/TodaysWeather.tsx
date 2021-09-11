import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateAreas: ``,
  },
});

const TodaysWeather = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box className="weather" component="div">
        <Box className="current-weather">
          <h2>Weather: cloudy</h2>
        </Box>
      </Box>
    </Box>
  );
};

export default TodaysWeather;
