import React from "react";
import { Snackbar, IconButton, Tooltip, Zoom } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FileCopyIcon from "@material-ui/icons/FileCopy";

interface Props {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
  copyToClipboard: () => void;
}

const Actions = ({ open, handleClose, copyToClipboard }: Props) => {
  return (
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
  );
};

export default Actions;
