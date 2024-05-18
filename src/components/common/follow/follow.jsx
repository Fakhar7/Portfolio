import React from "react";

const links = [
  { className: "instagram text-pink-500", link: "https://www.instagram.com" },
  { className: "facebook text-blue-600", link: "https://www.facebook.com" },
  { className: "youtube text-red-700", link: "https://www.youtube.com" },
];

const Follow = ({ className }) => {
  return (
    <div className={className}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer text-xl mx-4 bi bi-${link.className}`}
        ></a>
      ))}
    </div>
  );
};

export default Follow;
