import React, { useState } from "react";
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import GeolocationSearch from "./GeolocationSearch";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: "18em",
  },
  input: {
    marginLeft: "0.5em",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});
interface Props {
  Geolocation: () => void;
  coordinates:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
}

const StyledSearchBar = ({ Geolocation, coordinates }: Props) => {
  const classes = useStyles();
  const searchTermUpdate = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined
  ) => {
    if (e) {
      setSearch(e.target.value);
    }
  };
  const handleSearch = (e: any) => {};
  const [search, setSearch] = useState("");
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        name="search"
        className={classes.input}
        placeholder="Enter City or zipcode"
        // required={true}
        aria-label="search bar"
        autoFocus={true}
        value={search}
        onChange={searchTermUpdate}
      />
      <IconButton
        className={classes.iconButton}
        type="submit"
        aria-label="search by city or zipcode"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <GeolocationSearch Geolocation={Geolocation} coordinates={coordinates} />
    </Paper>
  );
};

export default StyledSearchBar;
