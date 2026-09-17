import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <h5 className="mb-4">Menu</h5>

      <NavLink to="/" className="sidebar-link">
        Dashboard
      </NavLink>

      <NavLink to="/rooms" className="sidebar-link">
        Rooms
      </NavLink>

      <NavLink to="/residents" className="sidebar-link">
        Residents
      </NavLink>

      <NavLink to="/complaints" className="sidebar-link">
        Complaints
      </NavLink>

      <NavLink to="/notices" className="sidebar-link">
        Notices
      </NavLink>
    </div>
  );
}

export default Sidebar;