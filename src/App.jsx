import { useState } from "react";
import "./App.css";
import Header from "./components/common/header/header";
import SideBar from "./components/common/sidebar";
import Welcome from "./components/welcome";
import Path from "./path";
import Follow from "./components/common/follow/follow";

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
        <Follow className="fixed bottom-5 left-0 right-0 flex justify-center items-end" />
      </div>
    </div>
  );
}

export default App;
