import PropTypes from "prop-types";
import React from "react";

const ToggleDarkMode = React.memo(({ mode, toggleDarkMode }) => {
  const classes = `dark:text-white bi bi-${mode ? "brightness-low" : "moon"}`;

  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer px-1.5 m rounded-full"
    >
      <i
        style={{ fontSize: mode ? "25px" : "18px" }}
        className={classes}
        aria-label="Toggle dark mode"
      ></i>
    </div>
  );
});

ToggleDarkMode.propTypes = {
  mode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default ToggleDarkMode;
