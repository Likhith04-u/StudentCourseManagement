
import EnrollmentForm from "../components/EnrollmentForm";
import EnrollmentList from "../components/EnrollmentList";
import { useManagement } from "../context/ManagementContext";

export default function Enrollments() {
  const { students, courses, enrollments, addEnrollment } =
    useManagement();

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Enrollment Management</h2>
        <p className="text-secondary">
          Assign students to courses and view enrollment records.
        </p>
      </div>

      <EnrollmentForm
        students={students}
        courses={courses}
        onAddEnrollment={addEnrollment}
      />

      <EnrollmentList
        enrollments={enrollments}
        students={students}
        courses={courses}
      />
    </div>
  );
}
