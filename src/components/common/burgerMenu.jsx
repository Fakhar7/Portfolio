import React from "react";

const BurgerMenu = ({ toggleSideBar }) => {
  return (
    <i
      onClick={toggleSideBar}
      className="text-2xl ml-4 dark:text-white md:hidden bi bi-list"
    ></i>
  );
};

export default BurgerMenu;
