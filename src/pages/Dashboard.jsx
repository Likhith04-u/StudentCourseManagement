
import { Link } from "react-router-dom";
import { useManagement } from "../context/ManagementContext";

export default function Dashboard() {
  const { students, courses, enrollments } = useManagement();

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      color: "primary",
      icon: "👨‍🎓",
      link: "/students",
    },
    {
      title: "Total Courses",
      value: courses.length,
      color: "success",
      icon: "📚",
      link: "/courses",
    },
    {
      title: "Enrollments",
      value: enrollments.length,
      color: "warning",
      icon: "📝",
      link: "/enrollments",
    },
  ];

  return (
    <div>
      <div className="p-4 p-md-5 mb-4 bg-primary text-white rounded-4 shadow-sm">
        <p className="text-uppercase small fw-semibold mb-2">
          Student Course Management System
        </p>
        <h1 className="fw-bold">Welcome to your Dashboard</h1>
        <p className="mb-0">
          Manage students, courses and enrollments in one place.
        </p>
      </div>

      <h4 className="fw-bold mb-3">Overview</h4>

      <div className="row g-4 mb-4">
        {stats.map((stat) => (
          <div className="col-12 col-md-4" key={stat.title}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-secondary mb-2">{stat.title}</p>
                    <h2 className="fw-bold mb-3">{stat.value}</h2>
                  </div>
                  <span className="fs-2">{stat.icon}</span>
                </div>

                <Link
                  to={stat.link}
                  className={`btn btn-outline-${stat.color} btn-sm`}
                >
                  Manage {stat.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h5 className="fw-bold mb-3">Quick Actions</h5>

          <div className="d-flex flex-wrap gap-2">
            <Link to="/students" className="btn btn-primary">
              + Add Student
            </Link>

            <Link to="/courses" className="btn btn-success">
              + Add Course
            </Link>

            <Link to="/enrollments" className="btn btn-warning">
              Enroll Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
