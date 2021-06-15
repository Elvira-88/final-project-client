import CourseCard from './CourseCard';
import './courses.css';

export default function courses() {

    const teachers = [
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", duration: "20h"},
        {name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", duration: "20h"},

    ];

    return (
        <div className="courses">
            
            {teachers.map(course => {
                return (
                    <CourseCard name = {course.name} description = {course.description} duration = {course.duration}/> 
                )
            })}
          
        </div>
    )
}
