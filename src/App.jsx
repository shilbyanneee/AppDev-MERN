import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import studentsData from "./data/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  function addStudent(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  return (
    <BrowserRouter>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/studentlist">Student List</a>
        <a href="/addstudents">Add Student</a>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<StudentList students={students} />}
        />
        <Route
          path="/studentlist"
          element={<StudentList students={students} />}
        />
        <Route
          path="/addstudents"
          element={<AddStudent addStudent={addStudent} />}
        />
        <Route
          path="/student/:id"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;