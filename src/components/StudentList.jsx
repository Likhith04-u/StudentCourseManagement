
import { useState } from "react";

export default function StudentList({ students, onDeleteStudent }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <h5 className="fw-bold mb-0">Student Records</h5>

          <span className="badge text-bg-primary">
            {filteredStudents.length} of {students.length} Students
          </span>
        </div>

        <input
          className="form-control mb-3"
          type="search"
          placeholder="Search by name, email or department..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search students"
        />

        {filteredStudents.length === 0 ? (
          <p className="text-secondary mb-0">
            No matching students found.
          </p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="fw-semibold">{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <span className="badge text-bg-light border">
                        {student.department}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDeleteStudent(student.id)}
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
