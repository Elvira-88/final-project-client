import {useState, useEffect} from "react";

import CourseCard from './CourseCard';
import './courses.css';

export default function Courses() {

    // const [usersCourses, setUsersCourses] = useState([]);

    // const USERSCOURSES_URL = "http://localhost:8000/api/users/courses";

    // useEffect(() => {
    //     fetch(USERSCOURSES_URL)
    //     .then(response => response.json())
    //     .then(data=>setUsersCourses(data))
    // }, [])

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


