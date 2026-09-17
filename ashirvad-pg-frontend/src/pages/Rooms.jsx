import { useEffect, useState } from "react";
import api from "../services/api";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "",
    totalBeds: "",
    availableBeds: "",
    monthlyRent: "",
  });

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const response = await api.get("/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error("Error loading rooms:", error);
    }
  };

  const handleChange = (event) => {
    setRoom({
      ...room,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/rooms", {
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        totalBeds: Number(room.totalBeds),
        availableBeds: Number(room.availableBeds),
        monthlyRent: Number(room.monthlyRent),
      });

      alert("Room added successfully");

      setRoom({
        roomNumber: "",
        roomType: "",
        totalBeds: "",
        availableBeds: "",
        monthlyRent: "",
      });

      loadRooms();
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Failed to add room");
    }
  };

  const deleteRoom = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await api.delete(`/rooms/${id}`);
      alert("Room deleted successfully");
      loadRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
      alert("Failed to delete room");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Room Management</h2>

      <div className="card p-4 mb-4">
        <h5 className="mb-3">Add New Room</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Room Number</label>
              <input
                type="text"
                name="roomNumber"
                className="form-control"
                value={room.roomNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Room Type</label>
              <select
                name="roomType"
                className="form-select"
                value={room.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
                <option value="Shared">Shared</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Total Beds</label>
              <input
                type="number"
                name="totalBeds"
                className="form-control"
                value={room.totalBeds}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Available Beds</label>
              <input
                type="number"
                name="availableBeds"
                className="form-control"
                value={room.availableBeds}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Monthly Rent</label>
              <input
                type="number"
                name="monthlyRent"
                className="form-control"
                value={room.monthlyRent}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="col-md-4 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">
                Add Room
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h5 className="mb-3">All Rooms</h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Room Number</th>
                <th>Type</th>
                <th>Total Beds</th>
                <th>Available Beds</th>
                <th>Monthly Rent</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {rooms.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">
                    No rooms found
                  </td>
                </tr>
              ) : (
                rooms.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.roomNumber}</td>
                    <td>{item.roomType}</td>
                    <td>{item.totalBeds}</td>
                    <td>{item.availableBeds}</td>
                    <td>₹{item.monthlyRent}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteRoom(item.id)}
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

export default Rooms;