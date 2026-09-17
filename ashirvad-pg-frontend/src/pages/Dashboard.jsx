import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [summary, setSummary] = useState({
    totalRooms: 0,
    totalResidents: 0,
    totalComplaints: 0,
    totalNotices: 0,
    openComplaints: 0,
    totalBeds: 0,
    occupiedBeds: 0,
    availableBeds: 0,
    occupancyPercentage: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await api.get("/dashboard/summary");
      setSummary(response.data);
    } catch (error) {
      console.error("Error loading dashboard:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="dashboard-card bg-primary text-white">
            <h6>Total Rooms</h6>
            <h2>{summary.totalRooms}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card bg-success text-white">
            <h6>Total Residents</h6>
            <h2>{summary.totalResidents}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card bg-warning text-dark">
            <h6>Total Complaints</h6>
            <h2>{summary.totalComplaints}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card bg-info text-dark">
            <h6>Total Notices</h6>
            <h2>{summary.totalNotices}</h2>
          </div>
        </div>
      </div>

      <div className="card mt-4 p-4">
        <h5>Bed Occupancy</h5>

        <div className="progress mt-3" style={{ height: "25px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${summary.occupancyPercentage}%` }}
          >
            {summary.occupancyPercentage.toFixed(1)}%
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <strong>Total Beds:</strong> {summary.totalBeds}
          </div>

          <div className="col-md-4">
            <strong>Occupied Beds:</strong> {summary.occupiedBeds}
          </div>

          <div className="col-md-4">
            <strong>Available Beds:</strong> {summary.availableBeds}
          </div>
        </div>
      </div>

      <div className="card mt-4 p-4">
        <h5>Complaint Summary</h5>
        <p className="mb-0">
          Open Complaints: <strong>{summary.openComplaints}</strong>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;