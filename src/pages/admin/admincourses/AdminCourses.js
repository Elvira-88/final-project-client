import {useState, useEffect} from "react";
import CourseCard from '../../courses/CourseCard';
import { useAuthContext } from "../../../context/AuthContext";
import {useHistory} from "react-router-dom";
import "./admincourses.css";


export default function AdminCourses() {

    const [courses, setCourses] = useState([]);

    const history = useHistory();

    function handleAdd() {
        history.push("/admin-courses-add");
    }

    const COURSES_URL = "http://localhost:8000/api/courses";

    const { getAuthHeaders, isAuthenticated } = useAuthContext();    
  
    useEffect(() => { 

        const options = isAuthenticated? {headers: getAuthHeaders({"Content-type": "application/json"})} : {};
        
      
        fetch(COURSES_URL, options)
        .then(response => response.json()) 
        .then(data=>setCourses(data))             
    }, []) 
 
    return (
     
        <div className="adminCourses">
            <div className="buttonAddCourse">
                <button onClick={handleAdd}>Añadir un curso</button>
            </div>
            <div className="adminCourse">
                {courses.map(course => {
                    return (
                        <CourseCard course={course} /> 
                    )
                })}  
            </div>                 
             
        </div>
    )
}


