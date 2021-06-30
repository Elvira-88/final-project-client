import {useState, useEffect} from "react";

import CourseCard from './CourseCard';
import './courses.css';

export default function Courses() {

    // http://localhost:8000/api/users/courses  (La url que me devuelve las matrículas de los cursos de x usuario)

    const [courses, setCourses] = useState([]);

    const COURSES_URL = "http://localhost:8000/api/courses";

    useEffect(() => {
        fetch(COURSES_URL)
        .then(response => response.json())
        .then(data=>setCourses(data))
    }, [])

    return (
     
        <div className="courses">
         
            {courses.map(course => {
                return (
                    <CourseCard course={course} /> 
                )
            })}
          
        </div>
    )
}


