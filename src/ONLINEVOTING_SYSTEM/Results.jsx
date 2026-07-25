import React, { useEffect, useState } from "react";
import axios from "axios";

const Results = () => {

  const [results, setResults] = useState([]);
  const [resultPublished, setResultPublished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {

    try {

      const statusRes = await axios.get(
        "http://localhost:1111/api/election/status"
      );

      console.log("STATUS =", statusRes.data);

      if (statusRes.data.resultPublished) {

        setResultPublished(true);

        const resultRes = await axios.get(
          "http://localhost:1111/candidate/results"
        );

        console.log("RESULT DATA =", resultRes.data);

        setResults(resultRes.data);

      }

      setLoading(false);

    } catch (error) {

      console.error(error);

      setLoading(false);

    }
  };

  if (loading) {

    return (

      <div className="container mt-5 text-center">

        <h2>Loading...</h2>

      </div>
    );
  }

  if (!resultPublished) {

    return (

      <div
        style={{

          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.7)
            ),

            url("https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop")
          `,

          backgroundSize: "cover",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",

          minHeight: "100vh",

          paddingTop: "100px"
        }}
      >

        <div className="container mt-5 text-center">

          <h2 className="text-white">
            ⏳ Results Not Published Yet
          </h2>

        </div>

      </div>
    );
  }

  return (

    <div

      style={{

        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.7)
          ),

          url("https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop")
        `,

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        minHeight: "100vh",

        paddingTop: "50px"
      }}
    >

      <div className="container mt-5">

        <h1 className="text-center text-white">

          RESULT PAGE OPENED ✅

        </h1>

        <h3 className="text-center mb-4 text-white">

          Total Candidates: {results.length}

        </h3>

        <table className="table table-bordered bg-white">

          <thead>

            <tr>

              <th>Name</th>

              <th>Party</th>

              <th>Votes</th>

            </tr>

          </thead>

          <tbody>

            {results.map((c) => (

              <tr key={c.id}>

                <td>{c.name}</td>

                <td>{c.party}</td>

                <td>{c.voteCount}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Results;