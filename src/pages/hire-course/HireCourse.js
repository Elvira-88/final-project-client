import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function HireCourse() {
    
    //TODO: creamos un estado con la info del curso
    //TODO: obtener parametro id
    //TODO: hacer una peticion para obtener la info del curso de ese ID y actualizamos el estado

    const [CourseData, setCourseData] = useState({});

    // const {course} = useParams();

    // const COURSES_URL = "https://api/formatio/courses/";
    
    useEffect(() => {
        // fetch(`${COURSES_URL}${course}`)
        // .then(response => response.json())
        // .then(data => setCourseData(data))
        const data = {id:5, name: "Gestión del talento", description: "Enfocado para directivos y personal de rrhh", teacher: "Lorena Martínez Crespo", duration: "20", price: "750€"};
        setCourseData(data)
    }, [])


    return (
        <div>
            {/* TODO: Imprimimos nuestro estado con la info del curso */}
            <h3>Nombre del curso: {CourseData.name}</h3>
            <h3>Duración: {CourseData.duration}</h3>
            <h1>Total a pagar: {CourseData.price}</h1>
            <div>   
                <h4>Método de pago</h4>        
                <div>
                    <input type="radio" name="paymentMethod" id="paypalInput"></input>
                    <label for="paypalInput">Paypal</label>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="creditCardInput" checked></input>
                    <label for="creditCardInput">Tarjeta de crédito</label>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="bizumInput" required></input>
                    <label for="bizumInput">Bizum</label>
                </div>              
            </div>  
        </div>
    )
}
