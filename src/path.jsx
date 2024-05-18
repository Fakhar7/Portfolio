import React from "react";

const dot = [false, true, false, false];

const Path = () => {
  return (
    <div className="dot-box fixed right-5 flex flex-col bottom-1/2">
      {dot.map((dot, index) => (
        <div
          key={index}
          className={`dot ${dot ? "active dark:bg-gray-500" : ""}`}
        />
      ))}
    </div>
  );
};

export default Path;
