import React, { useState } from "react";
import {
  Grid,
  Typography,
  Switch,
  Theme,
  createStyles,
  withStyles,
  FormControlLabel,
} from "@material-ui/core";
import { FormGroup } from "@material-ui/core";

// const AntSwitch = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: 28,
//       height: 16,
//       padding: 0,
//       display: "flex",
//     },
//     switchBase: {
//       padding: 2,
//       color: theme.palette.grey[700],
//       "&$checked": {
//         transform: "translateX(12px)",
//         color: theme.palette.common.white,
//         "& + $track": {
//           opacity: 1,
//           backgroundColor: theme.palette.primary.main,
//           borderColor: theme.palette.primary.main,
//         },
//       },
//     },
//     thumb: {
//       width: 12,
//       height: 12,
//       boxShadow: "none",
//     },
//     track: {
//       border: `1px solid ${theme.palette.grey[500]}`,
//       borderRadius: 16 / 2,
//       opacity: 1,
//       backgroundColor: theme.palette.common.white,
//     },
//     checked: {},
//   })
// )(Switch);
const SwitchToggle = () => {
  const [checked, setChecked] = useState(false);
  const styles = {
    borderColor: "red",
    // borderStyle: "solid",
    borderWidth: "3px",
    // color: "white",
    // backgroundColor: "black",
    // borderRadius: "30px",
  };

  return (
    <Typography style={{ ...styles }} component="div">
      <Grid component="label" container alignItems="center" spacing={2}>
        {/* <Grid item>
          F<span>&#176;</span>
        </Grid> */}
        <Grid item>
          {/* <AntSwitch
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
            name="temperature-mode"
          /> */}
          <FormControlLabel
            control={
              <Switch checked={checked} onChange={() => setChecked(!checked)} />
            }
            labelPlacement="top"
            label="F / C"
          />
        </Grid>
        {/* <Grid item>
          C<span>&#176;</span>
        </Grid> */}
      </Grid>
    </Typography>
    // <div style={{ display: "flex", flexWrap: "wrap", width: "90%" }}>
    //   <span>
    //     F<span>&#176;</span>
    //   </span>
    //   <div>
    //     <AntSwitch
    //       checked={checked}
    //       onChange={() => setChecked(!checked)}
    //       aria-label="temperature-mode"
    //     />
    //   </div>
    //   <span>
    //     C<span>&#176;</span>
    //   </span>
    // </div>
  );
};

export default SwitchToggle;
