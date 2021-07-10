import {useState, useEffect} from "react";
import CourseCard from './CourseCard';
import { useAuthContext } from "../../context/AuthContext";
import './courses.css';

export default function Courses() {

    const [courses, setCourses] = useState([]);

    const COURSES_URL = "http://localhost:8000/api/courses";

    const { getAuthHeaders } = useAuthContext();

    const options = {
        // method: "PUT",
        headers: getAuthHeaders({"Content-type": "application/json"}),
        // body: JSON.stringify(form)
    }

    useEffect(() => {
        fetch(COURSES_URL, options)
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


