import React from "react";
import arrowIcon from "../assets/left_arrow.svg";
import { Upload, Input, Email, Password, Button } from "../components";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate("/task");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-10  rounded-xl lg:px-8 bg-[#1D1825]">
      <div className=" mt-5 mb-10 sm:mx-auto sm:w-96 sm:max-w-sm ">
        <div className="flex justify-start" onClick={buttonBack}>
          <button className="mb-5 text-white align-baseline flex items-center">
            <img src={arrowIcon} alt="arrow" className="w-8 h-8 mr-0" />
            Edit Profile
          </button>
        </div>
        <form className="space-y-6" action="#" method="POST">
          {/* upload image...*/}
          <div>
            <Upload src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg" />
          </div>

          {/* input name */}
          <div>
            <Input />
          </div>

          <div>
            <Email />
          </div>

          <div>
            <Password />
          </div>

          <div>
            <Button title="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
