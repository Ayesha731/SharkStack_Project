import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitFunction = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        email,
        password,
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <div className="border-2 border-black p-4 rounded-lg shadow-md w-120 text-center">
        <h1 className="text-xl font-bold "> Sign Up Page</h1>
        <select name="role" id="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <form onSubmit={handleSubmitFunction}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-left mb-1 font-semibold"
            >
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-left mb-1 font-semibold"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-left mb-1 font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Password"
              className="block text-left mb-1 font-semibold"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-left mb-1 font-semibold"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className="border-2 border-gray-400 p-2 rounded w-full"
              required
            />
          </div>

          <p>
            Aleady Have your Account?
            <span className="underline ">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
