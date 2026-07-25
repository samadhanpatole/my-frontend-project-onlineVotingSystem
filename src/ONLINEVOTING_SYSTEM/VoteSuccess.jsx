import { useNavigate } from "react-router-dom"

const VoteSuccess = ()=>{

    const navigate = useNavigate();

    return(
        <div
        style={{
            backgroundImage:
            "url(https://images.unsplash.com/photo-1604079628040-94301bb21b91)",
            backgroundSize : "cover",
            backgroundPosition : "center",
            minHeight : "100vh",
        }}
        className="d-flex justify-content-center align-items-center"
        >
            <div
            className="card p-5 shadow-lg text-center"
            style={{
                width : "450px",
                borderRadius : "15px",
                backgroundColor : "rgba(255,255,255,0.9)"
            }}
            >
                <h2 className="text-success mb-3"> ✅ Vote Submitted</h2>
                <p className="fw-bold">
                    Your vote has been successfully recorded.
                </p>

                <p>
                    Thank you for participating in the election 🗳️ 
                </p>
                <button
                 className="btn btn-dark mt-3"
                 onClick={() => navigate("/")}
                >
                    Go Home
                </button>

            </div>

        </div>
    );
};

export default VoteSuccess;