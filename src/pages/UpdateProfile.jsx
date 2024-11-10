import React from "react";
import arrowIcon from "../assets/left_arrow.svg";
import { Input, Button, Image } from "../components";
import { useNavigate } from "react-router-dom";
import Check from "../assets/Check.svg";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate("/task");
  };
  const bututonSubmit = () => {
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
            <Image src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg" />
            <div>
              <Input
                label="Profile URL"
                htmlFor="profile"
                id="profile"
                name="profile"
                type="url"
                placeholder="<Image URL>"
              />
            </div>
          </div>

          {/* input name */}
          <div>
            <Input
              label="Name"
              htmlFor="name"
              id="name"
              name="name"
              type="text"
              placeholder="Sarah Santoso"
            />
          </div>

          <div>
            <Input
              label="Email"
              htmlFor="email"
              id="email"
              name="email"
              type="email"
              placeholder="sarah.santoso@gmail.com"
            />
          </div>

          <div>
            <Input
              label="Password"
              htmlFor="password"
              id="password"
              name="password"
              type="password"
              placeholder="*******"
            />
          </div>

          <div className="w-full bg-[#523C72] hover:bg-[#6a4d95] rounded-md ">
            <Button src={Check} title="Submit" onClick={bututonSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
