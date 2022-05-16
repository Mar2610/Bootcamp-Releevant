import Alumno from '../Alumno';

export default function Alumnos ({alumnos}) {
    return (
        <>
            {
                alumnos.map((student) => (
                    <Alumno key={student.nombre} alumno={student}/>
                ))
            }
        </>
    )
}