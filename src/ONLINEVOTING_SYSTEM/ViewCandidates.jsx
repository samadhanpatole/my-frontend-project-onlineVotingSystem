import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewCandidates = () => {

const [candidates, setCandidates] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetchCandidates();
}, []);

const fetchCandidates = async () => {

try {

  const token = localStorage.getItem("token");

  console.log("TOKEN =", token);

  const res = await axios.get(
    "http://localhost:1111/candidate/all",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  console.log("API RESPONSE =", res.data);

  setCandidates(res.data);

} catch (error) {

  console.log("FULL ERROR =", error);

  console.log("RESPONSE =", error.response);

  console.log("STATUS =", error.response?.status);

  setCandidates([]);

} finally {

  setLoading(false);

}

};

const handleDelete = async (id) => {

try {

  const token = localStorage.getItem("token");

  await axios.delete(
    `http://localhost:1111/candidate/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  alert("Candidate Deleted Successfully ✅");

  fetchCandidates();

} catch (error) {

  console.log(error);

  alert("Delete Failed ❌");

}

};

if (loading) {

return (
  <div className="container mt-5">
    <h3>Loading...</h3>
  </div>
);

}

return (

<div

style={{

backgroundImage: `
linear-gradient(
rgba(0,0,0,0.75),
rgba(0,0,0,0.75)
),

url("https://images.unsplash.com/photo-1541872705-1f73c6400ec9?q=80&w=2070&auto=format&fit=crop")
`,

backgroundSize: "cover",

backgroundPosition: "center",

backgroundRepeat: "no-repeat",

minHeight: "100vh",

width: "100%",

padding: "20px"
}}

className="container-fluid"
>

<div className="container mt-5">

  <h2 className="text-center mb-4 text-white">
    All Candidates
  </h2>

  <h5 className="text-white">
    Candidate Count : {candidates.length}
  </h5>

  <div className="row">

    {candidates.map((c) => (

      <div
        className="col-md-4 mb-4"
        key={c.id}
      >

        <div className="card shadow">

          <img
            src={c.photo}
            alt={c.name}
            className="card-img-top"
            style={{
              height: "220px",
              objectFit: "cover"
            }}
          />

          <div className="card-body text-center">

            <h5>{c.name}</h5>

            <p>
              <strong>Party:</strong> {c.party}
            </p>

            <img
              src={c.symbol}
              alt="symbol"
              style={{
                width: "80px",
                height: "80px"
              }}
            />

            <br /><br />

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(c.id)}
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

</div>

);
};

export default ViewCandidates;
