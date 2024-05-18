import { useState } from "react";
import "./App.css";
import Header from "./components/common/header";
import SideBar from "./components/common/sidebar";
import Welcome from "./components/welcome";
import Path from "./path";
import FolloW from "./components/common/follow";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSideBar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSideBar = () => {
    setSideBar(!sidebar);
  };

  let navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="body bg-gray-100 dark:bg-zinc-800">
        <Header
          links={navLinks}
          mode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSideBar={toggleSideBar}
        />
        <SideBar links={navLinks} isEnabled={sidebar} />
        <Path />
        <Welcome />
        <FolloW />
      </div>
    </div>
  );
}

export default App;
