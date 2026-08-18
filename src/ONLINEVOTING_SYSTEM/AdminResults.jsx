import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminResults = () => {
  const [candidates, setCandidates] = useState([]);
  const [resultPublished, setResultPublished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1111/api/election/status"
      );

      if (res.data.resultPublished) {
        setResultPublished(true);
        fetchCandidates();
      } else {
        setResultPublished(false);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1111/candidate/all"
      );

      setCandidates(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const winner =
    candidates.length > 0
      ? candidates.reduce((prev, current) =>
          (prev.voteCount || 0) >
          (current.voteCount || 0)
            ? prev
            : current
        )
      : null;

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!resultPublished) {
    return (
      <div className="text-center mt-5">
        <h2>⏳ Results Not Published Yet</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Election Results 🏆
      </h2>

      {winner && (
        <div className="alert alert-success text-center">
          🏆 Winner: <b>{winner.name}</b>
          <br />
          Votes: {winner.voteCount}
        </div>
      )}

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Total Votes</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c) => (
            <tr
              key={c.id}
              className={
                winner && winner.id === c.id
                  ? "table-success"
                  : ""
              }
            >
              <td>{c.name}</td>
              <td>{c.party}</td>
              <td>{c.voteCount || 0}</td>
              <td>
                {winner && winner.id === c.id
                  ? "🏆 Winner"
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminResults;
