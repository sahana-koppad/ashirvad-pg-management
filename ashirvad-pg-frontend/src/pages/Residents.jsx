import { useEffect, useState } from "react";
import api from "../services/api";

function Residents() {
  const [residents, setResidents] = useState([]);

  const [resident, setResident] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    roomNumber: "",
    monthlyRent: "",
    paymentStatus: "PENDING",
  });

  useEffect(() => {
    loadResidents();
  }, []);

  const loadResidents = async () => {
    try {
      const response = await api.get("/residents");
      setResidents(response.data);
    } catch (error) {
      console.error("Error loading residents:", error);
    }
  };

  const handleChange = (event) => {
    setResident({
      ...resident,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/residents", {
        ...resident,
        monthlyRent: Number(resident.monthlyRent),
      });

      alert("Resident added successfully");

      setResident({
        name: "",
        phoneNumber: "",
        email: "",
        roomNumber: "",
        monthlyRent: "",
        paymentStatus: "PENDING",
      });

      loadResidents();
    } catch (error) {
      console.error("Error adding resident:", error);
      alert("Failed to add resident");
    }
  };

  const deleteResident = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resident?")) {
      return;
    }

    try {
      await api.delete(`/residents/${id}`);
      alert("Resident deleted successfully");
      loadResidents();
    } catch (error) {
      console.error("Error deleting resident:", error);
      alert("Failed to delete resident");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Resident Management</h2>

      <div className="card p-4 mb-4">
        <h5 className="mb-3">Add New Resident</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={resident.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                value={resident.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={resident.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Room Number</label>
              <input
                type="text"
                name="roomNumber"
                className="form-control"
                value={resident.roomNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Monthly Rent</label>
              <input
                type="number"
                name="monthlyRent"
                className="form-control"
                value={resident.monthlyRent}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Payment Status</label>
              <select
                name="paymentStatus"
                className="form-select"
                value={resident.paymentStatus}
                onChange={handleChange}
              >
                <option value="PENDING">Pending</option>
                <option value="PAID">Paid</option>
              </select>
            </div>

            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100">
                Add Resident
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h5 className="mb-3">All Residents</h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Room</th>
                <th>Rent</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {residents.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    No residents found
                  </td>
                </tr>
              ) : (
                residents.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.roomNumber}</td>
                    <td>₹{item.monthlyRent}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.paymentStatus === "PAID"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {item.paymentStatus || "PENDING"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteResident(item.id)}
                      >
                        Delete
                      </button>
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

export default Residents;