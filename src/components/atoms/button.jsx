import React from "react";
import Check from "../../assets/Check.svg";

function Button({ title, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      type="button"
      className="flex items-center w-full justify-center rounded-md bg-[#523C72] px-3 py-1.5 
              text-sm/6 font-semibold text-white shadow-sm hover:bg-[#6a4d95] "
    >
      <img src={Check} alt="arrow" className="w-5 mr-1" />
      {title}
    </button>
  );
}

export default Button;
