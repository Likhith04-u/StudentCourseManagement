
import { useState } from "react";

export default function CourseList({ courses, onDeleteCourse }) {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    `${course.name} ${course.code}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <h5 className="fw-bold mb-0">Available Courses</h5>
          <span className="badge text-bg-success">
            {filteredCourses.length} of {courses.length} Courses
          </span>
        </div>

        <input
          className="form-control mb-3"
          type="search"
          placeholder="Search by course name or code..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search courses"
        />

        {filteredCourses.length === 0 ? (
          <p className="text-secondary mb-0">
            No matching courses found.
          </p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Course Name</th>
                  <th>Course Code</th>
                  <th>Credits</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td className="fw-semibold">{course.name}</td>
                    <td>
                      <span className="badge text-bg-light border">
                        {course.code}
                      </span>
                    </td>
                    <td>{course.credits}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDeleteCourse(course.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
