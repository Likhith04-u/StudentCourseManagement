
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import { useManagement } from "../context/ManagementContext";

export default function Courses() {
  const { courses, addCourse, deleteCourse } = useManagement();

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Course Management</h2>
        <p className="text-secondary">
          Create courses and manage course codes and credits.
        </p>
      </div>

      <CourseForm onAddCourse={addCourse} />

      <CourseList
        courses={courses}
        onDeleteCourse={deleteCourse}
      />
    </div>
  );
}
