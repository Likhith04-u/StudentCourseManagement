import Students from "./pages/Students";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Enrollments from "./pages/Enrollments";

function ComingSoon({ title }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2>{title}</h2>
        <p className="text-secondary mb-0">
          This section will be implemented in the next step.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
