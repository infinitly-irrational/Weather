import React, { useEffect, useState } from "react";
import clsx from "clsx";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CloseIcon from "@material-ui/icons/Close";
// import FileCopyIcon from "@material-ui/icons/FileCopy";
import {
  Grid,
  Paper,
  Collapse,
  IconButton,
  // Snackbar,
  Tooltip,
  Zoom,
  makeStyles,
  Theme,
  createStyles,
  // Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import { icons } from "./Images.mock";
import Forcast from "./Forcast";
// import Actions from "./Actions";

interface Props {
  city: string;
  zipcode?: number;
  state?: string;
  country?: string;
  coordinates?:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
  data: any;
}
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(193,193,193,0.1)",
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    moreInfo: {},
  })
);

/*  Data to user from data array
    datetime, temp (max_temp, min_temp), weather[code, description, icon], wind_cdir_full, 

*/

const WeatherCard = ({
  city,
  zipcode,
  state,
  country,
  coordinates,
  data,
}: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [title, setTitle] = useState("");
  let cardParameters = [city, zipcode, state, country];
  // const icon = icons[data?.data[0]?.weather?.icon];
  // const [weatherInfo, city_name] = data;

  const isTruthy = (elem: any): boolean | void => {
    if (Boolean(elem)) {
      return true;
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Copied Weather Info");
    setOpen(true);
  };

  useEffect(() => {
    if (coordinates?.latitude && coordinates?.longitude) {
      setTitle(
        `Weather for coordinates ${coordinates.latitude}, ${coordinates.longitude}`
      );
    } else {
      cardParameters = cardParameters.filter(isTruthy);

      setTitle(cardParameters.join(", "));
    }
  }, [
    city,
    coordinates?.latitude,
    coordinates?.longitude,
    zipcode,
    state,
    country,
  ]);

  //add tooltip for copy/paste
  return (
    <div className={classes.root}>
      <Tooltip
        title="Click to copy weather info"
        placement="top-end"
        TransitionComponent={Zoom}
        aria-label="Copy weather info"
      >
        <Paper className={classes.paper} onClick={copyToClipboard}>
          <div className="upper">
            <Grid container spacing={2}>
              <Grid container item xs={12} spacing={10}>
                <Grid item>
                  <Typography aria-label="Today's day">Friday</Typography>
                </Grid>
                <Grid item>
                  <Typography aria-label="City">New York</Typography>
                </Grid>
                {/* <Grid item>
                  <Typography aria-label="Temperature">Temperature</Typography>
                </Grid> */}
              </Grid>
              <Grid container item xs={12} spacing={4}>
                <Grid item>
                  <img
                    className={classes.image}
                    src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
                    alt="pic"
                  />
                </Grid>
                <Grid item>
                  <Typography style={{ paddingTop: "4em" }}>
                    60 degrees
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ paddingTop: "4em" }}>
                    High / Low
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={5}>
                <Grid item>Precipitation</Grid>
                <Grid item>Humidity</Grid>
                <Grid item>Feels-like</Grid>
              </Grid>
            </Grid>
          </div>
          <Box className={classes.moreInfo}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Forcast />
            </Collapse>
          </Box>
        </Paper>
      </Tooltip>
    </div>
  );
};

export default WeatherCard;

/*  

<Grid item>
            <img
              className={classes.image}
              src="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
              alt="pic"
            />
          </Grid>
*/

/*

<Avatar
              className={classes.avatar}
              src={
                "https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
              }
              alt="https://cdn.iconscout.com/icon/free/png-256/weather-forecast-cloud-clouds-cloudy-sun-partly-sunny-15476.png"
            />


action={
          <Actions
            open={open}
            handleClose={handleClose}
            copyToClipboard={copyToClipboard}
          />
        }
*/

/* <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Copied successfully to clipboard
                </Alert>
              </Snackbar> */

/*

<>
            <Tooltip
              title="Copy weather info"
              placement="top-end"
              TransitionComponent={Zoom}
              aria-label="Copy weather info"
            >
              <IconButton
                onClick={copyToClipboard}
                aria-label="copy weather info to clipboard"
              >
                <FileCopyIcon />
              </IconButton>
            </Tooltip>
            <Snackbar
              onClose={handleClose}
              message="Copied to clipboard"
              open={open}
              autoHideDuration={1900}
              action={
                <>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" style={{ color: "white" }} />
                  </IconButton>
                </>
              }
            />
          </>
*/

/*
<CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Other info goes here</Typography>
        </CardContent>
      </Collapse>
*/
