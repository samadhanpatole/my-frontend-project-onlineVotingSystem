// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {

//   const [candidates, setCandidates] = useState([]);
//   const [voted, setVoted] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCandidates();

//     const hasVoted = localStorage.getItem("hasVoted");
//     if (hasVoted === "true") {
//       setVoted(true);
//     }

//   }, []);

//   const fetchCandidates = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/candidate/all");
//       setCandidates(res.data);
//     } catch (error) {
//       console.error("Error fetching candidates:", error);
//     }
//   };

//   const handleVote = async (candidateId) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:1111/vote/cast/${candidateId}`
//       );

//       alert(res.data);

//       localStorage.setItem("hasVoted", "true");
//       setVoted(true);

//       navigate("/vote-success");

//     } catch (error) {

//       alert("You have already voted ❌");

//       localStorage.setItem("hasVoted", "true");
//       setVoted(true);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 text-center">Vote Your Candidate 🗳️</h2>

//       <div className="row">
//         {candidates.map((c) => (
//           <div className="col-md-4 mb-4" key={c.id}>
//             <div className="card shadow">

//               <img
//                 src={c.photo}
//                 className="card-img-top"
//                 alt="Candidate"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />

//               <div className="card-body text-center">
//                 <h5>{c.name}</h5>
//                 <p>{c.party}</p>

//                 <img
//                   src={c.symbol}
//                   alt="Symbol"
//                   style={{ width: "60px" }}
//                 />

//                 <br /><br />

//                 {!voted ? (
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleVote(c.id)}
//                   >
//                     Vote
//                   </button>
//                 ) : (
//                   <button className="btn btn-secondary" disabled>
//                     Already Voted 🗳️
//                   </button>
//                 )}

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [candidates, setCandidates] = useState([]);
  const [voted, setVoted] = useState(false);

  const navigate = useNavigate();
  const voterId = localStorage.getItem("voterId");

  useEffect(() => {

    fetchCandidates();

    const hasVoted = localStorage.getItem("hasVoted");

    if (hasVoted === "true") {

      setVoted(true);

    }

  }, []);

  const fetchCandidates = async () => {

    try {

      const res = await axios.get(
        "http://localhost:1111/candidate/all"
      );

      setCandidates(res.data);

    } catch (error) {

      console.error(
        "Error fetching candidates:",
        error
      );

    }
  };

  const handleVote = async (candidateId) => {

    try {
      const res = await axios.post(
        `http://localhost:1111/vote/cast/${candidateId}/${voterId}`
      );

      if (res.data === "Already Voted") {

        alert("You have already voted ❌");

        setVoted(true);

        return;
      }

      alert(res.data);

      localStorage.setItem("hasVoted", "true");

      setVoted(true);

      navigate("/vote-success");

    } catch (error) {

      alert("You have already voted ❌");

      localStorage.setItem(
        "hasVoted",
        "true"
      );

      setVoted(true);

    }
  };

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">

        🗳️ Vote Your Candidate

      </h2>

      <div className="row">

        {candidates.map((c) => (

          <div
            className="col-md-4 mb-4"
            key={c.id}
          >

            <div className="card shadow">

              <img
                src={c.photo}
                className="card-img-top"
                alt="Candidate"
                style={{
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">

                <h4>{c.name}</h4>

                <p>{c.party}</p>

                <img
                  src={c.symbol}
                  alt="Symbol"
                  style={{ width: "70px" }}
                />

                <br />
                <br />

                {!voted ? (

                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleVote(c.id)
                    }
                  >

                    Vote

                  </button>

                ) : (

                  <button
                    className="btn btn-secondary"
                    disabled
                  >

                    Already Voted 🗳️

                  </button>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;