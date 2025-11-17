import React from "react";
// const Button = ({ children, ...rest }) => {
//   console.log(varient);
//   console.log(size);
//   console.log(rest);
//   let sizeClass = size ? `button-${size}` : "";
//   let checkVarient = varient ? `button-${varient}` : "";
//   // size === "lg" ? (sizeClass = "button-large") : "";
//   // size === "sm" ? (sizeClass = "button-small") : "";
//   const allClasses = classNames(sizeClass, className, checkVarient);
//   console.log(allClasses);

const ReactButton = ({ children, ...rest }) => {
  return (
    <button className="p-1 flex justify-center items-center border-[1px] border-[#333333] bg-[#1a1a1a]  text-white rounded-md">
      {children}
    </button>
  );
};

export default ReactButton;
