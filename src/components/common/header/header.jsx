import React from "react";
import PropTypes from "prop-types";

import ToggleDarkMode from "../toggleDarkMode";
import BurgerMenu from "../burgerMenu";
import NavLinks from "../navLinks";

import styles from "./Header.module.css";
import Logo from "../logo";

const Header = ({ links, mode, toggleDarkMode, toggleSideBar }) => {
  return (
    <header className={styles.header + " dark:bg-zinc-900"}>
      <nav className={styles.nav}>
        <Logo />
        <NavLinks links={links} />
        <div className="flex items-center justify-center">
          <ToggleDarkMode mode={mode} toggleDarkMode={toggleDarkMode} />
          <BurgerMenu toggleSideBar={toggleSideBar} />
        </div>
      </nav>
    </header>
  );
};

Header.PropTypes = {
  links: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default React.memo(Header);
