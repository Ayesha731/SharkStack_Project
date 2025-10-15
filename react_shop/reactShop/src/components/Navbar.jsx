import React from "react";
import { Link } from "react-router-dom";
// import Colors from "../constant/Colors";
import navbarImg from "../assets/navbarImg.svg";
const Navbar = () => {
  const onLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("LoggedIn");
    console.log("logged out successfully");
    window.location.href = "/login";
  };
  return (
    <nav className="p-10 ">
      <div
        className="text-white flex justify-left bg-cover bg-center "
        style={{
          backgroundImage: `url(${navbarImg})`,
        }}
      >
        <a href="/" className="text-5xl font-abold">
          <h1>React Shop</h1>
        </a>

        <div className="border-2 border-gray-100 space-x-6 p-2 ml-10 bg-gray-900  text-white  flex justify-between rounded-full">
          <Link className="hover:text-blue-600 cursor-pointer" to={"/sign-up"}>
            Sign Up
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/login"}>
            Sign In
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/about"}>
            About Us
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/products"}>
            Products
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/cart"}>
            Carts
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/admin"}>
            Admin
          </Link>
          <Link className="hover:text-blue-600 cursor-pointer" to={"/admin"}>
            <button type="submit" onClick={onLogout}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
