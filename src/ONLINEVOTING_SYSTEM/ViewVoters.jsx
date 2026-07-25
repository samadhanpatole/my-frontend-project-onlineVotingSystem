import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewVoters = () => {

    const [voters, setVoters] = useState([]);

    useEffect(() => {
        fetchVoters();
    }, []);

    const fetchVoters = async () => {

        try {

            const response = await axios.get(
                "http://localhost:1111/voter/all"
            );

            setVoters(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div
            style={{

                backgroundImage: `
                    linear-gradient(
                        rgba(0,0,0,0.75),
                        rgba(0,0,0,0.75)
                    ),

                    url("https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070&auto=format&fit=crop")
                `,

                backgroundSize: "cover",

                backgroundPosition: "center",

                backgroundRepeat: "no-repeat",

                minHeight: "100vh",

                width: "100%",

                padding: "40px 20px",
            }}
        >

            <div
                className="container"
                style={{

                    background:
                        "rgba(255,255,255,0.12)",

                    borderRadius: "25px",

                    padding: "30px",

                    backdropFilter: "blur(12px)",

                    WebkitBackdropFilter:
                        "blur(12px)",

                    border:
                        "1px solid rgba(255,255,255,0.2)",

                    boxShadow:
                        "0 8px 32px rgba(0,0,0,0.4)",
                }}
            >

                <h2
                    className="text-center mb-4 fw-bold"
                    style={{

                        color: "#ffffff",

                        textShadow:
                            "2px 2px 6px black",

                        letterSpacing: "1px",

                        fontSize: "38px",
                    }}
                >

                    🗳️ Registered Voters List

                </h2>

                <div className="table-responsive">

                    <table
                        className="table table-bordered table-hover"
                        style={{

                            background:
                                "rgba(255,255,255,0.92)",

                            borderRadius: "15px",

                            overflow: "hidden",
                        }}
                    >

                        <thead
                            style={{

                                background:
                                    "linear-gradient(to right, #FF9933, #FFFFFF, #138808)",

                                color: "black",

                                fontWeight: "bold",

                                textAlign: "center",
                            }}
                        >

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th>Email</th>

                                <th>Mobile</th>

                                <th>City</th>

                                <th>State</th>

                                <th>Voted</th>

                            </tr>

                        </thead>

                        <tbody>

                            {voters.map((voter, index) => (

                                <tr
                                    key={index}
                                    style={{
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                    }}
                                >

                                    <td>{voter.voterId}</td>

                                    <td>
                                        {voter.user.userName}
                                    </td>

                                    <td>
                                        {voter.user.userEmail}
                                    </td>

                                    <td>
                                        {voter.mobileNumber}
                                    </td>

                                    <td>{voter.city}</td>

                                    <td>{voter.state}</td>

                                    <td
                                        className="fw-bold"
                                        style={{
                                            color:
                                                voter.hasVoted
                                                    ? "green"
                                                    : "red",

                                            fontSize: "16px",
                                        }}
                                    >

                                        {voter.hasVoted
                                            ? "✅ Yes"
                                            : "❌ No"}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default ViewVoters;