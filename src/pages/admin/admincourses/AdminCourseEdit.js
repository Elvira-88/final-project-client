import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import CourseCardEdit from "././CourseCardEdit";
import "./admincourses.css";

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
        <div className="courseEdit">          
       
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
