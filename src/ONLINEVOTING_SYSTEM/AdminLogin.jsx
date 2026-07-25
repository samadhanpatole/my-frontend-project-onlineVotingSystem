// const { useState } = require("react");
// const { useNavigate } = require("react-router-dom");

// const AdminLogin =()=>{

//     const [password,setpassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = (e) =>{
//        e.preventDefault();

//        if(password === "admin123"){
//         localStorage.setItem("admin","true");
//         navigate("/admin/dashboard");
//        }
//        else{
//         alert("Wrong Admin Password ❌");
//        }

//     };
//     return(
//         <div className="container mt-5">
//             <h3>Admin Login</h3>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="password"
//                     className="from-control mb-3"
//                     placeholder="Enter Admin Password."
//                     onChange={(e) => setpassword(e.target.value)}/>
//                     <button className="btn btn-dark">Login</button>
//             </form>

//         </div>
//     );
// };
// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Sam" && password === "2210") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url('https://www.tristardes.com/wp-content/uploads/2023/05/softwareindustires.jpg')",
        backgroundSize: "cover",
        
        backgroundPosition: "center",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4">🤓 Admin Panel</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button className="btn btn-dark w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

