import { useParams, Link } from "react-router-dom";
 
function StudentDetails({ students }) {
 const { id } = useParams();
 const student = students.find((s) => s.id === Number(id));
 
 if (!student) {
   return (
     <div className="student-details-page">
       <p>Student not found.</p>
       <Link to="/studentlist">Back to Student List</Link>
     </div>
   );
 }
 
 return (
   <div className="student-details-page">
     <h2>Student Details</h2>
     <p><strong>Name:</strong> {student.fullname}</p>
     <p><strong>Student Number:</strong> {student.studentNumber}</p>
     <p><strong>Course:</strong> {student.course}</p>
     <p><strong>Course Description:</strong> {student.courseDescription}</p>
     <p><strong>Year Level:</strong> {student.yearLevel}</p>
     <p><strong>Sex:</strong> {student.sex}</p>
     <Link to="/studentlist">Back to Student List</Link>
   </div>
 );
}
 
export default StudentDetails;