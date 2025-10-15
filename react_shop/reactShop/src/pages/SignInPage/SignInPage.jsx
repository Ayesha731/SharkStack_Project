import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.access_token) {
        alert("Login successful");
        window.localStorage.setItem("token", data.access_token);
        window.localStorage.setItem("loggedIn", true);
        window.location.href = "/";
      } else {
        alert("Invalid email or password ");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="border-2 border-black p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Sign In Page</h1>

        <form onSubmit={handleSubmitFunction}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left mb-1 font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left mb-1 font-semibold"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <p className="mb-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="underline text-blue-600">
              Sign Up
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
