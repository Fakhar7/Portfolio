import React from "react";
import PropTypes from "prop-types";

const BurgerMenu = ({ toggleSideBar }) => {
  return (
    <i
      onClick={toggleSideBar}
      className="text-2xl ml-4 dark:text-white md:hidden bi bi-list"
    ></i>
  );
};

BurgerMenu.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
};

export default React.memo(BurgerMenu);
