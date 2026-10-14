
import { useEffect, useState } from "react";
import api from "./api";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/students/")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Failed to load students.");
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {error && <p>{error}</p>}

      {students.map((student) => (
        <p key={student.id}>
          {student.full_name}
        </p>
      ))}
    </div>
  );
}
