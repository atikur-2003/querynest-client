import React from "react";
import { Link, NavLink } from "react-router";
import LogoTitle from "../shared/LogoTitle";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-base font-medium text-orange-500">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="text-base font-medium text-orange-500">
        <NavLink to='/'>Queries</NavLink>
      </li>
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
        <a className=""><LogoTitle></LogoTitle></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-[#FFFBF2] font-semibold rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
