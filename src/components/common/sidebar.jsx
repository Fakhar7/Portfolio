import React from "react";
import NavLinks from "./navLinks";
import Logo from "./logo";

const SideBar = ({ links, isEnabled }) => {
  let classes =
    "fixed z-50 border border-gray-300 dark:border-zinc-900 md:hidden bg-gray-200 dark:bg-zinc-900 h-full left-0 right-1/4 p-4 transition ease-linear";
  classes += isEnabled ? " translate-0" : " -translate-x-full";

  return (
    <div className={classes}>
      <div className="pb-3 mb-5 ml-1 border-b border-b-gray-300 dark:border-b-zinc-700">
        <Logo />
      </div>
      <NavLinks links={links} isSidebar={true} />
    </div>
  );
};

export default SideBar;
