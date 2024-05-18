import React from "react";
import PropTypes from "prop-types";

const NavLinks = ({ links = [], isSidebar = false }) => {
  const classes = `inter-regular dark:text-gray-100 ${
    isSidebar ? "flex flex-col gap-2 md:hidden" : "flex gap-20 max-md:hidden "
  }`;

  return (
    <div>
      <ul className={classes}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-400"
            >
              {" "}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavLinks.propTypes = {
  links: PropTypes.array.isRequired,
  isSidebar: PropTypes.bool,
};

export default React.memo(NavLinks);
