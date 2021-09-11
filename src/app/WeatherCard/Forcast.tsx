import React from "react";
import { Grid, Divider, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: "32px",
    widtth: "32px",
  },
});

const Forcast = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography>Monday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>
      <Grid item>
        <Typography>Tuesday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>

      <Grid item>
        <Typography>Wednesday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>

      <Grid item>
        <Typography>Thursday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>

      <Grid item>
        <Typography>Friday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>

      <Grid item>
        <Typography>Saturday</Typography>
        <img
          className={classes.image}
          src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
          alt="pic"
        />
        <Typography>10&deg;C</Typography>
      </Grid>
    </Grid>
  );
};

export default Forcast;
