import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import CourseCardEdit from "./CourseCardEdit";

export default function AdminCourseEdit() {  
     
    const [course, setCourse] = useState({});

    const {id} = useParams();     

    const COURSES_URL = "http://localhost:8000/api/courses/";  
 
    useEffect(() => {
        fetch(`${COURSES_URL}${id}`)
        .then(response => response.json())
        .then(data => {
            setCourse(data);
        }) 
          
    }, [id])

    const [teachers, setTeachers] = useState([]);

    const TEACHERS_URL = "http://localhost:8000/api/teachers";

    useEffect(() => {
        fetch(TEACHERS_URL)
        .then(response => response.json())
        .then(data=>setTeachers(data))      
    }, [])

    return (
        <div className="courses">
            { course &&
                <CourseCardEdit course={course} />
            }
        </div>
    )

  
}
