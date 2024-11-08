import React from "react";

function Button({ title, src, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      type="submit"
      className="flex items-center w-full justify-center px-3 py-1.5 
              text-sm/6 font-lights text-white shadow-sm "
    >
      <img src={src} alt="arrow" className="w-4 mr-2" />
      {title}
    </button>
  );
}

export default Button;
