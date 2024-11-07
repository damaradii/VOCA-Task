import React from "react";
import arrowIcon from "../assets/left_arrow.svg";
import Check from "../assets/Check.svg";
const UpdateProfile = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-10  rounded-xl lg:px-8 bg-[#1D1825]">
      <div className=" mt-5 mb-10 sm:mx-auto sm:w-96 sm:max-w-sm ">
        <div className="flex justify-start">
          <button className="mb-5 text-white align-baseline flex items-center">
            <img src={arrowIcon} alt="arrow" className="w-8 h-8 mr-0" />
            Edit Profile
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg"
            className="h-32 mx-auto object-cover rounded-full w-32 mb-5"
          />
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="profileUrl"
              className="block text-sm/6 font-medium text-white text-left"
            >
              Profile URL
            </label>
            <input
              id="profileUrl"
              name="profileUrl"
              type="url"
              autoComplete="profileUrl"
              placeholder="<image URL>"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-white text-left"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Sarah Santoso"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white text-left"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="sarah.santoso@gmail.com"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white text-left"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              autoComplete="current-password"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400 sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center w-full justify-center rounded-md bg-[#523C72] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#6a4d95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <img src={Check} alt="arrow" className="w-5 mr-1" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
