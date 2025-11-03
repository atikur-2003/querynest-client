import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import LogoTitle from "../shared/LogoTitle";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Menu } from "@headlessui/react";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Logged Out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/queries"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          Queries
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-queries"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          My Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recommendation-for-me"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          Recommendations For Me
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-recommendations"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          My recommendations
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-semibold ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 bg-base-100 left-0 z-10 shadow-sm px-3 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden mr-2 text-orange-500"
          >
            <FaBars size={20}></FaBars>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <span>
          <LogoTitle></LogoTitle>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* navbar end */}
      <div className="navbar-end">
        {/* theme toggle button */}
        <label className="toggle text-base-content mr-3 border border-orange-500">
          <input
            type="checkbox"
            value="dark"
            className="theme-controller"
            onChange={(e) => {
              const newTheme = e.target.checked ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", newTheme);
              localStorage.setItem("theme", newTheme);
            }}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {/* user icon */}
        {user ? (
          <Menu as="div" className="relative inline-block text-left ">
            <Menu.Button className="flex items-center focus:outline-none">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer border border-orange-500"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right bg-white border border-orange-500 rounded shadow-lg z-50">
              <div className="px-4 py-2 border-b border-orange-500 font-medium text-gray-700">
                {user.displayName}
              </div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-2 ${
                      active ? "bg-gray-100" : ""
                    } text-red-600 cursor-pointer`}
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <div>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-base border border-orange-500  text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
