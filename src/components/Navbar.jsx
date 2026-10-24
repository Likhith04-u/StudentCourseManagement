
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Student Course Manager
        </NavLink>

        <div className="navbar-nav ms-auto flex-row flex-wrap gap-3">
          <NavLink className="nav-link" to="/">Dashboard</NavLink>
          <NavLink className="nav-link" to="/students">Students</NavLink>
          <NavLink className="nav-link" to="/courses">Courses</NavLink>
          <NavLink className="nav-link" to="/enrollments">Enrollments</NavLink>
        </div>
      </div>
    </nav>
  );
}
