import React, { useState, useEffect } from "react";
import arrowIcon from "../assets/left_arrow.svg";
import { Input, Button, Image } from "../components";
import { useNavigate } from "react-router-dom";
import Check from "../assets/Check.svg";
import { useUsersPosts } from "../config/useUser";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, fetchUser, updateUser } = useUsersPosts();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo_url: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetchUser();
      } catch (error) {
        Swal.fire("Error!", "Gagal mengambil data profil.", "error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        photo_url: user.photo_url || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(formData);
      Swal.fire("Berhasil!", "Profil Anda telah diperbarui.", "success");
      navigate("/task");
    } catch (error) {
      Swal.fire("Error!", "Gagal memperbarui profil.", "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-10 rounded-xl lg:px-8 bg-[#1D1825]">
      <div className="mt-5 mb-10 sm:mx-auto sm:w-96 sm:max-w-sm">
        <div className="flex justify-start" onClick={() => navigate("/task")}>
          <button className="mb-5 text-white align-baseline flex items-center">
            <img src={arrowIcon} alt="arrow" className="w-8 h-8 mr-0" />
            Edit Profile
          </button>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {loading && <p className="text-white">Loading...</p>}
          {/* Input Image */}
          <Image src={formData.photo_url || user?.photo_url} />
          <Input
            label="Profile URL"
            htmlFor="profile"
            id="profile"
            name="photo_url"
            value={formData.photo_url}
            onChange={handleChange}
            type="url"
            placeholder="Image Url"
          />
          {/* Input Name */}
          <Input
            label="Name"
            htmlFor="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Sarah Santoso"
          />
          {/* Input Email */}
          <Input
            label="Email"
            htmlFor="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="sarahsantoso@gmail.com"
          />
          {/* Input Password */}
          <Input
            label="Password"
            htmlFor="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Isi jika ingin mengganti (opsional)"
          />
          <div className="w-full bg-[#523C72] hover:bg-[#6a4d95] rounded-md">
            <Button src={Check} title="Submit" disabled={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
