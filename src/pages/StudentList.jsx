import StudentCard from "../components/StudentCard";
 
function StudentList({ students }) {
 return (
   <div className="student-list-page">
     <h1>Student Lists!</h1>
     <div className="student-cards-container">
       {students.map((student) => (
         <StudentCard key={student.id} student={student} />
       ))}
     </div>
   </div>
 );
}
 
export default StudentList;