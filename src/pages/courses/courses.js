import CourseCard from './CourseCard';
import './courses.css';

export default function courses() {
    const actualCourses = [
        {name: "Programacion", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
    ];
    const courses = [
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
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
                    <CourseCard cursando={false}  name = {course.name} description = {course.description} teacher = {course.teacher} duration = {course.duration}/> 
                )
            })}
          
        </div>
    )
}


