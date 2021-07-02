import {useState, useEffect} from "react";
import { useAuthContext } from "../../context/AuthContext";

import CourseCard from './CourseCard';
import './courses.css';

export default function Courses() {

    // const { isAuthenticated, setIsAuthenticated } = useAuthContext();
 
    // const [usersCourses, setUsersCourses] = useState([]);

    // const USERSCOURSES_URL = "http://localhost:8000/api/users/courses";

    // useEffect(() => {
    //     fetch(USERSCOURSES_URL)
    //     .then(response => response.json())
    //     .then(data=>setUsersCourses(data))
    // }, [])

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


