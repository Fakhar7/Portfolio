import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Button_ = ({ classes, name, color = "error" }) => {
  return (
    <div className={classes}>
      <Button data-aos="fade-up" color={color} variant="contained">
        {name}
      </Button>
    </div>
  );
};

Button.PropTypes = {
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default React.memo(Button_);
