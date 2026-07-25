// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {

//   const navigate = useNavigate();

//   const startElection = async () => {

//     try {

//       await fetch(
//         "http://localhost:1111/api/election/open",
//         {
//           method: "POST"
//         }
//       );

//       alert("Election Started Successfully ✅");

//     } catch (error) {

//       alert("Error Starting Election ❌");

//     }
//   };

//   const stopElection = async () => {

//     try {

//       await fetch(
//         "http://localhost:1111/api/election/close",
//         {
//           method: "POST"
//         }
//       );

//       alert("Election Closed Successfully ❌");

//     } catch (error) {

//       alert("Error Closing Election ❌");

//     }
//   };

//   return (

//     <div
//       style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >

//       <div className="container py-5">

//         <div className="text-center text-white mb-5">

//           <h1 className="fw-bold">
//             Admin Dashboard
//           </h1>

//           <p>
//             <b>
//               Manage Candidates & Control Voting System
//             </b>
//           </p>

//         </div>

//         <div className="row justify-content-center">

//           {/* ADD CANDIDATE */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>➕ Add Candidate</h4>

//               <p>
//                 Add new candidates for voting
//               </p>

//               <button
//                 className="btn btn-dark"
//                 onClick={() =>
//                   navigate("/admin/add-candidate")
//                 }
//               >
//                 Go
//               </button>

//             </div>

//           </div>

//           {/* VIEW CANDIDATES */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>📋 View Candidates</h4>

//               <p>
//                 See all registered candidates
//               </p>

//               <button
//                 className="btn btn-primary"
//                 onClick={() =>
//                   navigate("/admin/candidates")
//                 }
//               >
//                 View
//               </button>

//             </div>

//           </div>

//           {/* RESULTS */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>📊 View Results</h4>

//               <p>
//                 Check voting results
//               </p>

//               <button
//                 className="btn btn-success"
//                 onClick={() =>
//                   navigate("/admin/results")
//                 }
//               >
//                 Results
//               </button>

//             </div>

//           </div>

//           {/* VOTERS */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>👥 Registered Voters</h4>

//               <p>
//                 See all voter registrations
//               </p>

//               <button
//                 className="btn btn-warning"
//                 onClick={() =>
//                   navigate("/admin/voters")
//                 }
//               >
//                 View Voters
//               </button>

//             </div>

//           </div>

//           {/* START ELECTION */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>🟢 Start Election</h4>

//               <p>
//                 Open voting for all voters
//               </p>

//               <button
//                 className="btn btn-success"
//                 onClick={startElection}
//               >
//                 Start
//               </button>

//             </div>

//           </div>

//           {/* STOP ELECTION */}

//           <div className="col-md-4 mb-4">

//             <div className="card shadow-lg text-center p-4">

//               <h4>🔴 Stop Election</h4>

//               <p>
//                 Close voting process
//               </p>

//               <button
//                 className="btn btn-danger"
//                 onClick={stopElection}
//               >
//                 Stop
//               </button>

//             </div>

//           </div>
          

//         </div>

//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;



import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

const navigate = useNavigate();

const startElection = async () => {


try {

  await fetch(
    "http://localhost:1111/api/election/open",
    {
      method: "POST"
    }
  );

  alert("Election Started Successfully ✅");

} catch (error) {

  alert("Error Starting Election ❌");

}


};

const stopElection = async () => {


try {

  await fetch(
    "http://localhost:1111/api/election/close",
    {
      method: "POST"
    }
  );

  alert("Election Closed Successfully ❌");

} catch (error) {

  alert("Error Closing Election ❌");

}


};

// const publishResult = async () => {


// try {

//   await fetch(
//     "http://localhost:1111/election/publish",
//     {
//       method: "POST"
//     }
//   );

//   alert("Result Published Successfully 🏆");

// } catch (error) {

//   alert("Error Publishing Result ❌");

//         } 

//           };


const publishResult = async () => {
  try {
    const response = await fetch(
      "http://localhost:1111/api/election/publish",
      {
        method: "POST",
      }
    );

    if (response.ok) {
      alert("Result Published Successfully 🏆");
    } else {
      alert("Failed To Publish Result ❌");
    }
  } catch (error) {
    console.error(error);
    alert("Error Publishing Result ❌");
  }
};

return (

<div
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }}
>

  <div className="container py-5">

    <div className="text-center text-white mb-5">

      <h1 className="fw-bold">
        Admin Dashboard
      </h1>

      <p>
        <b>
          Manage Candidates & Control Voting System
        </b>
      </p>

    </div>

    <div className="row justify-content-center">

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>➕ Add Candidate</h4>
          <p>Add new candidates for voting</p>
          <button
            className="btn btn-dark"
            onClick={() =>
              navigate("/admin/add-candidate")
            }
          >
            Go
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>📋 View Candidates</h4>
          <p>See all registered candidates</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate("/admin/candidates")
            }
          >
            View
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>📊 View Results</h4>
          <p>Check voting results</p>
          <button
            className="btn btn-success"
            onClick={() =>
              navigate("/admin/results")
            }
          >
            Results
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>👥 Registered Voters</h4>
          <p>See all voter registrations</p>
          <button
            className="btn btn-warning"
            onClick={() =>
              navigate("/admin/voters")
            }
          >
            View Voters
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>🟢 Start Election</h4>
          <p>Open voting for all voters</p>
          <button
            className="btn btn-success"
            onClick={startElection}
          >
            Start
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>🔴 Stop Election</h4>
          <p>Close voting process</p>
          <button
            className="btn btn-danger"
            onClick={stopElection}
          >
            Stop
          </button>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-lg text-center p-4">
          <h4>🏆 Publish Result</h4>
          <p>Publish election result for all voters</p>
          <button
            className="btn btn-info"
            onClick={publishResult}
          >
            Publish
          </button>
        </div>
      </div>

    </div>

  </div>

</div>


);
};

export default AdminDashboard;
