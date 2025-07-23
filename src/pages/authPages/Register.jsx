import React, { useState } from "react";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    // password validation
    const validationEx = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6}/;
    if (validationEx.test(password) === false) {
      setErrorMessage(
        "Password must have one uppercase, one lowercase and have to at least 6 characters long"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
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

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-26">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">SignUp your account</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSignup} className="fieldset">
            <label className="label text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Name"
            />

            <label className="label text-lg font-medium">Photo URL</label>
            <input
              type="text"
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

            <button className="btn border-[#F26B21]  text-[#F26B21] hover:bg-[#F26B21] hover:text-white mt-4">
              SignUp
            </button>

            <p className="text-base mt-3">
              Already have an account ?
              <Link to="/login" className="text-[#F26B21] underline">
                Login here
              </Link>
            </p>
          </form>

          <button
            onClick={handleGoogleSignin}
            className="mt-3 btn border-[#F26B21]  text-[#F26B21] hover:bg-[#F26B21] hover:text-white"
          >
            <FaGoogle></FaGoogle>
            Signin with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
