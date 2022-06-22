import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_PEOPLE } from "../../api/settings";

export default function Home() {
  const [students, setStudents] = useState(null);

  useEffect(function () {
    async function fetchStudents() {
      const response = await fetch(GET_ALL_PEOPLE);
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {students &&
        students.map((student) => (
          <Link key={student._id} to={`/profile/${student._id}`}>
            <p>{student.nombre}</p>
          </Link>
        ))}
    </div>
  );
}
