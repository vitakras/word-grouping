import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import { notificationState } from "../state/atoms";

function AlertWrapper(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export function Notification() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const notification = useRecoilValue(notificationState);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (notification.length > 0) {
      setOpen(true);
    }
  }, [notification]);

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertWrapper onClose={handleClose} severity="success">
          {notification}
        </AlertWrapper>
      </Snackbar>
    </div>
  );
}
