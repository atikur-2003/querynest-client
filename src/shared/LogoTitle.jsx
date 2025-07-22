import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const LogoTitle = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} className="w-16 rounded-full" alt="" />
          <h1 className="text-2xl font-bold text-orange-500">QueryNest</h1>
        </div>
      </Link>
    </div>
  );
};

export default LogoTitle;
