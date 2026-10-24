
import { createContext, useContext, useEffect, useState } from "react";

const ManagementContext = createContext();

const initialStudents = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", department: "MCA" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", department: "MCA" },
];

const initialCourses = [
  { id: 101, name: "Full Stack Development", code: "MCA301", credits: 4 },
  { id: 102, name: "Database Management", code: "MCA302", credits: 3 },
];

export function ManagementProvider({ children }) {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("scm_students");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch {
      return initialStudents;
    }
  });

  const [courses, setCourses] = useState(() => {
    try {
      const saved = localStorage.getItem("scm_courses");
      return saved ? JSON.parse(saved) : initialCourses;
    } catch {
      return initialCourses;
    }
  });

  const [enrollments, setEnrollments] = useState(() => {
    try {
      const saved = localStorage.getItem("scm_enrollments");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("scm_students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("scm_courses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem("scm_enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  function addStudent(student) {
    setStudents((old) => [...old, { ...student, id: Date.now() }]);
  }

  function deleteStudent(id) {
    setStudents((old) => old.filter((student) => student.id !== id));
    setEnrollments((old) => old.filter((item) => item.studentId !== id));
  }

  function addCourse(course) {
    setCourses((old) => [...old, { ...course, id: Date.now() }]);
  }

  function deleteCourse(id) {
    setCourses((old) => old.filter((course) => course.id !== id));
    setEnrollments((old) => old.filter((item) => item.courseId !== id));
  }

  function addEnrollment(studentId, courseId) {
    studentId = Number(studentId);
    courseId = Number(courseId);

    const exists = enrollments.some(
      (item) => item.studentId === studentId && item.courseId === courseId
    );

    if (exists) return false;

    setEnrollments((old) => [
      ...old,
      { id: Date.now(), studentId, courseId },
    ]);

    return true;
  }

  return (
    <ManagementContext.Provider
      value={{
        students,
        courses,
        enrollments,
        addStudent,
        deleteStudent,
        addCourse,
        deleteCourse,
        addEnrollment,
      }}
    >
      {children}
    </ManagementContext.Provider>
  );
}

export function useManagement() {
  return useContext(ManagementContext);
}
