import {useState, useEffect} from "react";
import './admin.css';

export default function Admin() {

    const [courses, setCourses] = useState([]);

    const COURSES_URL = "http://localhost:8000/api/courses";

    useEffect(() => {
        fetch(COURSES_URL)
        .then(response => response.json())
        .then(data=>setCourses(data))
    }, [])

    const [teachers, setTeachers] = useState([]);

    const TEACHERS_URL = "http://localhost:8000/api/teachers";

    useEffect(() => {
        fetch(TEACHERS_URL)
        .then(response => response.json())
        .then(data=>setTeachers(data))
    }, [])

    return (
     
        <div className="courses">
         
            {courses.map(course => {
                return (
                    // <CourseCard course={course} /> 
                <div>
                    <h3>{course.name}</h3>
                    <h4>{course.description}</h4>
                    <h5>{course?.teacher?.name}</h5>
                    <h5>{course?.teacher?.lastName}</h5>
                    <p>{course.duration} horas</p>
                    <p>{course.price} euros</p>
                    <button>Eliminar</button>
                    <button>Modificar</button>               
                </div>
                )
            })}

            {teachers.map((teacher) => {
                return (
                    // <TeamCard teacher = {teacher}/> 
                <div className="TeamCard">
                    <img className="imgTeam"src={teacher.avatar} alt=""/>   
                    <div className="teacherName">
                        <h4>{teacher.name}</h4>
                        <h4>{teacher.lastName}</h4>
                        <p>{teacher.description}</p>   
                    </div>
                    <button>Eliminar</button>
                    <button>Modificar</button>                
              
                </div>
                )
            })}
          
        </div>
    )    
}

