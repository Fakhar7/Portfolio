import React, { Component } from "react";
import NavLinks from "./navLinks";
import ToggleDarkMode from "./toggleDarkMode";
import BurgerMenu from "./burgerMenu";
import Logo from "./logo";

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="fixed z-50 left-0 right-0 top-0 h-20 max-md:h-14 flex items-center justify-center bg-gray-200 dark:bg-zinc-900">
        <nav className="container flex justify-between items-center max-md:px-3 max-2xl::px-3">
          <Logo />
          <NavLinks links={this.props.links} />
          <div className="flex items-center justify-center">
            <ToggleDarkMode
              mode={this.props.mode}
              toggleDarkMode={this.props.toggleDarkMode}
            />
            <BurgerMenu toggleSideBar={this.props.toggleSideBar} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
