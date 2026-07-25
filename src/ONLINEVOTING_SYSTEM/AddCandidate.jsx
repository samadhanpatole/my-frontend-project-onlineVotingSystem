// import React, { useState } from "react";
// import axios from "axios";

// const AddCandidate = () => {

//   const [candidate, setCandidate] = useState({
//     name: "",
//     party: "",
//     symbol: "",
//     photo: ""
//   });

//   const handleChange = (e) => {
//     setCandidate({
//       ...candidate,
//       [e.target.name]: e.target.value
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   await axios.post("http://localhost:1111/api/candidate/save", candidate);

//   //   alert("Candidate Added ✅");
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   await axios.post("http://localhost:1111/candidate/save", candidate);

//   alert("Candidate Added ✅");
// };

//   return (
//     <div className="container mt-5">
//       <h3>Add Candidate</h3>

//       <form onSubmit={handleSubmit}>
//         <input name="name" className="form-control mb-2" placeholder="Candidate Name" onChange={handleChange} />
//         <input name="party" className="form-control mb-2" placeholder="Party Name" onChange={handleChange} />
//         <input name="symbol" className="form-control mb-2" placeholder="Symbol Image URL" onChange={handleChange} />
//         <input name="photo" className="form-control mb-2" placeholder="Photo URL" onChange={handleChange} />

//         <button className="btn btn-success">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddCandidate;



import React, { useState } from "react";
import axios from "axios";

const AddCandidate = () => {

  const [candidate, setCandidate] = useState({
    name: "",
    party: "",
    symbol: "",
    photo: ""
  });

  const handleChange = (e) => {

    setCandidate({
      ...candidate,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:1111/candidate/save",
      candidate
    );

    alert("Candidate Added ✅");

  };

  return (

    <div

      style={{

        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.6)
          ),

          url("https://pbs.twimg.com/profile_images/2055207225870700544/wdG5RDqX.jpg")
        `,

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        minHeight: "100vh",

        paddingTop: "50px"
      }}
    >

      <div className="container mt-5">

        <h3 className="text-white">
          Add Candidate
        </h3>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            className="form-control mb-2"
            placeholder="Candidate Name"
            onChange={handleChange}
          />

          <input
            name="party"
            className="form-control mb-2"
            placeholder="Party Name"
            onChange={handleChange}
          />

          <input
            name="symbol"
            className="form-control mb-2"
            placeholder="Symbol Image URL"
            onChange={handleChange}
          />

          <input
            name="photo"
            className="form-control mb-2"
            placeholder="Photo URL"
            onChange={handleChange}
          />

          <button className="btn btn-success">
            Add
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddCandidate;