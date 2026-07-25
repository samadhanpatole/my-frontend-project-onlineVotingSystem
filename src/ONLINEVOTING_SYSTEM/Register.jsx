import React, { useState } from "react";
import axios from "axios";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();
    try {

    const response = await axios.post(
        "http://localhost:1111/voter/register",
        {

          voterIdNumber:
            "VOTER" + Math.floor(Math.random() * 10000),

          mobileNumber: mobile,

          dateOfBirth: dob,

          gender: gender,

          aadhaarNumber: aadhaar,

          address: address,

          state: state,

          city: city,

          pincode: pincode,

          user: {

            userName: name,

            userEmail: email,

            userRole: "VOTER",

            status: "ACTIVE",
          },
        }
      );

      console.log("Response:", response);

      alert(
        "Registration Successful ✅\nPassword Sent To Your Email"
      );

    } catch (error) {

      console.log("Error:", error);

      alert("Registration Failed ❌");
    }
  };

  return (

    <div
      style={{
        backgroundImage:
          "url(https://image-optimizer.cyberriskalliance.com/unsafe/1920x0/https://files.cyberriskalliance.com/wp-content/uploads/2024/05/052124_india_flag.jpg)",

        backgroundSize: "cover",

        backgroundPosition: "center",

        minHeight: "100vh",

        padding: "30px",
      }}

      className="d-flex justify-content-center align-items-center"
    >

      <div
        className="card p-5 shadow-lg"

        style={{
          width: "900px",

          backgroundColor:
            "rgba(255,255,255,0.92)",

          borderRadius: "20px",

          backdropFilter: "blur(8px)",

          boxShadow:
            "0 0 25px rgba(0,0,0,0.3)",
        }}
      >

        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "green" }}
        >
          🗳️ National Online Voting Registration
        </h2>

        <form onSubmit={handleRegister}>

          <div className="row">

            {/* NAME */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                👤 Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>

            {/* EMAIL */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                📧 Email
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

            {/* MOBILE */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                📱 Mobile Number
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
                required
              />

            </div>

            {/* DOB */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🎂 Date Of Birth
              </label>

              <input
                type="date"
                className="form-control"
                value={dob}
                onChange={(e) =>
                  setDob(e.target.value)
                }
                required
              />

            </div>

            {/* GENDER */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🚻 Gender
              </label>

              <select
                className="form-control"
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                required
              >

                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            {/* AADHAAR */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🪪 Aadhaar Number
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Aadhaar Number"
                value={aadhaar}
                onChange={(e) =>
                  setAadhaar(e.target.value)
                }
                required
              />

            </div>

            {/* STATE */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🌏 State
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter State"
                value={state}
                onChange={(e) =>
                  setState(e.target.value)
                }
                required
              />

            </div>

            {/* CITY */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🏙️ City
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
                required
              />

            </div>

            {/* PINCODE */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                📮 Pincode
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value)
                }
                required
              />

            </div>

            {/* ADDRESS */}

            <div className="col-md-6 mb-3">

              <label className="form-label fw-bold">
                🏠 Address
              </label>

              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Full Address"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="btn btn-success w-100 mt-3 fw-bold"
            style={{
              height: "50px",
              fontSize: "18px",
              borderRadius: "10px",
            }}
          >

            ✅ Register Now

          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;