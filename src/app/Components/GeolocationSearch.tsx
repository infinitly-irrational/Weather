import { IconButton } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";

interface Props {
  Geolocation: () => void;
  coordinates:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
}

const GeolocationSearch = ({ Geolocation, coordinates }: Props) => {
  return (
    <>
      <IconButton
        type="submit"
        aria-label="get current location weather"
        onClick={Geolocation}
      >
        <LocationOnIcon />
      </IconButton>
    </>
  );
};

export default GeolocationSearch;
