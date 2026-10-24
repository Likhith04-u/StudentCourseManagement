
import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "MCA",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter the student name and email.");
      return;
    }

    onAddStudent({
      name: form.name.trim(),
      email: form.email.trim(),
      department: form.department,
    });

    setForm({
      name: "",
      email: "",
      department: "MCA",
    });

    setError("");
  }

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3">Register New Student</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Student Name</label>
              <input
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email Address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                name="department"
                value={form.department}
                onChange={handleChange}
              >
                <option value="MCA">MCA</option>
                <option value="CSE">Computer Science</option>
                <option value="ISE">Information Science</option>
                <option value="ECE">Electronics</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger mt-3 mb-0">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary mt-3">
            + Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
