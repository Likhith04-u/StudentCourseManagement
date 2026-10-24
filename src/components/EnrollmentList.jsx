
export default function EnrollmentList({
  enrollments,
  students,
  courses,
}) {
  function getStudent(id) {
    return students.find((student) => student.id === id);
  }

  function getCourse(id) {
    return courses.find((course) => course.id === id);
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Enrollment Records</h5>
          <span className="badge text-bg-primary">
            {enrollments.length} Enrollments
          </span>
        </div>

        {enrollments.length === 0 ? (
          <p className="text-secondary mb-0">
            No enrollments yet. Use the form above to enroll a student.
          </p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Student</th>
                  <th>Department</th>
                  <th>Course</th>
                  <th>Course Code</th>
                  <th>Credits</th>
                </tr>
              </thead>

              <tbody>
                {enrollments.map((enrollment) => {
                  const student = getStudent(enrollment.studentId);
                  const course = getCourse(enrollment.courseId);

                  if (!student || !course) return null;

                  return (
                    <tr key={enrollment.id}>
                      <td className="fw-semibold">{student.name}</td>
                      <td>{student.department}</td>
                      <td>{course.name}</td>
                      <td>{course.code}</td>
                      <td>{course.credits}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
