
import { useState } from "react";

export default function EnrollmentForm({
  students,
  courses,
  onAddEnrollment,
}) {
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!studentId || !courseId) {
      setMessage("Please select both a student and a course.");
      return;
    }

    const success = onAddEnrollment(studentId, courseId);

    if (!success) {
      setMessage("This student is already enrolled in this course.");
      return;
    }

    setMessage("Student enrolled successfully!");
    setStudentId("");
    setCourseId("");
  }

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3">Enroll Student in a Course</h5>

        {students.length === 0 || courses.length === 0 ? (
          <div className="alert alert-warning mb-0">
            Please add at least one student and one course before enrolling.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-5">
                <label className="form-label">Select Student</label>
                <select
                  className="form-select"
                  value={studentId}
                  onChange={(event) => setStudentId(event.target.value)}
                  required
                >
                  <option value="">Choose a student</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.department})
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-5">
                <label className="form-label">Select Course</label>
                <select
                  className="form-select"
                  value={courseId}
                  onChange={(event) => setCourseId(event.target.value)}
                  required
                >
                  <option value="">Choose a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name} ({course.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2 d-flex align-items-end">
                <button className="btn btn-primary w-100" type="submit">
                  Enroll
                </button>
              </div>
            </div>

            {message && (
              <div
                className={`alert ${
                  message.includes("successfully")
                    ? "alert-success"
                    : "alert-warning"
                } mt-3 mb-0`}
              >
                {message}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
