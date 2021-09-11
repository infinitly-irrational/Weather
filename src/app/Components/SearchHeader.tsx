import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import StyledSearchBar from "./StyledSearchBar";

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
  isPending: boolean;
  error: any;
}

const useStyles = makeStyles({
  container: {
    padding: "1em",
    boxSizing: "content-box",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: ` ". . . . . . . . . . . ."
                         ". . s s s s s s s s . . "
                           `,

    "& $searchBar": {},
    "& $toggleSwitch": {},
  },
  searchBar: {
    // gridColumn: "2 / 10",
    gridArea: "s",
    marginLeft: "1em",
  },
  toggleSwitch: {
    // gridColumn: "11 / -1",
    gridArea: "t",
    marginLeft: "2em",
  },
});

const SearchHeader = ({
  city,
  zipcode,
  state,
  country,
  coordinates,
  data,
  isPending,
  error,
}: Props) => {
  const classes = useStyles();

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any): void => {
        coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    } else console.log("Unable to get current location");
  };
  return (
    <>
      <Box className={classes.container}>
        <Box component="span" className={classes.searchBar}>
          <StyledSearchBar
            Geolocation={getGeolocation}
            coordinates={coordinates}
          />
        </Box>
        {/* <Box component="div" className={classes.toggleSwitch}>

          <SwitchToggle />
        </Box> */}
      </Box>
      <Box className="data"></Box>
    </>
  );
};

export default SearchHeader;
