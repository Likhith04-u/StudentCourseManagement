
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { useManagement } from "../context/ManagementContext";

export default function Students() {
  const { students, addStudent, deleteStudent } = useManagement();

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Student Management</h2>
        <p className="text-secondary">
          Register students and manage their academic information.
        </p>
      </div>

      <StudentForm onAddStudent={addStudent} />

      <StudentList
        students={students}
        onDeleteStudent={deleteStudent}
      />
    </div>
  );
}
