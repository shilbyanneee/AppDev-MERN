import { Link } from "react-router-dom";
 
function StudentCard({ student }) {
 return (
   <div className="student-card">
     <h2>{student.fullname}</h2>
     <p><strong>Student Number:</strong> {student.studentNumber}</p>
     <p><strong>Course:</strong> {student.course}</p>
     <p><strong>Course Description:</strong> {student.courseDescription}</p>
     <Link to={`/student/${student.id}`}>
       <button>View full details</button>
     </Link>
   </div>
 );
}
 
export default StudentCard;