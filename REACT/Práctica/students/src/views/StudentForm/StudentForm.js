import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {CREATE_PERSON} from "../../api/settings";

export default function StudentForm() {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
  });

  function handleInputs(e) {
    const { name } = e.target;
    setNewStudent((student) => ({ ...student, [name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const requestStudent = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    };

    await fetch(CREATE_PERSON, requestStudent);
    navigate("/");
  }

  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" value={newStudent.nombre} onChange={handleInputs} />
        <input name="apellidos" type="text" value={newStudent.apellidos} onChange={handleInputs} />
        <input name="edad" type="number" value={newStudent.edad} onChange={handleInputs} />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}
