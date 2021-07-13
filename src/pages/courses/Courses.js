import {useState, useEffect} from "react";
import CourseCard from './CourseCard';
import { useAuthContext } from "../../context/AuthContext";
import './courses.css';

export default function Courses() {

    const [courses, setCourses] = useState([]);

    const COURSES_URL = "http://localhost:8000/api/courses";

    const { getAuthHeaders, isAuthenticated } = useAuthContext();    
  
    useEffect(() => { 

        const options = isAuthenticated? {headers: getAuthHeaders({"Content-type": "application/json"})} : {};
        
      
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


