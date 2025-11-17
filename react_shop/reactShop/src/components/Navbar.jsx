import React from "react";
import { Link } from "react-router-dom";
// import Colors from "../constant/Colors";
import navbarImg from "../assets/Images/navImg.svg";
import ReactButton from "./ReactButton";
import LoginIcon from "../assets/Icons/LoginIcon";
import SignUpIcon from "../assets/Icons/SignUpIcon";
import ThemeDropdownIcon from "../assets/Icons/ThemeDropdownIcon";
import GitHubIcon from "../assets/Icons/GitHubIcon";
const Navbar = () => {
  const onLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("LoggedIn");
    console.log("logged out successfully");
    window.location.href = "/login";
  };
  return (
    <nav
      className="flex items-center border-b-2 border-[#262626] justify-evenly  bg-[#141414] text-white sticky top-0 z-50 h-21 "
      style={{
        backgroundImage: `url(${navbarImg})`,
        backgroundSize: "cover", // Make the image cover the navbar
        backgroundRepeat: "no-repeat", // Avoid repeating
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="">
        <a href="/" className="text-5xl font-semibold">
          <h1>React Shop</h1>
        </a>
      </div>

      <div className=" border-[1px] border-[#333333] bg-[#1a1a1a]  text-white   p-2 ml-10 max-w-md w-full flex justify-evenly items-center rounded-full text-xl">
        <Link className="" to={"/"}>
          Home
        </Link>

        <Link className="" to={"/products"}>
          Products
        </Link>
        <Link className="" to={"/about"}>
          About
        </Link>
        {/* <Link className="" to={"/cart"}>
          Carts
        </Link>
        <Link className="" to={"/admin"}>
          Admin
        </Link> */}
        {/* <Link className="" to={"/admin"}>
          <button type="submit" onClick={onLogout}>
            Log Out
          </button>
        </Link> */}
      </div>

      <div className="flex space-x-4 ml-10 text-xl font-semibold justify-center items-center ">
        <ReactButton>
          <LoginIcon size={20} />
          <span>
            <Link className="" to={"/login"}>
              Login
            </Link>
          </span>
        </ReactButton>
        <ReactButton>
          <SignUpIcon size={20} />
          <span>
            <Link className="" to={"/sign-up"}>
              Sign Up
            </Link>
          </span>
        </ReactButton>
        <div className="flex space-x-4">
          <ReactButton>
            <ThemeDropdownIcon />
          </ReactButton>
          <ReactButton>
            <GitHubIcon
              className="text-[#a8a196] hover:text-black dark:hover:text-white"
              href="https://github.com/Ayesha731"
            />
          </ReactButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
