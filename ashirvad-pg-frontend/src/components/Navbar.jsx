import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <span className="navbar-brand mb-0 h1">
        Ashirvad PG Management
      </span>

      <div className="d-flex align-items-center gap-3">
        <span className="text-white">Admin Panel</span>

        <button
          className="btn btn-light btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;