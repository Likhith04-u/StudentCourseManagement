
import { useState } from "react";

export default function CourseForm({ onAddCourse }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    credits: "3",
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

    if (!form.name.trim() || !form.code.trim()) {
      setError("Please enter both the course name and course code.");
      return;
    }

    onAddCourse({
      name: form.name.trim(),
      code: form.code.trim().toUpperCase(),
      credits: Number(form.credits),
    });

    setForm({ name: "", code: "", credits: "3" });
    setError("");
  }

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3">Add New Course</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label">Course Name</label>
              <input
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Web Development"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Course Code</label>
              <input
                className="form-control"
                name="code"
                value={form.code}
                onChange={handleChange}
                placeholder="e.g. MCA303"
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Credits</label>
              <select
                className="form-select"
                name="credits"
                value={form.credits}
                onChange={handleChange}
              >
                <option value="1">1 Credit</option>
                <option value="2">2 Credits</option>
                <option value="3">3 Credits</option>
                <option value="4">4 Credits</option>
                <option value="5">5 Credits</option>
                <option value="6">6 Credits</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger mt-3 mb-0">
              {error}
            </div>
          )}

          <button className="btn btn-primary mt-3" type="submit">
            + Add Course
          </button>
        </form>
      </div>
    </div>
  );
}
