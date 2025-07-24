import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import LogoTitle from "../shared/LogoTitle";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Menu } from "@headlessui/react";

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
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-base font-medium text-orange-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-medium text-orange-500">
        <NavLink to="/queries">Queries</NavLink>
      </li>
      {user && (
        <>
          <li className="text-base font-medium text-orange-500">
            <NavLink to="/my-queries">My Queries</NavLink>
          </li>
          <li className="text-base font-medium text-orange-500">
            <NavLink to="/">Recommendations For Me</NavLink>
          </li>

          <li className="text-base font-medium text-orange-500">
            <NavLink to="/my-recommendations">My recommendations</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#FFFBF2] fixed top-0 left-0 z-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
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
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Menu as="div" className="relative inline-block text-left ">
            <Menu.Button className="flex items-center focus:outline-none">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right bg-white border rounded shadow-lg z-50">
              <div className="px-4 py-2 border-b font-medium text-gray-700">
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
