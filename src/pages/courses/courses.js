import CourseCard from './CourseCard';
import './courses.css';

export default function courses() {
    const actualCourses = [
        {id:1, name: "Programación", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
    ];
    const courses = [
        {id:2, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
        {id:3, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
        {id:4, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
        {id:5, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
    ];

    return (
        <div className="courses">
            {actualCourses.map(course => {
                return (
                    <CourseCard cursando={true} name = {course.name} description = {course.description} teacher = {course.teacher} duration = {course.duration}/> 
                )
            })}    
            {courses.map(course => {
                return (
                    <CourseCard cursando={false}  name = {course.name} description = {course.description} teacher = {course.teacher} duration = {course.duration} price = {course.price}/> 
                )
            })}
          
        </div>
    )
}


