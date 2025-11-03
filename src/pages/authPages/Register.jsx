import React, { useState } from "react";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const { createUser, setUser, updateUser } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    // password validation
    const validationEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validationEx.test(password)) {
      setErrorMessage(
        "Password must have at least one uppercase, one lowercase letter and be at least 6 characters long"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: profilePic })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: profilePic });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Register Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: { error },
            });
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  // Image upload handler
  const handleUploadImage = async (e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const res = await axios.post(imageHostingUrl, formData);
    console.log(res.data);
    const imageUrl = res.data.data.display_url;
    setProfilePic(imageUrl);
  };

  return (
    <div className="hero py-20 bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-2xl text-orange-500 font-semibold">
            Register your account
          </h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Name"
            />

            <label className="label text-lg font-medium">Photo URL</label>
            <input
              onChange={handleUploadImage}
              type="file"
              name="photo"
              className="input"
              placeholder="Enter Phot URL"
            />

            <label className="label text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Email"
            />

            <label className="label text-lg font-medium">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="btn btn-xs absolute right-5 top-2 z-10"
              >
                {showPass ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>
            <div>
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            {errorMessage && (
              <p className="text-red-400 text-base">{errorMessage}</p>
            )}

            <button className="btn border-orange-500  text-orange-500 hover:bg-orange-500 hover:text-white mt-4">
              Register
            </button>

            <p className="text-base mt-3">
              Already have an account ?
              <Link to="/login" className="text-orange-500 underline">
                Login here
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
