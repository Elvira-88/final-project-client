import CourseCard from './CourseCard';
import './courses.css';

export default function courses() {

    const courses = [
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},

    ];

    return (
        <div className="courses">
            
            {courses.map(course => {
                return (
                    <CourseCard name = {course.name} description = {course.description} teacher = {course.teacher} duration = {course.duration}/> 
                )
            })}
          
        </div>
    )
}
