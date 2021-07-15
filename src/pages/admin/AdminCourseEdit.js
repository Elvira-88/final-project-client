import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import CourseCardEdit from "./CourseCardEdit";

export default function AdminCourseEdit() {  
     
    const [courses, setCourses] = useState([]);

    const {id} = useParams();    
    
  

    const COURSES_URL = "http://localhost:8000/api/courses/";  
 
    useEffect(() => {
        fetch(`${COURSES_URL}${id}`)
        .then(response => response.json())
        .then(data => {
            setCourses([data]);
        }) 
          
    }, [id])  

    return (
        <div className="courses">          
       
        {courses && courses.map(course => {
            return (
                <div>                        
                    <CourseCardEdit course={course} />
                </div>                  
                          
            )
        })}

        
    </div>
    )

  
}
