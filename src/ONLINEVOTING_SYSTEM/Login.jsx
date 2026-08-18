//----------------------------- JWT Token Logic Code ---------------------------

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:1111/voter/login",
        null,
        {
          params: {
            email,
            password,
          },
        }
      );

      if (res.data) {

        alert("Login Successful ✅");

        // JWT TOKEN SAVE
        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(res.data.voter)
        );

        localStorage.setItem(
          "userId",
          res.data.voter.user.userId
        );

        localStorage.setItem(
          "voterId",
          res.data.voter.voterId
        );

        localStorage.removeItem("hasVoted");

        if (
          res.data.voter.user.userRole === "ADMIN"
        ) {

          navigate("/admin");

        } else {

          navigate("/dashboard");
        }
      }

    } catch (err) {

      console.error(err);

      if (err.response?.status === 401) {

        alert("Invalid Email or Password ❌");

      } else {

        alert("Server Error ❌");
      }

    } finally {

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.resecurity.com/uploads/post/302/302.jpg?1cfc900c5c86262819dd606d26c82af9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "400px",
          backgroundColor: "rgba(255,255,255,0.92)",
          borderRadius: "15px",
        }}
      >
        <h3 className="text-center mb-4 fw-bold">
          🗳️ Online Voting Login
        </h3>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <div className="text-center mt-3">
          <a href="/register">
            Don't have an account? Register
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
