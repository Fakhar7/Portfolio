import React from "react";

const links = [
  { className: "instagram text-pink-500", link: "/" },
  { className: "facebook text-blue-600", link: "/about" },
  { className: "youtube text-red-700", link: "/contact" },
];

const FolloW = () => {
  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-end">
      <h1 className="nunito-regular dark:text-gray-100">Follow me:</h1>
      {links.map((link, index) => (
        <i
          className={`cursor-pointer text-xl mx-4 bi bi-${link.className}`}
        ></i>
      ))}
    </div>
  );
};

export default FolloW;
