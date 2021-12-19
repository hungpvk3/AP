import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: "red",
  },
  tooltip: {
    backgroundColor: "red",
    boxShadow: "0 2px 5px red",
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}
