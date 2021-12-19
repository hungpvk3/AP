import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: "rgb(59 130 246)",
  },
  tooltip: {
    backgroundColor: "rgb(59 130 246)",
    boxShadow: "0 2px 5px rgb(59 130 246)",
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}
