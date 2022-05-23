import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setTimeout(function () {
      return setCount((currentCount) => currentCount + 1);
    }, 5000);
  }

  return (
    <div className="App">
      <h1>Hello useState</h1>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

/**
 * Estado inicial (count = 0)
 * Estado 2 => count + 1 cuando count vale 0
 * Estado 3 => count + 1 cuando count vale 0
 */



 import { useState } from "react";
 import "./styles.css";
 
 export default function App() {
   const [students, setStudents] = useState([]); // Guardar los estudiantes que vayamos añadiendo con el formulario
   const [student, setStudent] = useState(""); // Guarda lo que el usuario escribe en el input
 
   function handleSubmit(event) {
     event.preventDefault(); // Evita el comportamiento natural de los formularios, que es recargar la página
     setStudents((currentStudents) => [...currentStudents, event.target.value]);
   }
 
   function handleStudent(event) {
     setStudent(event.target.value);
   }
 
   return (
     <div className="App">
       <h1>Hello UseState with form</h1>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Introduce tu nombre"
           value={student}
           onChange={handleStudent} // onChange es para escuchar y ejecuta la función que se le pasa
         />
         <button type="submit">Añadir</button>
       </form>
       <ul>
         {students.map((student) => (
           <li key={student}>{student}</li>
         ))}
       </ul>
     </div>
   );
 }
 





