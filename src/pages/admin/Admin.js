import {useState, useEffect} from "react";
import CourseCardEdit from "./CourseCardEdit";
import TeamCardAdd from "./TeamCardAdd";
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
                    <CourseCardEdit course={course} />          
                )
            })}

            {teachers.map((teacher) => {
                return (
                    <TeamCardAdd teacher = {teacher}/>       
                )
            })}
          
        </div>
    )    
}

