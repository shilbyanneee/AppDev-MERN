import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Ito ang gagamitin para awtomatikong lumabas ang description ng course
const courseDescriptions = {
  BSIT: "Bachelor of Science in Information Technology",
  BSCS: "Bachelor of Science in Computer Science",
  BSIS: "Bachelor of Science in Information Systems",
};

function AddStudent({ addStudent }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    studentNumber: "",
    course: "BSIT",
    yearLevel: "1st Year",
    sex: "Male",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // para hindi mag-refresh yung page

    const newStudent = {
      id: Date.now(), // unique id para gumana ang Link sa StudentCard
      ...formData,
      courseDescription: courseDescriptions[formData.course],
    };

    // Ito yung function na pumupunta sa logic ng pag-store
    // sa existing data (galing sa App.jsx)
    addStudent(newStudent);

    // Sabay i-reset yung form
    setFormData({
      fullname: "",
      studentNumber: "",
      course: "BSIT",
      yearLevel: "1st Year",
      sex: "Male",
    });

    // Ipadala pabalik sa StudentList para makita agad
    navigate("/studentlist");
  }

  return (
    <div className="add-student-page">
      <form onSubmit={handleSubmit} className="add-student-form">
        <h2>Add Student</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <label>Student Number</label>
        <input
          type="text"
          name="studentNumber"
          value={formData.studentNumber}
          onChange={handleChange}
          required
        />

        <label>Course</label>
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="BSIT">BSIT</option>
          <option value="BSCS">BSCS</option>
          <option value="BSIS">BSIS</option>
        </select>

        <label>Year Level</label>
        <select name="yearLevel" value={formData.yearLevel} onChange={handleChange}>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <label>Sex</label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;