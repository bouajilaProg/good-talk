import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = React.useState<loginData>({
    email: "",
    password: "",
  });

  function login() {
    const navigator = useNavigate();

    //check if email and password are not empty
    if (loginData.email === "" || loginData.password === "") {
      alert("Please fill out all fields");
      return;
    }

    //check if email is valid
    if (!loginData.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    //check if password is not empty
    if (loginData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    //send login request
    axios
      .post("http://localhost:3000/login", loginData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", res.data.user);
        window.location.href = "/friends";
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid email or password");
        setLoginData({ ...loginData, password: "" });
      });

    navigator("/friends");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              login();
              console.log(loginData);
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <Link to={"/Register"} className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
