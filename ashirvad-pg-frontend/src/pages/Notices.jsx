import { useEffect, useState } from "react";
import api from "../services/api";

function Notices() {
  const [notices, setNotices] = useState([]);

  const [notice, setNotice] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    try {
      const response = await api.get("/notices");
      setNotices(response.data);
    } catch (error) {
      console.error("Error loading notices:", error);
    }
  };

  const handleChange = (event) => {
    setNotice({
      ...notice,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post("/notices", notice);

      alert("Notice added successfully");

      setNotice({
        title: "",
        message: "",
      });

      loadNotices();
    } catch (error) {
      console.error("Error adding notice:", error);
      alert("Failed to add notice");
    }
  };

  const deleteNotice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) {
      return;
    }

    try {
      await api.delete(`/notices/${id}`);
      alert("Notice deleted successfully");
      loadNotices();
    } catch (error) {
      console.error("Error deleting notice:", error);
      alert("Failed to delete notice");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Notice Management</h2>

      <div className="card p-4 mb-4">
        <h5 className="mb-3">Create Notice</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label">Notice Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={notice.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-7">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="2"
                value={notice.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100">
                Add Notice
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h5 className="mb-3">All Notices</h5>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Message</th>
                <th>Notice Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {notices.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No notices found
                  </td>
                </tr>
              ) : (
                notices.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.message}</td>
                    <td>{item.noticeDate}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteNotice(item.id)}
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

export default Notices;