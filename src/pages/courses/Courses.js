import {useState, useEffect} from "react";
// import {useParams} from "react-router-dom";

import CourseCard from './CourseCard';
import './courses.css';

export default function Courses() {

    const [courses, setCourses] = useState([]);

    // const {course} = useParams();

    const COURSES_URL = "http://localhost:8000/api/courses";

    useEffect(() => {
        fetch(COURSES_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCourses(data);
        })
    }, [])

    
    // const actualCourses = [
    //     {id:1, name: "Programación", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20h"},
    // ];
    // const initialCourseState = [
    //     {id:2, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€", cursando: "true"},
    //     {id:3, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
    //     {id:4, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
    //     {id:5, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"},
    // ];

    // const [courses, setCourses] = useState(initialCourseState);

    useEffect(() => {
      // TODO: fetch
    }, [])

    return (
        //Solo necesitaré uno de estos dos, la propiedad cursando ya me va a venir en el los datos de la Api, y luego hacer un booleano de si lo está cursando o no

        // Incluir courses = {courses} en el return



        <div className="courses">
            {/* {actualCourses.map(course => {
                return (
                    <CourseCard cursando={true} name = {course.name} description = {course.description} teacher = {course.teacher} duration = {course.duration}/> 
                )
            })}     */}
            {courses.map(course => {
                return (
                    <CourseCard course={course} /> 
                )
            })}
          
        </div>
    )
}


