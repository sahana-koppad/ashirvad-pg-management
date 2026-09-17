import { useEffect, useState } from "react";
import api from "../services/api";

function Complaints() {
  const [complaints, setComplaints] = useState([]);

  const [complaint, setComplaint] = useState({
    residentName: "",
    title: "",
    description: "",
    priority: "MEDIUM",
  });

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      const response = await api.get("/complaints");
      setComplaints(response.data);
    } catch (error) {
      console.error("Error loading complaints:", error);
    }
  };

  const handleChange = (event) => {
    setComplaint({
      ...complaint,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/complaints", complaint);

      alert("Complaint added successfully");

      setComplaint({
        residentName: "",
        title: "",
        description: "",
        priority: "MEDIUM",
      });

      loadComplaints();
    } catch (error) {
      console.error("Error adding complaint:", error);
      alert("Failed to add complaint");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const selectedComplaint = complaints.find(
        (item) => item.id === id
      );

      await api.put(`/complaints/${id}`, {
        ...selectedComplaint,
        status: status,
      });

      alert("Complaint status updated");
      loadComplaints();
    } catch (error) {
      console.error("Error updating complaint:", error);
      alert("Failed to update complaint");
    }
  };

  const deleteComplaint = async (id) => {
    if (!window.confirm("Are you sure you want to delete this complaint?")) {
      return;
    }

    try {
      await api.delete(`/complaints/${id}`);
      alert("Complaint deleted successfully");
      loadComplaints();
    } catch (error) {
      console.error("Error deleting complaint:", error);
      alert("Failed to delete complaint");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Complaint Management</h2>

      <div className="card p-4 mb-4">
        <h5 className="mb-3">Add Complaint</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Resident Name</label>
              <input
                type="text"
                name="residentName"
                className="form-control"
                value={complaint.residentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={complaint.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Priority</label>
              <select
                name="priority"
                className="form-select"
                value={complaint.priority}
                onChange={handleChange}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={complaint.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100">
                Add Complaint
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h5 className="mb-3">All Complaints</h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Resident</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {complaints.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    No complaints found
                  </td>
                </tr>
              ) : (
                complaints.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.residentName}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "RESOLVED"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.priority}</td>
                    <td>{item.createdDate}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() =>
                            updateStatus(item.id, "RESOLVED")
                          }
                        >
                          Resolve
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteComplaint(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Complaints;