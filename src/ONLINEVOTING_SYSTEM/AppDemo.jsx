import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AddCandidate from "./AddCandidate";
import ViewCandidates from "./ViewCandidates";

import VoteSuccess from "./VoteSuccess";
import Results from "./Results";
import ViewVoters from "./ViewVoters";

function AppDemo() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/add-candidate" element={<AddCandidate />} />
        <Route path="/admin/candidates" element={<ViewCandidates />} />

        {/* Admin Results */}
        <Route path="/admin/results" element={<Results />} />

        <Route path="/admin/voters" element={<ViewVoters />} />

        <Route path="/vote-success" element={<VoteSuccess />} />

        {/* Voter Results */}
        <Route path="/result" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default AppDemo;